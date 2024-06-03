function Overlay({
  setOverlay,
}: {
  setOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const closeOverlay = () => {
    setOverlay(false);
  };
  return (
    <div className="absolute">
      <div className="w-full h-full fixed top-0 left-0 z-10 bg-overlay">
        <div className="w-[250px] h-full bg-[#fff] z-10">
          <div>
            <img
              onClick={closeOverlay}
              src="/images/icon-close.svg"
              alt="close"
            />
            <h1>xd</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overlay;

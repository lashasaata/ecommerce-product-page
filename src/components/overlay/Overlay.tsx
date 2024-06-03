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
          <div className="flex flex-col items-start gap-[54px] pt-[25px] pl-[25px]">
            <img
              onClick={closeOverlay}
              src="/images/icon-close.svg"
              alt="close"
            />
            <nav>
              <h2>Collections</h2>
              <h2>Men</h2>
              <h2>Women</h2>
              <h2>About</h2>
              <h2>Contact</h2>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overlay;

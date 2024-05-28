function Navigate() {
  return (
    <header className="flex justify-between items-center px-6 pt-[19px] pb-6">
      <div className="flex gap-4 items-center">
        <img src="/images/icon-menu.svg" alt="menu" />
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="flex items-center gap-[22px]">
        <img src="/images/icon-cart.svg" alt="cart" />
        <img
          src="/images/image-avatar.png"
          alt="avatar"
          className="w-6 h-6 rounded-full"
        />
      </div>
    </header>
  );
}

export default Navigate;

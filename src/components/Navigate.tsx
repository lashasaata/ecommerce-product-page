import { useContext, useEffect } from "react";
import { Mycontext } from "../App";

function Navigate() {
  const context = useContext(Mycontext);

  //counts products amount in cart
  let products = 0;
  context.useData.user[0].cart.map((e) => (products += e.amount));

  return (
    <header className="flex justify-between items-center px-6 pt-[19px] pb-6">
      <div className="flex gap-4 items-center">
        <img src="/images/icon-menu.svg" alt="menu" />
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="flex items-center gap-[22px]">
        <div className="relative">
          <img src="/images/icon-cart.svg" alt="cart" />
          {context.useData.user[0].cart.length > 0 ? (
            <div className="h-[13px] flex items-center rounded-[6.5px] bg-[#ff7e1b] px-[6px] text-[10px] text-[#fff] font-[700] leading-[10px] absolute top-[-6px] left-[9px]">
              {products}
            </div>
          ) : (
            ""
          )}
        </div>
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

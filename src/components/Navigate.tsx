import { useContext, useState } from "react";
import { Mycontext } from "../App";

function Navigate() {
  const context = useContext(Mycontext);
  const [cartList, setCartList] = useState(false);

  const handleList = () => {
    setCartList(!cartList);
  };
  //counts products amount in cart
  let products = 0;
  context.useData.user[0].cart.map((e) => (products += e.amount));

  return (
    <header className="flex justify-between items-center px-6 pt-[19px] pb-6">
      <div className="flex gap-4 items-center">
        <img src="/images/icon-menu.svg" alt="menu" />
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="flex items-center gap-[22px] relative">
        <div className="relative">
          <img onClick={handleList} src="/images/icon-cart.svg" alt="cart" />
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
        {cartList ? (
          <div className="w-[360px] bg-[#fff] rounded-[10px] flex flex-col gap-6 shadow-cart absolute bottom-[-33px] right-[-17px] transform translate-y-full">
            <div>Cart</div>
            {context.useData.user[0].cart.map((e) => {
              return (
                <section>
                  <img src={e.image} alt="product" />
                  <div>
                    <h2>{e.name}</h2>
                    <div>
                      <span>
                        ${(e.price * e.discount).toFixed(2)}x{e.amount}
                      </span>
                      <span>
                        ${(e.price * e.discount * e.amount).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <img src="/images/icon-delete.svg" alt="delete" />
                </section>
              );
            })}
            <button>Checkout</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Navigate;

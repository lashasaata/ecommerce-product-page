import { useContext, useState, useEffect, useRef } from "react";
import { Mycontext } from "../App";

function Navigate() {
  const context = useContext(Mycontext);
  const [cartList, setCartList] = useState(false);
  const sectionRef = useRef(null);

  const handleList = () => {
    setCartList(!cartList);
  };
  //counts products amount in cart
  let products = 0;
  context.useData.user[0].cart.map((e) => (products += e.amount));

  //delete product from the cart
  const handleDelete = (id: number) => {
    const updatedUser: Tdata = {
      ...context.useData.user[0],
      cart: context.useData.user[0].cart.filter((item) => item.id !== id),
    };
    context.setUsedata(() => {
      return {
        ...context.useData,
        user: [updatedUser],
      };
    });
  };

  // closes the cart section after click on other place

  // useEffect(() => {
  //   if (cartList) {
  //     const handleOutsideClick = (event) => {
  //       if (sectionRef.current && !sectionRef.current.contains(event.target)) {
  //         setCartList(false);
  //       }
  //     };

  //     document.addEventListener("click", handleOutsideClick);

  //     return () => {
  //       document.removeEventListener("click", handleOutsideClick);
  //     };
  //   }
  // });
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
          <div
            ref={sectionRef}
            className="w-[360px] bg-[#fff] rounded-[10px] flex flex-col items-center gap-6 shadow-cart absolute bottom-[-33px] right-[-17px] transform translate-y-full"
          >
            <div className="w-full px-6 pt-6 pb-[27px] border-b order-solid border-[#e4e9f2]">
              <span className="text-base text-[#1d2026] fornt-[700] leading-[1]">
                Cart
              </span>
            </div>
            {context.useData.user[0].cart.length > 0 ? (
              <div className="w-full flex flex-col items-center gap-6">
                {" "}
                <div className="w-full max-h-[140px] overflow-auto flex flex-col gap-6">
                  {context.useData.user[0].cart.map((e, index: number) => {
                    return (
                      <section
                        key={index}
                        className="w-full flex items-center justify-between px-6"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={e.image}
                            alt="product"
                            className="w-[50px] h-[50px] rounded-[4px]"
                          />
                          <div>
                            <h2 className="text-base text-[#69707d] font-[500] leading-[1.63] ">
                              {e.name}
                            </h2>
                            <div>
                              <span className="text-base text-[#69707d] font-[500] leading-[1.63] ">
                                ${e.price} x {e.amount}
                              </span>{" "}
                              <span className="text-base text-[#1d2026] font-[500] leading-[1.63] ">
                                $
                                {(Number(e.price) * Number(e.amount)).toFixed(
                                  2
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        <img
                          onClick={() => handleDelete(e.id)}
                          src="/images/icon-delete.svg"
                          alt="delete"
                          className="ml-1"
                        />
                      </section>
                    );
                  })}
                </div>
                <button className="w-[312px] h-[56px] rounded-[10px] bg-[#ff7e1b] flex justify-center pt-[22px] mb-[32px] text-base text-[#fff] font-[700] leading-[1] ">
                  Checkout
                </button>
              </div>
            ) : (
              <span className="text-base text-[#69707d] font-[700] mt-[53px] mb-[85px] leading-[1.63]">
                Your cart is empty.
              </span>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Navigate;

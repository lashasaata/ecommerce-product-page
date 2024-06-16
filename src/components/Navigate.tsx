import { useContext, useState, useEffect, useRef } from "react";
import { Mycontext } from "../App";
import Overlay from "./overlay/Overlay";

function Navigate() {
  const context = useContext(Mycontext);
  const [isOverlay, setOverlay] = useState(false);
  const sectionRef = useRef(null);

  const handleList = () => {
    context.setCartList(!context.cartList);
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

  //clears product cart

  const purchase = () => {
    const updatedUser: Tdata = {
      ...context.useData.user[0],
      cart: [],
    };
    context.setUsedata(() => {
      return {
        ...context.useData,
        user: [updatedUser],
      };
    });
  };

  // opens and closes overlay component

  const openOverlay = () => {
    setOverlay(true);
  };

  // routes for menu
  const [activeMenu, setActiveMenu] = useState({
    Collections: true,
    Men: false,
    Women: false,
    About: false,
    Contact: false,
  });
  const menuDr = (e) => {
    const closedRoutes = {
      Collections: false,
      Men: false,
      Women: false,
      About: false,
      Contact: false,
    };
    const target = e.target;
    setActiveMenu(() => {
      return {
        ...closedRoutes,
        [target.innerText]: true,
      };
    });
    console.log(activeMenu);
  };

  return (
    <header className="flex justify-between items-center lg:items-start px-6 lg:px-[0px] pt-[19px] lg:pt-[28px] pb-6 lg:pb-[0px]  lg:border-b lg:border-solid lg:border-[#e4e9f2]">
      <div className="flex gap-4 lg:gap-[56px] items-center lg:items-start lg:pt-[13px]">
        <img
          onClick={openOverlay}
          className="lg:hidden"
          src="/images/icon-menu.svg"
          alt="menu"
        />
        <img className="lg:mt-[2px]" src="/images/logo.svg" alt="logo" />
        <nav className="flex items-center lg:items-start gap-8 hidden lg:flex">
          <div
            className={
              activeMenu.Collections
                ? "border-b-4 border-solid border-[#ff7e1b] pb-10"
                : ""
            }
          >
            <h2
              onClick={menuDr}
              className={`${
                activeMenu.Collections ? "text-[#1d2026]" : "text-[#69707d]"
              } text-[15px] font-[500] leading-[1.73] hover:text-[#1d2026] hover:cursor-pointer`}
            >
              Collections
            </h2>
          </div>
          <div
            className={
              activeMenu.Men
                ? "border-b-4 border-solid border-[#ff7e1b] pb-10"
                : ""
            }
          >
            <h2
              onClick={menuDr}
              className={`${
                activeMenu.Men ? "text-[#1d2026]" : "text-[#69707d]"
              } text-[15px] font-[500] leading-[1.73] hover:text-[#1d2026] hover:cursor-pointer`}
            >
              Men
            </h2>
          </div>
          <div
            className={
              activeMenu.Women
                ? "border-b-4 border-solid border-[#ff7e1b] pb-10"
                : ""
            }
          >
            <h2
              onClick={menuDr}
              className={`${
                activeMenu.Women ? "text-[#1d2026]" : "text-[#69707d]"
              } text-[15px] font-[500] leading-[1.73] hover:text-[#1d2026] hover:cursor-pointer`}
            >
              Women
            </h2>
          </div>
          <div
            className={
              activeMenu.About
                ? "border-b-4 border-solid border-[#ff7e1b] pb-10"
                : ""
            }
          >
            <h2
              onClick={menuDr}
              className={`${
                activeMenu.About ? "text-[#1d2026]" : "text-[#69707d]"
              } text-[15px] font-[500] leading-[1.73] hover:text-[#1d2026] hover:cursor-pointer`}
            >
              About
            </h2>
          </div>
          <div
            className={
              activeMenu.Contact
                ? "border-b-4 border-solid border-[#ff7e1b] pb-10"
                : ""
            }
          >
            <h2
              onClick={menuDr}
              className={`${
                activeMenu.Contact ? "text-[#1d2026]" : "text-[#69707d]"
              } text-[15px] font-[500] leading-[1.73] hover:text-[#1d2026] hover:cursor-pointer`}
            >
              Contact
            </h2>
          </div>
        </nav>
      </div>
      <div className="flex items-center gap-[22px] lg:gap-[46px] relative">
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
          className="w-6 lg:w-[50px] h-6 lg:h-[50px] rounded-full"
        />
        {context.cartList ? (
          <div
            ref={sectionRef}
            className="w-[360px] bg-[#fff] rounded-[10px] flex flex-col items-center gap-6 shadow-cart absolute bottom-[-33px] right-[-17px] transform translate-y-full z-10"
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
                <button
                  onClick={purchase}
                  className="w-[312px] h-[56px] rounded-[10px] bg-[#ff7e1b] flex justify-center pt-[22px] mb-[32px] text-base text-[#fff] font-[700] leading-[1] "
                >
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
      {isOverlay ? <Overlay setOverlay={setOverlay} /> : ""}
    </header>
  );
}

export default Navigate;

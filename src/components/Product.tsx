import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { useParams } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { Mycontext } from "../App";

function Product() {
  const context = useContext(Mycontext);
  const params = useParams();
  const id = params.id;

  const findPrice = () => {};

  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slider = React.useRef(null);

  const next = () => {
    if (slider.current) {
      slider.current.slickNext();
    }
  };

  const previous = () => {
    if (slider.current) {
      slider.current.slickPrev();
    }
  };

  //
  const [amount, setAmount] = useState(0);
  const addproduct = () => {
    if (amount !== 10) {
      setAmount(amount + 1);
    }
  };
  const cutproduct = () => {
    if (amount !== 0) {
      setAmount(amount - 1);
    }
  };

  const addHandler = (e) => {
    if (amount > 0) {
      context.setUsedata((prevData) => {
        const updatedUser = {
          ...prevData.user[0],
          cart: [
            ...prevData.user[0].cart,
            {
              id: Math.floor(Math.random() * 1000),
              name: e.name,
              image: e.images.first,
              price: e.price * e.discount,
              amount: amount,
            },
          ],
        };

        return {
          ...prevData,
          user: [updatedUser],
        };
      });
    }
    setAmount(0);
  };
  return (
    <main
      onClick={() => context.setCartList(false)}
      className="lg:flex lg:justify-center lg:items-center"
    >
      {context.useData.products
        .filter((element: Tproduct) => element.id == Number(id))
        .map((e: Tproduct, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[80px] xl:gap-[125px] overflow-hidden lg:mb-20"
            >
              <div className="relative">
                <Slider ref={slider} {...settings}>
                  <div className="w-[300px] h-[300px] bg-[#12de3]">
                    <img src={e.images.first} alt="first" />
                  </div>
                  <div>
                    <img src={e.images.second} alt="second" />
                  </div>
                  <div>
                    <img src={e.images.third} alt="third" />
                  </div>
                  <div>
                    <img src={e.images.fourth} alt="fourth" />
                  </div>
                </Slider>
                <button
                  onClick={previous}
                  className="w-10 h-10 bg-[#fff] rounded-full flex items-center absolute top-1/2 left-[16px] transform -translate-y-1/2"
                >
                  <img
                    src="/images/icon-previous.svg"
                    alt="previous"
                    className="h-3 ml-[15px]"
                  />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 bg-[#fff] rounded-full flex items-center justify-end absolute top-1/2 right-[16px] transform -translate-y-1/2"
                >
                  <img
                    src="/images/icon-next.svg"
                    alt="next"
                    className="h-3 mr-[15px]"
                  />
                </button>
              </div>
              <section className="w-[327px] lg:w-[445px] flex flex-col gap-4 lg:gap-[28px] mb-20 lg:mb-0">
                <span className="text-xs lg:text-[13px] text-[#ff7e1b] font-[700] tracking-[1.85px] lg:tracking-[2] leading-[13px]">
                  {e.company}
                </span>
                <h1 className="text-[28px] lg:text-[44px] text-[#1d2026] font-[700] leading-[1.14] lg:leading-[1.09] mt-[3px] lg:mt-0">
                  {e.name}
                </h1>
                <p className="text-[15px] lg:text-base text-[#69707d] font-[500] leading-[1.67] lg:leading-[1.63] lg:mt-1">
                  {e.description}
                </p>
                <div className="flex lg:flex-col items-center lg:items-start lg:gap-[10px] justify-between mt-2 lg:mt-[-4px]">
                  <div className="flex items-center gap-4">
                    <span className="text-[28px] text-[#1d2026] font-[700] leading-[28px]">
                      ${(e.price * e.discount).toFixed(2)}
                    </span>
                    <div className="w-[51px] bg-[#ffeee2] flex lg:items-end justify-center pt-[7px] pb-1 lg:pb-[6px] rounded-[6px] text-base text-[#ff7e1b] font-[700] leading-[16px] mt-1">
                      {e.discount * 100}%
                    </div>
                  </div>
                  <span className="text-base text-[#b6bcc8] font-[700] leading-[1.63] line-through">
                    ${e.price.toFixed(2)}
                  </span>
                </div>
                <section className="flex flex-col lg:flex-row lg:justify-between gap-4 mt-2 lg:mt-1">
                  <div className="lg:w-[176px] flex items-center justify-between bg-[#f6f8fd] rounded-[10px] pt-[22px] px-6 lg:px-4 pb-[18px]">
                    <img
                      onClick={cutproduct}
                      className="hover:cursor-pointer"
                      src="/images/icon-minus.svg"
                      alt="minus"
                    />
                    <span className="text-base text-[#1d2026] font-[700] leading-[1] mt-[-3px]">
                      {amount}
                    </span>
                    <img
                      onClick={addproduct}
                      className="hover:cursor-pointer"
                      src="/images/icon-plus.svg"
                      alt="plus"
                    />
                  </div>
                  <button
                    onClick={() => addHandler(e)}
                    className="lg:w-[232px] xl:w-[272px] flex justify-center items-center gap-4 bg-[#ff7e1b] rounded-[10px] shadow-addToCart pt-[19px] pb-[18px]"
                  >
                    <svg
                      className="hover:cursor-pointer"
                      width="21.5"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                        fill="#fff"
                        fillRule="nonzero"
                      />
                    </svg>
                    <span className="text-base text-[#fff] font-[700] leading-[16px]">
                      Add to cart
                    </span>
                  </button>
                </section>
              </section>
            </div>
          );
        })}
    </main>
  );
}

export default Product;

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Mycontext } from "../App";

function Product() {
  const context = useContext(Mycontext);
  const params = useParams();
  const id = params.id;

  const findPrice = () => {};

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <img src="/images/icon-previous.svg" alt="prev" />,
    nextArrow: <img src="/images/icon-next.svg" alt="next" />,
  };

  return (
    <main>
      {context.useData.products
        .filter((element: Tproduct) => element.id == Number(id))
        .map((e: Tproduct, index: number) => {
          return (
            <div key={index} className="flex flex-col items-center gap-6">
              {/* <Slider {...settings}>
                <div>
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
              </Slider> */}
              <section className="w-[327px] flex flex-col gap-4 mb-20">
                <span className="text-xs text-[#ff7e1b] font-[700] tracking-[1.85px]">
                  {e.company}
                </span>
                <h1 className="text-[28px] text-[#1d2026] font-[700] leading-[1.14] mt-[3px]">
                  {e.name}
                </h1>
                <p className="text-[15px] text-[#69707d] font-[500] leading-[1.67]">
                  {e.description}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-4">
                    <span className="text-[28px] text-[#1d2026] font-[700] leading-[28px]">
                      ${(e.price * e.discount).toFixed(2)}
                    </span>
                    <div className="w-[51px] bg-[#ffeee2] flex justify-center pt-[7px] pb-1 rounded-[6px] text-base text-[#ff7e1b] font-[700] leading-[16px] mt-1">
                      {e.discount * 100}%
                    </div>
                  </div>
                  <span className="text-base text-[#b6bcc8] font-[700] leading-[1.63] line-through">
                    ${e.price.toFixed(2)}
                  </span>
                </div>
                <section className="flex flex-col gap-4 mt-2">
                  <div className="flex items-center justify-between bg-[#f6f8fd] rounded-[10px] pt-[22px] px-6 pb-[18px]">
                    <img src="/images/icon-minus.svg" alt="minus" />
                    <span className="text-base text-[#1d2026] font-[700] leading-[1] mt-[-3px]">
                      0
                    </span>
                    <img src="/images/icon-plus.svg" alt="plus" />
                  </div>
                  <button className="flex justify-center items-center gap-4 bg-[#ff7e1b] rounded-[10px] shadow-addToCart pt-[19px] pb-[18px]">
                    {/* <img
                      className="w-4 h-4"
                      src="/images/icon-cart.svg"
                      alt="cart"
                    /> */}
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

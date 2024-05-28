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
            <div key={index}>
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
              <section>
                <span>{e.company}</span>
                <h1>{e.name}</h1>
                <p>{e.description}</p>
                <div>
                  <div>
                    <span>${(e.price * e.discount).toFixed(2)}</span>
                    <div>{e.discount * 100}%</div>
                  </div>
                  <span>${e.price.toFixed(2)}</span>
                </div>
                <section>
                  <div>
                    <img src="/images/icon-minus.svg" alt="minus" />
                    <span></span>
                    <img src="/images/icon-plus.svg" alt="plus" />
                  </div>
                  <button>
                    <img src="/images/icon-cart.svg" alt="cart" />
                    <span>Add to cart</span>
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

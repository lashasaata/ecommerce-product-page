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
              <Slider {...settings}>
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
              </Slider>
            </div>
          );
        })}
    </main>
  );
}

export default Product;

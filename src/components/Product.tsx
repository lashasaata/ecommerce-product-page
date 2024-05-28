import Slider from "react-slick";

function Product() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main>
      <Slider {...settings}>
        <div>
          <img src="/images/image-product-1.jpg" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </Slider>
    </main>
  );
}

export default Product;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    const settings = {
      // Customize slider settings here
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set autoplay interval in milliseconds (3 seconds)
    };
  
    return (
      <div className="image-slider">
        <Slider {...settings}>
          <div>
            <img src="https://www.bookswagon.com/bannerimages/80_inr.jpg?v=1.8" alt="Image 1" />
          </div>
          <div>
            <img src="https://www.bookswagon.com/bannerimages/79_inr.jpg?v=1.9" alt="Image 2" />
          </div>
          <div>
            <img src="https://www.bookswagon.com/bannerimages/83_inr.jpg?v=1.9" alt="Image 3" />
          </div>
          <div>
            <img src="https://www.bookswagon.com/bannerimages/84_inr.jpg?v=3.1" alt="Image 3" />
          </div>
          <div>
            <img src="https://www.bookswagon.com/bannerimages/81_inr.jpg?v=3.1" alt="Image 3" />
          </div>
          <div>
            <img src="https://www.bookswagon.com/bannerimages/85_inr.jpg" alt="Image 3" />
          </div>
          <div>
            <img src="https://www.bookswagon.com/bannerimages/86_inr.jpg?v=2.5" alt="Image 3" />
          </div>
          {/* Add more slider items as needed */}
        </Slider>
      </div>
    );
  }
export default ImageSlider;  
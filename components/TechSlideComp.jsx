import { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      //   centerMode: true,
      autoplay: true,
      speed: 10000,
      //   centerPadding: "60px",
      autoplaySpeed: 1000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            speed: 8000,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            speed: 5000,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            speed: 3000,
          },
        },
      ],
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <i className="bx bxl-html5"></i>
            <p>HTML5</p>
          </div>
          <div>
            <i className="bx bxl-css3"></i>
            <p>CSS3</p>
          </div>
          <div>
            <i className="bx bxl-bootstrap"></i>
            <p>BOOTSTRAP</p>
          </div>
          <div>
            <i className="bx bxl-tailwind-css"></i>
            <p>TAILWIND CSS</p>
          </div>
          <div>
            <i className="bx bxl-sass"></i>
            <p>SASS</p>
          </div>
          <div>
            <i className="bx bxl-javascript"></i>
            <p>JAVASCRIPT</p>
          </div>

          <div>
            <i className="bx bxl-typescript"></i>
            <p>TYPESCRIPT</p>
          </div>
          <div>
            <i className="bx bxl-react"></i>
            <p>REACT</p>
          </div>
          <div>
            <i className="bx bxl-firebase"></i>
            <p>FIREBASE</p>
          </div>
          <div>
            <i className="bx bxl-git"></i>
            <p>GIT</p>
          </div>
          <div>
            <i className="bx bxl-nodejs"></i>
            <p>NODE</p>
          </div>
          <div>
            <i className="bx bxl-github"></i>
            <p>GITHUB</p>
          </div>
        </Slider>
      </div>
    );
  }
}

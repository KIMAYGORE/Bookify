import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          {" "}
          Thank you so much for your help in organising our India trip. We had
          an absolutely fantastic time, helped by your companies amazing
          organisation and all your great staff. It was an amazing experience.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src={
              "https://media.licdn.com/dms/image/D5603AQFnUAiT6BRO0w/profile-displayphoto-shrink_800_800/0/1683781550406?e=2147483647&v=beta&t=fCCCp_o3PdI_MlO3nEOLxauhLcCoie5uLSkNyCSCHh4"
            }
            className="w-25 h-25 rounded-2"
            alt=""
          />
          <div>
            <h6 className="mb-0 mt-3">Pankaj Sharma</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          The whole trip worked very well.Details of the offer very clear with
          accommodation options spelt out clearly when booking hotels and
          accommodation.Thoroughly enjoyed the trip.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src={
              "https://drifterplanet.com/wp-content/uploads/2016/02/Anisha-Victor.jpg"
            }
            className="w-25 h-25 rounded-2"
            alt=""
          />
          <div>
            <h6 className="mb-0 mt-3">Anisha Victor</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Thank you for a wonderful trip. You were excellent in communication
          and sorting out our tailor made holiday . You were very professional.
          All details were well taken care of.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src={
              "https://media.licdn.com/dms/image/D5603AQFnUAiT6BRO0w/profile-displayphoto-shrink_800_800/0/1683781550406?e=2147483647&v=beta&t=fCCCp_o3PdI_MlO3nEOLxauhLcCoie5uLSkNyCSCHh4"
            }
            className="w-25 h-25 rounded-2"
            alt=""
          />
          <div>
            <h6 className="mb-0 mt-3">Devesh Singh</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          We are very pleased to share our recent travel experiences which was
          organized by Travel Pvt.Ltd.Travel arrangements were very good and
          accommodations were wonderful.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src={
              "https://www.aljazeera.com/wp-content/uploads/2022/01/Ragini-Das-Co-founder-leap.club_.jpg?resize=1800%2C1800"
            }
            className="w-25 h-25 rounded-2"
            alt=""
          />
          <div>
            <h6 className="mb-0 mt-3">Ragini Das</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;

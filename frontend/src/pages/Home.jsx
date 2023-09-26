
import React, { useRef } from "react";
import "../styles/home.css";
import { Container, Row, Col, CardSubtitle } from "reactstrap";
// import heroVideo from "../assets/images/nature.mp4";
// import heroVideo1 from "../assets/images/Dubai.mp4";
// import heroVideo2 from "../assets/images/Enjoy.mp4";
import experienceImg from "../assets/images/home1.jpg";
import contactUs from "../assets/images/contactUs.jpg";
import Subtitle from "./../shared/subtitle";
import SearchBar from "./../shared/SearchBar";
// import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import NewsLetter from "../shared/Newsletter";
import { Carousel } from "react-bootstrap";
//impoting tour form for admin
import TourForm from "../components/Form/TourForm";
import emailjs from "@emailjs/browser";
import Contact from "../pages/ContactUs";

const Home = () => {

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_w8gippe', 'template_z87j74l', form.current, 'wTamXj6bpgewboYfe')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });

  // };
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w8gippe', 'template_z87j74l', form.current, 'wTamXj6bpgewboYfe')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <Container>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12">
            <MyAppCarousel />
            {/* <VideoCarousel /> */}
          </div>
          <SearchBar />
        </div>
      </Container>

      {/* ========== FEATURED TOUR SECTION START ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ========== FEATURED TOUR SECTION END =========== */}

      {/* ===================================================*/}
      <section>
        <Container>
          <Row>
            <MyServices />
          </Row>
        </Container>
      </section>

      {/* ==================================================  */}

      {/* ========== EXPERIENCE SECTION START ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                User experience can vary based on your platform's design,
                features, and the specific needs of your target audience.
                Providing a seamless, user-friendly experience at every step is
                crucial for the success of your tour and booking project.
                <p>
                  <br />
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Year experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== EXPERIENCE SECTION END ============== */}

      {/* ========== GALLERY SECTION START ============== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== GALLERY SECTION END ================ */}

      {/* ========== TESTIMONIAL SECTION START ================ */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== TESTIMONIAL SECTION END ================== */}
      <NewsLetter />
      <section className="contact" id="contact">
        <h1 style={{ textAlign: 'center', letterSpacing: '10px', fontWeight: 'bold', color: 'orange' }}>
          <span>C</span>
          <span>O</span>
          <span>N</span>
          <span>T</span>
          <span>A</span>
          <span>C</span>
          <span>T</span>
          <span>'</span>
          <span>U</span>
          <span>S</span>
        </h1>
        <Contact />
      </section>
    </>
  );
};

function MyAppCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <video
          className="carousel"
          // src={heroVideo}
          alt="First slide"
          loop
          autoPlay
          muted
        //  controls
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          <p>
            Let’s make a memory, Discover new places with us, new world awaits
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <video
          className="carousel"
          // src={heroVideo1}
          alt="Second slide"
          loop
          autoPlay
          muted
        //  controls
        />
      </Carousel.Item>
      <Carousel.Item>
        <video
          className="carousel"
          // src={heroVideo2}
          alt="Third slide"
          loop
          autoPlay
          muted
        //  controls
        />
      </Carousel.Item>
    </Carousel>
  );
}

function MyServices() {
  return (

    <div className="services" id="services">
      <h1 style={{ textAlign: 'center', letterSpacing: '10px', fontWeight: 'bold', color: 'orange' }}>
        <span>S</span>
        <span>E</span>
        <span>R</span>
        <span>V</span>
        <span>I</span>
        <span>C</span>
        <span>E</span>
        <span>S</span>
      </h1>


      <div className="box-container">
        <div className="box">
          <i className="fa fa-globe"></i>
          <h4>Tour Listing</h4>
          <p>
            Display various tours with details such as destination, itinerary,
            duration, pricing, and available dates. Provide filters and search
            options to help users find suitable tours
          </p>
        </div>

        <div className="box">
          <i className="fa fa-bus"></i>
          {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-burger-soda" /> */}
          <h4>Bus Booking</h4>
          <p>
            Allow users to search for available bus routes, timings, seat
            availability, and prices. Provide seat selection functionality
            during the booking process
          </p>
        </div>
        <div className="box">
          <i className="fa fa-home"></i>
          <h4>Hotel Bookings</h4>
          <p>
            Allow users to choose room types, view room details, and book rooms
            for specific dates. Provide real-time availability updates to avoid
            overbooking.
          </p>
        </div>

        <div className="box">
          <i className="fa fa-comments"></i>
          <h4>Review and Rating</h4>
          <p>
            Allow users to leave reviews and ratings for tours or bus services
            they've used. Display these reviews to help other users make
            informed decisions.
          </p>
        </div>

        <div className="box">
          <i className="fa fa-shield"></i>
          <h4>Saftey Guide</h4>
          <p>
            Implement security measures to protect user data and transactions.
            Use encryption for sensitive information like payment details.
          </p>
        </div>

        <div className="box">
          <i className="fa fa-credit-card"></i>
          <h4>Payment Gateway Integration</h4>
          <p>
            Integrate a payment gateway to enable users to securely pay for
            their bookings online. Support various payment methods: credit/debit
            cards, digital wallets, etc.
          </p>
        </div>
      </div>
    </div>

    // <!-- services section ends here -->
  );
}

export default Home;

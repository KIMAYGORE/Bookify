import React, { useState, useContext } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import axios from "axios";

import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title, guestSize } = tour;

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });


  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const checkoutClickHandler = async (totalAmount) => {
    try {
      if (!user || user === undefined || user === null)
        return alert("Please sign in");

      const loggedUserDetails = localStorage.getItem('user');
      console.log(loggedUserDetails, loggedUserDetails._id);
      console.log("hi");

      const { data: { order } } = await axios.post("http://localhost:4000/api/v1/paymentRoutes/checkout", {
        totalAmount,
        userOBJ: loggedUserDetails
      });


      const options = {
        key: "rzp_test_2CZLX7Z2w5aO58", // Enter the Key ID generated from the Dashboard
        amount: "order.amount", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "KIMAY GORE",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:4000/api/v1/paymentRoutes/paymentverification/",
        prefill: {
          name: "Kimay Gore",
          email: "kimaygore1995@example.com",
          contact: "9869862543"
        },
        notes: {
          "address": "Razorpay Corporate Office"
        },
        theme: {
          "color": "#3399cc"
        }
      };
      const razor = new window.Razorpay(options);
      razor.open();

      const res = await fetch(`${BASE_URL}/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });
    } catch (error) {
      console.error("Error in checkoutHandler:", error);
    }
  };




  //  changes made for payment start


  // console.log(data);
  // console.log(window); // for checking RazorPay variable in window


  //  changes made for payment end

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };


  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          &#8377;{price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i
            class="ri-star-fill"
            style={{ color: "var(--secondary-color)" }}
          ></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      {/* =============== BOOKING FORM START ============== */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" >
          <FormGroup>
            <div>
              <input
                type="text"
                placeholder="Full Name"
                id="fullName"
                pattern="^[a-zA-Z\s]{3,20}$"
                required
                onChange={handleChange}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <input
              type="tel"
              placeholder="Phone"
              id="phone"
              pattern="[789][0-9]{9}"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]} // Set minimum date to today
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              max={guestSize}
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* =============== BOOKING FORM END ================ */}

      {/* =============== BOOKING BOTTOM ================ */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              &#8377;{price} <i class="ri-close-line"></i> 1 person
            </h5>
            <span>&#8377;{price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span>&#8377;{serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>&#8377;{totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary__btn w-100 mt-4" onClick={() => checkoutClickHandler(totalAmount)}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;

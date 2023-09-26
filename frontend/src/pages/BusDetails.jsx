import React, { useState, useRef, useEffect, useContext } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
//import BusData from "../assets/data/buses";
import BusBookings from "../components/Booking/BusBookings";
import Newsletter from '../shared/Newsletter'
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";
import calculateAvgRating from '../utils/avgRating'
import { AuthContext } from '../context/AuthContext'
import { toast } from "react-hot-toast";
import avatar from '../assets/images/avatar.jpg'

//import { AuthContext } from "../context/AuthContext";

const BusDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('')
  const [busRating, setBusRating] = useState(null)
  const { user } = useContext(AuthContext)

  const { data: bus, loading, error } = useFetch(`${BASE_URL}/buses/${id}`);

  const { name, number, capacity, from, to, departure, arrival, fare, busreviews, photo } =
    bus;

  console.log(bus)
  console.log(capacity)

  const { totalRating, avgRating } = calculateAvgRating(busreviews)

  const options = { day: 'numeric', month: 'long', year: 'numeric' }

  const submitHandler = async e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value

    try {
      if (!user || user === undefined || user === null) {
        alert('Please sign in')
      }
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: busRating
      }

      const res = await fetch(`${BASE_URL}/busreviews/${id}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj)
      })

      const result = await res.json()
      if (!res.ok) {
        toast.success(result.message);// return alert(result.message)
      }
      toast.success(result.message);//alert(result.message)
    } catch (error) {
      toast.error(error.message);// alert(error.message)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [bus]);

  return (
    <section>
      <Container>
        {loading && <h4 className="text-center pt-5">LOADING.........</h4>}
        {error && <h4 className="text-center pt-5">{error}</h4>}
        {!loading && !error &&
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />

                <div className="tour__info">
                  <h2>{name}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i class='ri-star-fill' style={{ 'color': 'var(--secondary-color)' }}></i> {avgRating === 0 ? null : avgRating}
                      {avgRating === 0 ? ('Not rated') : (<span>({busreviews?.length})</span>)}
                    </span>
                    <span>
                      <i class="fa fa-bus"></i> {number}
                    </span>

                    <span>
                      <i class="fa fa-road"></i> {from}
                    </span>
                    <span>
                      <i class="fa fa-road"></i> {to}
                    </span>
                  </div>

                  <div className="tour__extra-details">
                    <span>
                      <i class="fa fa-clock-o"></i> {departure}
                    </span>
                    <span>
                      <i class="fa fa-clock-o"></i> {arrival}
                    </span>
                    <span>
                      <i class="fa fa-inr"></i> {fare}/ per person
                    </span>

                    <span>
                      <i class="ri-group-line"></i> {capacity} people
                    </span>
                  </div>
                </div>

                {/* ============ TOUR REVIEWS SECTION START ============ */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({busreviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={() => setBusRating(1)}>1 <i class='ri-star-s-fill'></i></span>
                      <span onClick={() => setBusRating(2)}>2 <i class='ri-star-s-fill'></i></span>
                      <span onClick={() => setBusRating(3)}>3 <i class='ri-star-s-fill'></i></span>
                      <span onClick={() => setBusRating(4)}>4 <i class='ri-star-s-fill'></i></span>
                      <span onClick={() => setBusRating(5)}>5 <i class='ri-star-s-fill'></i></span>
                    </div>

                    <div className="review__input">
                      <input type="text" ref={reviewMsgRef} placeholder='share your thoughts' required />
                      <button className='btn primary__btn text-white' type='submit'>
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className='user__reviews'>
                    {
                      busreviews?.map(review => (
                        <div className="review__item">
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>{new Date(review.createdAt).toLocaleDateString('en-US', options)}</p>
                              </div>

                              <span className='d-flex align-items-center'>
                                {review.rating}<i class='ri-star-s-fill'></i>
                              </span>
                            </div>

                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                </div>
                {/* ============ TOUR REVIEWS SECTION END ============== */}

              </div>
            </Col>

            <Col lg="4">
              <BusBookings bus={bus} avgRating={avgRating} />
            </Col>
          </Row>
        }

      </Container>
      <Newsletter />
    </section>
  )
};

export default BusDetails;

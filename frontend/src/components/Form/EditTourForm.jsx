//
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";

import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../styles/login.css";

const EditTourForm = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [title, setTitle] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [distance, setDistance] = useState();
  const [photo, setPhoto] = useState();
  const [desc, setDesc] = useState();
  const [price, setPrice] = useState();
  const [maxGroupSize, setMaxGroupSize] = useState();
  const [reviews, setReviews] = useState();
  const [featured, setFeatured] = useState();

  console.log(`${BASE_URL}/tours/${id}`);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/tours/${id}`)
      .then((res) => {
        const { data } = res;
        const tour = data.data;
        setTitle(tour.title);
        setCity(tour.city);
        setAddress(tour.address);
        setDistance(tour.distance);
        setPhoto(tour.photo);
        setDesc(tour.desc);
        setPrice(tour.price);
        setMaxGroupSize(tour.maxGroupSize);
        setReviews(tour.reviews);
        setFeatured(tour.featured);
      })

      .catch((err) => console.log(err));
  }, []);

  const Update = async (e) => {
    e.preventDefault();
    axios
      .put(`${BASE_URL}/tours/${id}`, {
        title,
        city,
        address,
        distance,
        photo,
        desc,
        price,
        maxGroupSize,
        reviews,
        featured,
      })
      .then((tour) => {
        console.log(tour);
        navigate("/getAllTour");
      });

    navigate("/tours");
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
  };
  const inputStyle = {
    width: "24vw",
    margin: "14px 10px",
    alignItems: "center",
  };
  const checkBoxStyle = {
    width: "24vw",
    margin: "14px 10px",
    alignItems: "center",
    position: "relative",
    top: "-32px",
    left: -99,
  };

  return (

    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="login__form col-4 ">
          <div className="user">
          </div>
          <h2>Update Details</h2>

          <Form onSubmit={Update} method="POST">
            <FormGroup>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                required=""
                pattern=".{1,100}"
                title="Title must be between 1 and 100 characters"
                //style={inputStyle}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                required=""
                pattern=".{1,100}"
                title="City must be between 1 and 100 characters"
                //style={inputStyle}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                required=""
                pattern=".{1,200}"
                title="Address must be between 1 and 200 characters"
                //style={inputStyle}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="distance">Distance:</label>
              <input
                type="number"
                id="distance"
                name="distance"
                required=""
                min={0}
                step="0.01"
                // style={inputStyle}
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="photo">Photo URL:</label>
              <input
                type="url"
                id="photo"
                name="photo"
                required=""
                //style={inputStyle}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="desc">Description:</label>
              <input
                type="text"
                name="desc"
                id="desc"
                value={desc}
                //style={inputStyle}
                onChange={(e) => setDesc(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                required=""
                min={0}
                // style={inputStyle}
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="maxGroupSize">Max Group Size:</label>
              <input
                type="number"
                id="maxGroupSize"
                name="maxGroupSize"
                required=""
                //style={inputStyle}
                min={1}
                value={maxGroupSize}
                onChange={(e) => setMaxGroupSize(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="featured">Featured:</label>

              <input
                type="checkbox"
                id="featured"
                name="featured"
                style={checkBoxStyle}
                value={featured}
                onChange={(e) => setFeatured(e.target.value)}
              />
            </FormGroup>
            <Button className="btn secondary__btn auth__btn" type="submit">
              Update Details
            </Button>
          </Form>
        </div>
      </div>
    </>

  );
};

export default EditTourForm;
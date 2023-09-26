// import React, { useEffect, useState } from "react";
// // import TourCard from "../../shared/TourCard";
// // // import tourData from '../../assets/data/tours'
// // import { Col } from "reactstrap";
// // import useFetch from "./../../hooks/useFetch";
// import { BASE_URL } from "./../../utils/config";

// const TourForm = () => {
//   const [showForm, setShowForm] = useState(false);

//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   let tourDetails;
//   const handleTourPost = (event) => {
//     event.preventDefault();

//     const form = event.target;

//     console.log(form.title);
//     const inputs = document.querySelectorAll("input");
//     console.log(inputs);
//     tourDetails = {
//       title: inputs[0].value,
//       city: inputs[1].value,
//       address: inputs[2].value,
//       distance: parseFloat(inputs[3].value),
//       photo: inputs[4].value,
//       desc: inputs[5].value,
//       price: parseFloat(inputs[6].value),
//       maxGroupSize: parseInt(inputs[7].value),
//     };
//     pushIntoDatabase();
//   };

//   const pushIntoDatabase = async () => {
//     console.log(tourDetails);

//     //http://localhost:4000/api/v1/tours/
//     const res = await fetch(`${BASE_URL}/tours/`, {
//       method: "post",
//       headers: {
//         "content-type": "application/json",
//       },
//       credentials: "include",
//       body: JSON.stringify(tourDetails),
//     });

//     const result = await res.json();
//     console.log(result);
//   };
//   const formStyle = {
//     display: "flex",
//     flexDirection: "column",
//   };

//   return (
//     <>
//       <div>
//         <button onClick={toggleForm} className="btn btn-primary">
//           Add Tour
//         </button>
//         {showForm && (
//           <form action="/submit-tour" method="POST" style={formStyle}>
//             {/* Title */}
//             <label htmlFor="title">Title:</label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               required=""
//               pattern=".{1,100}"
//               title="Title must be between 1 and 100 characters"
//             />
//             {/* City */}
//             <label htmlFor="city">City:</label>
//             <input
//               type="text"
//               id="city"
//               name="city"
//               required=""
//               pattern=".{1,100}"
//               title="City must be between 1 and 100 characters"
//             />
//             {/* Address */}
//             <label htmlFor="address">Address:</label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               required=""
//               pattern=".{1,200}"
//               title="Address must be between 1 and 200 characters"
//             />
//             {/* Distance */}
//             <label htmlFor="distance">Distance:</label>
//             <input
//               type="number"
//               id="distance"
//               name="distance"
//               required=""
//               min={0}
//               step="0.01"
//             />
//             {/* Photo */}
//             <label htmlFor="photo">Photo URL:</label>
//             <input type="url" id="photo" name="photo" required="" />
//             {/* Description */}
//             <label htmlFor="desc">Description:</label>
//             <input type="text" name="desc" id="desc" />
//             {/* Price */}
//             <label htmlFor="price">Price:</label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               required=""
//               min={0}
//               step="0.01"
//             />
//             {/* Maximum Group Size */}
//             <label htmlFor="maxGroupSize">Max Group Size:</label>
//             <input
//               type="number"
//               id="maxGroupSize"
//               name="maxGroupSize"
//               required=""
//               min={1}
//             />
//             <label htmlFor="featured">Featured:</label>
//             <input type="checkbox" id="featured" name="featured" />
//             {/* Submit Button */}
//             <div onClick={handleTourPost} className="btn btn-warning rounded">
//               Submit
//             </div>
//           </form>
//         )}
//       </div>
//     </>
//   );
// };

// export default TourForm;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import TourCard from "../../shared/TourCard";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";

// import tourData from '../../assets/data/tours'
import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const TourForm = () => {
  // console.log(featuredTours)
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [credentials, setCredentials] = useState({
    title: undefined,
    city: undefined,
    address: undefined,
    distance: undefined,
    photo: undefined,
    desc: undefined,
    price: undefined,
    maxGroupSize: undefined,
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/tours/all`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) alert(result.message)
      else
        alert("Tour Created");

      //window.location.reload();
      navigate(`/GetAllTour`);
    } catch (err) {
      alert(err.message);
    }
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

        <div className="login__form col-4">
          <div className="user"></div>
          <h2>Add Details</h2>

          <Form onSubmit={handleClick}>
            <FormGroup>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                placeholder="Title"
                id="title"
                onChange={handleChange}
                pattern=".{1,100}"
                title="Title must be between 1 and 100 characters"
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="city">City:</label>

              <input
                type="text"
                placeholder="City"
                id="city"
                name="city"
                onChange={handleChange}
                pattern=".{1,100}"
                title="City must be between 1 and 100 characters"
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                placeholder="Address"
                id="address"
                name="address"
                onChange={handleChange}
                pattern=".{1,100}"
                title="Address must be between 1 and 200 characters"
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="distance">Distance:</label>

              <input
                type="number"
                placeholder="Distance"
                id="distance"
                name="distance"
                onChange={handleChange}
                min={0}
                step="0.01"
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="photo">Photo URL:</label>
              <input
                type="url"
                id="photo"
                name="photo"
                required
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="desc">Description:</label>
              <input
                type="text"
                name="desc"
                id="desc"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                required
                min={0}
                onChange={handleChange}
                step="0.01"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="maxGroupSize">Max Group Size:</label>
              <input
                type="number"
                id="maxGroupSize"
                name="maxGroupSize"
                required
                onChange={handleChange}
                min={1}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="featured">Featured:</label>
              <input
                type="checkbox"
                id="featured"
                name="featured"
                style={checkBoxStyle}
              />
            </FormGroup>
            <Button className="btn secondary_btn auth_btn" type="submit">
              Add Details
            </Button>
          </Form>
        </div>

      </div>
    </>
  );
};

export default TourForm;
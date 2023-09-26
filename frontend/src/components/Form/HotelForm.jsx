// import React, { useEffect, useState } from "react";
// import BusCard from "../../shared/BusCard";
// // import tourData from '../../assets/data/tours'
// import { Col } from "reactstrap";
// import useFetch from "../../hooks/useFetch";
// import { BASE_URL } from "../../utils/config";

// const HotelForm = () => {
//   // console.log(featuredTours)

//   let hotelDetails;
//   const handleHotelPost = (event) => {
//     event.preventDefault();

//     const form = event.target;

//     console.log(form.name);
//     const inputs = document.querySelectorAll(".bus-input");
//     console.log(inputs);
//     //     0: input#name.bus-input
//     // 1: input#number.bus-input
//     // 2: input#to.bus-input
//     // 3: input#from.bus-input
//     // 4: input#departure.bus-input
//     // 5: input#arrival.bus-input
//     // 6: input#fare.bus-input
//     // 7: input#photo.bus-input
//      hotelDetails = {
//       title: inputs[0].value,
//       city: inputs[1].value,
//       address: inputs[2].value,
//       price: parseFloat(inputs[4].value),
//       type: inputs[6].value,
//       rooms: parseInt(inputs[7].value),
//       rating: inputs[8].value,
//       photo: inputs[9].value,
//     };
//     console.log(hotelDetails);
//     pushIntoDatabase();
//   };

//   const pushIntoDatabase = async () => {
//     //http://localhost:4000/api/v1/buses
//     const res = await fetch(`${BASE_URL}/hotels/`, {
//       method: "post",
//       headers: {
//         "content-type": "application/json",
//       },
//       credentials: "include",
//       body: JSON.stringify(hotelDetails),
//     });

//     const result = await res.json();
//     console.log(result);
//   };
//   const formStyle = {
//     display: "flex",
//     flexDirection: "column",
//   };
//   const inputStyle = {
//     width: "24vw",
//     margin: "14px 10px",
//     alignItems: "center",
//   };

//   const checkBoxStyle = {
//     width: "24vw",
//     margin: "14px 10px",
//     alignItems: "center",
//     position: "relative",
//     top: "-32px",
//     left: -99,
//   };
//   return (
//     <>
//       <form action="/submit-bus" method="POST" style={formStyle}>
//         {/* Title */}
//         <label htmlFor="name">Hotel Name:</label>
//         <input
//           type="text"
//           id="title"
//           name="name"
//           required=""
//           className="bus-input"
//           //   pattern=".{1,100}"
//           //   title="Title must be between 1 and 100 characters"
//           style={inputStyle}
//         />
//         {/* City */}
//         <label htmlFor="number">City:</label>
//         <input
//           type="text"
//           id="city"
//           name="city"
//           required=""
//           //   pattern=".{1,100}"
//           //   title="City must be between 1 and 100 characters"
//           style={inputStyle}
//           className="bus-input"
//         />
//         {/* Address */}
//         <label htmlFor="capacity">Address : </label>
//         <input
//           type="text"
//           id="address"
//           name="address"
//           required=""
//           //   pattern=".{1,200}"
//           //   title="Address must be between 1 and 200 characters"
//           style={inputStyle}
//           className="bus-input"
//         />
//         {/* Distance */}
//         <label htmlFor="to">Price : </label>
//         <input
//           type="number"
//           name="price"
//           required=""
//           min={0}
//           step="0.01"
//           style={inputStyle}
//           className="bus-input"
//         />
//         <label htmlFor="to">Type : </label>
//         <input
//           type="text"
//           name="type"
//           required=""
//           min={0}
//           step="0.01"
//           style={inputStyle}
//           className="bus-input"
//         />

//         <label htmlFor="from">Rooms : </label>
//         <input
//           type="text"
//           id="rooms"
//           name="rooms"
//           required=""
//           min={0}
//           step="0.01"
//           style={inputStyle}
//           className="bus-input"
//         />

//         {/* Description */}
//         <label htmlFor="departure">Rating : </label>
//         <input
//           type="number"
//           name="rating"
//           id="rating"
//           style={inputStyle}
//           className="bus-input"
//         />
//         {/* Price */}
//          {/* <label htmlFor="arrival">Arrival : </label>
//          <input
//           type="text"
//           id="arrival"
//           name="arrival"
//           required=""
//           min={0}
//           style={inputStyle}
//           className="bus-input"
//           step="0.01"
//         />
//         {/* Maximum Group Size
//         <label htmlFor="type">Type:</label>  */}
//         {/* <select id="type" name="type" style={inputStyle} className="bus-input">
//           <option value="AC">AC</option>

//           <option value="NON AC">NON AC</option>
//         </select>
//         */}

//         {/* Photo */}
//         <label htmlFor="photo">Photo URL:</label>
//         <input
//           type="url"
//           id="photo"
//           name="photo"
//           required=""
//           style={inputStyle}
//           className="bus-input"
//         />

//         {/* Submit Button */}
//         <div
//           onClick={handleHotelPost}
//           style={{ width: "30vw" }}
//           className="btn btn-warning rounded"
//         >
//           Submit
//         </div>
//       </form>
//     </>
//   );
// };

// export default HotelForm;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import HotelCard from "../../shared/HotelCard";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";

// import tourData from '../../assets/data/tours'
import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const HotelForm = () => {
  // console.log(featuredTours)
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [credentials, setCredentials] = useState({
    title: undefined,
    city: undefined,
    address: undefined,
    rating: undefined,
    photo: undefined,
    rooms: undefined,
    type: undefined,
    price: undefined,

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
      const res = await fetch(`${BASE_URL}/hotels/`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) alert(result.message);
      alert("Hotel Created");

      window.location.reload();
      // navigate("/tours");
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
      <div>

        <div className="login__form">
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
              <label htmlFor="desc">Description:</label>
              <input
                type="text"
                placeholder="Description"
                id="desc"
                name="desc"
                onChange={handleChange}
                pattern=".{1,100}"
                title="Description must be between 1 and 200 characters"
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="distance">Rating:</label>

              <input
                type="number"
                placeholder="Rating"
                id="rating"
                name="rating"
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
              <label htmlFor="desc">Rooms:</label>
              <input
                type="number"
                name="rooms"
                id="rooms"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="types">Type:</label><br />
              <select
                type="text"
                id="types"
                name="types"
                //style={inputStyle}
                //className="bus-input"
                //value={type}
                onChange={handleChange}
              >
                <option value="AC">AC</option>
                <option value="NON AC">NON AC</option>
              </select>
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

            <Button className="btn secondary_btn auth_btn" type="submit">
              Add Details
            </Button>
          </Form>
        </div>

      </div>
    </>
  );
};

export default HotelForm;
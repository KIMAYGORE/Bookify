// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
// import { Link, useNavigate } from "react-router-dom";


// import BusCard from "../../shared/BusCard";
// // import tourData from '../../assets/data/tours'
// import useFetch from "../../hooks/useFetch";
// import { BASE_URL } from "../../utils/config";

// const BusForm = () => {
//   // console.log(featuredTours)
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [credentials, setCredentials] = useState({
//     name: undefined,
//     number: undefined,
//     capacity: undefined,
//     from: undefined,
//     to: undefined,
//     departure: undefined,
//     arrival: undefined,
//     type: undefined,
//     fare: undefined,
//     photo: undefined,
//     status: undefined,
//     journeyDate: undefined,
//   });

//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(`${BASE_URL}/buses/`, {
//         method: "post",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(credentials),
//       });
//       const result = await res.json();

//       if (!res.ok) alert(result.message);
//       alert("Bus Created");

//       window.location.reload();
//       // navigate("/tours");
//     } catch (err) {
//       alert(err.message);
//     }
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
//       <div>
//         <button onClick={toggleForm} className="btn primary__btn">
//           Add Bus
//         </button>
//         {showForm && (
//           <div className="login__form ">
//             <div className="user"></div>
//             <h2>Add Details</h2>

//             <Form >
//               <FormGroup>
//                 <label htmlFor="name">Bus Name:</label>
//                 <input
//                   type="text"
//                   placeholder="Bus Name"
//                   id="name"
//                   name="name"
//                   onChange={handleChange}
//                   pattern=".{1,100}"
//                   title="Bus Name must be between 1 and 100 characters"
//                   required
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <label htmlFor="number">Bus Number:</label>
//                 <input
//                   type="text"
//                   id="number"
//                   name="number"
//                   pattern=".{100,999}"
//                   title="Bus Number must be between 100 and 999 characters"
//                   required
//                   onChange={handleChange}
//                 //style={inputStyle}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <label htmlFor="capacity">Seat Capacity : </label>
//                 <input
//                   type="number"
//                   id="capacity"
//                   name="capacity"
//                   required
//                   // pattern=".{1,200}"
//                   // title="Address must be between 1 and 200 characters"
//                   onChange={handleChange}
//                   placeholder="Max Seats"

//                 //style={inputStyle}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <label htmlFor="to">Destination : </label>
//                 <input
//                   type="text"
//                   id="to"
//                   name="to"
//                   required
//                   onChange={handleChange}
//                   placeholder="Destination"
//                   min={0}
//                   step="0.01"
//                 //style={inputStyle}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <label htmlFor="from">Source : </label>
//                 <input
//                   type="text"
//                   id="from"
//                   name="from"
//                   required
//                   onChange={handleChange}
//                   placeholder="Source"
//                   min={0}
//                   step="0.01"
//                 //style={inputStyle}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <label htmlFor="departure">Departure : </label>
//                 <input
//                   type="text"
//                   name="departure"
//                   id="departure"
//                   required
//                   onChange={handleChange}
//                   placeholder="Departure Time"
//                 // style={inputStyle}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <label htmlFor="arrival">Arrival : </label>
//                 <input
//                   type="text"
//                   id="arrival"
//                   name="arrival"
//                   required
//                   onChange={handleChange}
//                   placeholder="Arrival Time"
//                   min={0}
//                   //style={inputStyle}
//                   step="0.01"
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <label htmlFor="type">Type:</label><br />
//                 <select id="type" name="type" onChange={handleChange}>
//                   <option value="AC">AC</option>

//                   <option value="NON AC">NON AC</option>
//                 </select>
//               </FormGroup>

//               <FormGroup>
//                 <label htmlFor="status">Status:</label><br />
//                 <select id="status" name="status" onChange={handleChange}>
//                   <option value="Yet To Start">Yet To Start</option>

//                   <option value="Active">Active</option>
//                   <option value="Completed">Completed</option>
//                 </select>
//               </FormGroup>

//               <FormGroup>
//                 <label htmlFor="fare">Fare:</label>
//                 <input
//                   type="number"
//                   id="fare"
//                   name="fare"
//                   required
//                   onChange={handleChange}
//                   placeholder="Price Per Person"
//                   min={0}
//                   //style={inputStyle}
//                   step="0.01"
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <label htmlFor="journeyDate">Journey Date:</label>
//                 <input
//                   type="date"
//                   id="journeyDate"
//                   name="journeyDate"
//                   required
//                   onChange={handleChange}
//                   placeholder="Journey Date"
//                   min={0}
//                   //style={inputStyle}
//                   step="0.01"
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <label htmlFor="photo">Photo URL:</label>
//                 <input
//                   type="url"
//                   id="photo"
//                   name="photo"
//                   onChange={handleChange}
//                   required
//                 //style={inputStyle}
//                 />
//               </FormGroup>
//               <Button className="btn secondary__btn auth__btn" onClick={handleClick}>
//                 Add Details
//               </Button>
//             </Form>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default BusForm;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";


import BusCard from "../../shared/BusCard";
// import tourData from '../../assets/data/tours'
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const BusForm = () => {
  // console.log(featuredTours)
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [credentials, setCredentials] = useState({
    name: undefined,
    number: undefined,
    capacity: undefined,
    from: undefined,
    to: undefined,
    departure: undefined,
    arrival: undefined,
    type: undefined,
    fare: undefined,
    photo: undefined,
    status: undefined,
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
      const res = await fetch(`${BASE_URL}/buses/`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) alert(result.message);
      alert("Bus Created");

      //.location.reload();
      navigate("/getAllBus");
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
        <div className="login__form  col-4">
          <div className="user"></div>
          <h2>Add Details</h2>

          <Form >
            <FormGroup>
              <label htmlFor="name">Bus Name:</label>
              <input
                type="text"
                placeholder="Bus Name"
                id="name"
                name="name"
                onChange={handleChange}
                pattern=".{1,100}"
                title="Bus Name must be between 1 and 100 characters"
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="number">Bus Number:</label>
              <input
                type="text"
                id="number"
                name="number"
                pattern=".{100,999}"
                title="Bus Number must be between 100 and 999 characters"
                required
                onChange={handleChange}
              //style={inputStyle}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="capacity">Seat Capacity : </label>
              <input
                type="number"
                id="capacity"
                name="capacity"
                required
                // pattern=".{1,200}"
                // title="Address must be between 1 and 200 characters"
                onChange={handleChange}
                placeholder="Max Seats"

              //style={inputStyle}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="to">Destination : </label>
              <input
                type="text"
                id="to"
                name="to"
                required
                onChange={handleChange}
                placeholder="Destination"
                min={0}
                step="0.01"
              //style={inputStyle}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="from">Source : </label>
              <input
                type="text"
                id="from"
                name="from"
                required
                onChange={handleChange}
                placeholder="Source"
                min={0}
                step="0.01"
              //style={inputStyle}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="departure">Departure : </label>
              <input
                type="text"
                name="departure"
                id="departure"
                required
                onChange={handleChange}
                placeholder="Departure Time"
              // style={inputStyle}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="arrival">Arrival : </label>
              <input
                type="text"
                id="arrival"
                name="arrival"
                required
                onChange={handleChange}
                placeholder="Arrival Time"
                min={0}
                //style={inputStyle}
                step="0.01"
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="type">Type:</label><br />
              <select id="type" name="type" onChange={handleChange}>
                <option value="AC">AC</option>

                <option value="NON AC">NON AC</option>
              </select>
            </FormGroup>

            <FormGroup>
              <label htmlFor="status">Status:</label><br />
              <select id="status" name="status" onChange={handleChange}>
                <option value="Yet To Start">Yet To Start</option>

                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
              </select>
            </FormGroup>

            <FormGroup>
              <label htmlFor="fare">Fare:</label>
              <input
                type="number"
                id="fare"
                name="fare"
                required
                onChange={handleChange}
                placeholder="Price Per Person"
                min={0}
                //style={inputStyle}
                step="0.01"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="photo">Photo URL:</label>
              <input
                type="url"
                id="photo"
                name="photo"
                onChange={handleChange}
                required
              //style={inputStyle}
              />
            </FormGroup>
            <Button className="btn secondary_btn auth_btn" onClick={handleClick}>
              Add Details
            </Button>
          </Form>
        </div>

      </div>
    </>
  );
};

export default BusForm;
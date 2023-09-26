// import React, { useEffect, useState } from "react";
// import useFetch from "../../hooks/useFetch";
// import { BASE_URL } from "../../utils/config";
// import { useNavigate, useParams } from "react-router-dom";
// import { Button } from "reactstrap";
// import axios from "axios";

// const EditBusForm = () => {
//   const navigate = useNavigate();

//   const { id } = useParams();
//   const [name, setName] = useState();
//   const [number, setNumber] = useState();
//   const [capacity, setCapacity] = useState();
//   const [from, setFrom] = useState();
//   const [to, setTo] = useState();
//   const [departure, setDeparture] = useState();
//   const [arrival, setArrival] = useState();
//   const [type, setType] = useState();
//   const [fare, setFare] = useState();
//   const [photo, setPhoto] = useState();

//   console.log(`${BASE_URL}/buses/${id}`);
//   useEffect(() => {
//     axios
//       .get(`${BASE_URL}/buses/${id}`)
//       .then(
//         (res) => {
//         const { data } = res;
//         const bus = data.data;
//         setName(bus.name);
//         setNumber(bus.number);
//         setCapacity(bus.capacity);
//         setFrom(bus.from);
//         setTo(bus.to);
//         setDeparture(bus.departure);
//         setArrival(bus.arrival);
//         setType(bus.type);
//         setFare(bus.fare);
//         setPhoto(bus.photo);
//       })

//       .catch((err) => console.log(err));
//   }, []);

//   const Update = async (e) => {
//     e.preventDefault();
//     axios
//       .put(`${BASE_URL}/buses/${id}`, {
//         name,
//         number,
//         capacity,
//         from,
//         to,
//         departure,
//         arrival,
//         type,
//         fare,
//         photo,
//       })
//       .then((bus) => {
//         console.log(bus);
//         navigate("/getAllBus");
//       });

//     navigate("/buses");
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

//   return (
//     <div>
//       <form onSubmit={Update} method="POST" style={formStyle}>
//         {/* Title */}
//         <label htmlFor="name">Bus Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           required=""
//           className="bus-input"
//           value={name}
//           //   pattern=".{1,100}"
//           //   title="Title must be between 1 and 100 characters"
//           style={inputStyle}
//           onChange={(e) => {
//             console.log(e.target.value);
//             setName(e.target.value);
//           }}
//         />
//         {/* City */}
//         <label htmlFor="number">Bus Number:</label>
//         <input
//           type="text"
//           id="number"
//           name="number"
//           required=""
//           //   pattern=".{1,100}"
//           //   title="City must be between 1 and 100 characters"
//           style={inputStyle}
//           className="bus-input"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//         />
//         {/* Address */}
//         <label htmlFor="capacity">Seat Capacity : </label>
//         <input
//           type="number"
//           id="capacity"
//           name="capacity"
//           required=""
//           //   pattern=".{1,200}"
//           //   title="Address must be between 1 and 200 characters"
//           style={inputStyle}
//           className="bus-input"
//           value={capacity}
//           onChange={(e) => setCapacity(e.target.value)}
//         />
//         {/* Distance */}
//         <label htmlFor="to">Destination : </label>
//         <input
//           type="text"
//           id="to"
//           name="to"
//           required=""
//           min={0}
//           step="0.01"
//           style={inputStyle}
//           className="bus-input"
//           value={to}
//           onChange={(e) => setTo(e.target.value)}
//         />

//         <label htmlFor="from">Source : </label>
//         <input
//           type="text"
//           id="from"
//           name="from"
//           required=""
//           min={0}
//           step="0.01"
//           style={inputStyle}
//           className="bus-input"
//           value={from}
//           onChange={(e) => setFrom(e.target.value)}
//         />

//         {/* Description */}
//         <label htmlFor="departure">Departure : </label>
//         <input
//           type="text"
//           name="departure"
//           id="departure"
//           style={inputStyle}
//           className="bus-input"
//           value={departure}
//           onChange={(e) => setDeparture(e.target.value)}
//         />
//         {/* Price */}
//         <label htmlFor="arrival">Arrival : </label>
//         <input
//           type="text"
//           id="arrival"
//           name="arrival"
//           required=""
//           min={0}
//           style={inputStyle}
//           className="bus-input"
//           step="0.01"
//           value={arrival}
//           onChange={(e) => setArrival(e.target.value)}
//         />
//         {/* Maximum Group Size */}
//         <label htmlFor="type">Type:</label>
//         <select
//           id="type"
//           name="type"
//           style={inputStyle}
//           className="bus-input"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//         >
//           <option value="AC">AC</option>

//           <option value="NON AC">NON AC</option>
//         </select>
//         <label htmlFor="fare">Fare:</label>
//         <input
//           type="number"
//           id="fare"
//           name="fare"
//           required=""
//           min={0}
//           style={inputStyle}
//           className="bus-input"
//           step="0.01"
//           value={fare}
//           onChange={(e) => setFare(e.target.value)}
//         />

//         {/* Photo */}
//         <label htmlFor="photo">Photo URL:</label>
//         <input
//           type="url"
//           id="photo"
//           name="photo"
//           required=""
//           style={inputStyle}
//           className="bus-input"
//           value={photo}
//           onChange={(e) => setPhoto(e.target.value)}
//         />

//         {/* Submit Button */}
//         <Button className="btn secondary__btn auth__btn" type="submit">
//           Update
//         </Button>
//       </form>
//
//     </div>
//   );
// };

// export default EditBusForm;

import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FormGroup, Form } from "reactstrap";
import axios from "axios";

const EditBusForm = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [capacity, setCapacity] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [departure, setDeparture] = useState();
  const [arrival, setArrival] = useState();
  const [type, setType] = useState();
  const [fare, setFare] = useState();
  const [photo, setPhoto] = useState();
  const [status, setStatus] = useState();
  const [journeyDate, setJourneyDate] = useState();

  console.log(`${BASE_URL}/buses/${id}`);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/buses/${id}`)
      .then((res) => {
        const { data } = res;
        const bus = data.data;
        setName(bus.name);
        setNumber(bus.number);
        setCapacity(bus.capacity);
        setFrom(bus.from);
        setTo(bus.to);
        setDeparture(bus.departure);
        setArrival(bus.arrival);
        setType(bus.type);
        setFare(bus.fare);
        setPhoto(bus.photo);
        setStatus(bus.status);
        setJourneyDate(bus.journeyDate)

      })

      .catch((err) => console.log(err));
  }, []);

  const Update = async (e) => {
    e.preventDefault();
    axios
      .put(`${BASE_URL}/buses/${id}`, {
        name,
        number,
        capacity,
        from,
        to,
        departure,
        arrival,
        type,
        fare,
        photo,
        status,
        journeyDate,
      })
      .then((bus) => {
        console.log(bus);
        alert("Bus Updated")
        navigate("/getAllBus");
      });

    navigate("/buses");
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

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="login__form col-4 ">
          <div className="user"></div>
          <h2>Update Details</h2>

          <Form onSubmit={Update} method="POST">
            <FormGroup>
              <label htmlFor="name">Bus Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                //className="bus-input"
                value={name}
                pattern=".{1,100}"
                title="Title must be between 1 and 100 characters"
                //style={inputStyle}
                onChange={(e) => {
                  console.log(e.target.value);
                  setName(e.target.value);
                }}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="number">Bus Number:</label>
              <input
                type="text"
                id="number"
                name="number"
                required
                //   pattern=".{1,100}"
                //   title="City must be between 1 and 100 characters"
                //style={inputStyle}
                //className="bus-input"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="capacity">Seat Capacity : </label>
              <input
                type="number"
                id="capacity"
                name="capacity"
                required
                //   pattern=".{1,200}"
                //   title="Address must be between 1 and 200 characters"
                //style={inputStyle}
                //className="bus-input"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="to">Destination : </label>
              <input
                type="text"
                id="to"
                name="to"
                required=""
                min={0}
                step="0.01"
                //style={inputStyle}
                //className="bus-input"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="from">Source : </label>
              <input
                type="text"
                id="from"
                name="from"
                required=""
                min={0}
                step="0.01"
                //style={inputStyle}
                //className="bus-input"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="departure">Departure : </label>
              <input
                type="text"
                name="departure"
                id="departure"
                //style={inputStyle}
                //className="bus-input"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="arrival">Arrival : </label>
              <input
                type="text"
                id="arrival"
                name="arrival"
                required=""
                min={0}
                //style={inputStyle}
                //className="bus-input"
                step="0.01"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="type">Type:</label><br />
              <select
                id="type"
                name="type"
                //style={inputStyle}
                //className="bus-input"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="AC">AC</option>

                <option value="NON AC">NON AC</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label htmlFor="status">Status:</label><br />
              <select
                id="status"
                name="status"
                //style={inputStyle}
                //className="bus-input"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Yet to Start">Yet To Start</option>

                <option value="Active">Acitve</option>
                <option value="Completed">Completed</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label htmlFor="fare">Fare:</label>
              <input
                type="number"
                id="fare"
                name="fare"
                required=""
                min={0}
                //style={inputStyle}
                //className="bus-input"
                step="0.01"
                value={fare}
                onChange={(e) => setFare(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="journeyDate">Journey Date:</label>
              <input
                type="date"
                id="journeyDate"
                name="journeyDate"
                required=""
                //min={0}
                //style={inputStyle}
                //className="bus-input"
                step="0.01"
                value={journeyDate}
                onChange={(e) => setJourneyDate(e.target.value)}
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
                //className="bus-input"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
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

export default EditBusForm;
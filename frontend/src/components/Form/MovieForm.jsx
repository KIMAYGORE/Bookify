// // import React, { useEffect, useState } from "react";
// // // import BusCard from "../../shared/BusCard";
// // // import tourData from '../../assets/data/tours'
// // import { Col } from "reactstrap";
// // import useFetch from "../../hooks/useFetch";
// // import { BASE_URL } from "../../utils/config";

// // const MovieForm = () => {
// //     let movieDetails;
// //     const handleMoviePost = (event) => {
// //         event.preventDefault();

// //         const form = event.target;

// //         const inputs = document.querySelectorAll(".movie-input");
// //         console.log(inputs[0]);
// //         movieDetails = {
// //             title: inputs[0].value,
// //             language: inputs[1].value,
// //             Country: inputs[2].value,
// //             genre: inputs[3].value,
// //             rating: parseInt(inputs[4].value),
// //             runtime: parseInt(inputs[5].value),
// //             releaseDate: parseInt(inputs[6].value),
// //             availableSeats: inputs[7].value,
// //             location: inputs[8].value,
// //             price: parseFloat(inputs[9].value),
// //             photo: inputs[10].value,
// //         };
// //         pushIntoDatabase();
// //     };

// //     const pushIntoDatabase = async () => {
// //         const res = await fetch(`${BASE_URL}/movies/`, {
// //             method: "post",
// //             headers: {
// //                 "content-type": "application/json",
// //             },
// //             credentials: "include",
// //             body: JSON.stringify(movieDetails),
// //         });

// //         const result = await res.json();
// //         console.log(result);
// //     };
// //     const formStyle = {
// //         display: "flex",
// //         flexDirection: "column",
// //     };
// //     const inputStyle = {
// //         width: "24vw",
// //         margin: "14px 10px",
// //         alignItems: "center",
// //     };

// //     const checkBoxStyle = {
// //         width: "24vw",
// //         margin: "14px 10px",
// //         alignItems: "center",
// //         position: "relative",
// //         top: "-32px",
// //         left: -99,
// //     };
// //     return (
// //         <>
// //             <form action="/submit-movie" method="POST" style={formStyle}>
// //                 {/* Title */}
// //                 <label htmlFor="name">Movie Name:</label>
// //                 <input
// //                     type="text"
// //                     id="name"
// //                     name="title"
// //                     required=""
// //                     className="movie-input"
// //                     //   pattern=".{1,100}"
// //                     //   title="Title must be between 1 and 100 characters"
// //                     style={inputStyle}
// //                 />
// //                 {/* City */}
// //                 <label htmlFor="number">Movie Language:</label>
// //                 <input
// //                     type="text"
// //                     id="language"
// //                     name="language"
// //                     required=""
// //                     //   pattern=".{1,100}"
// //                     //   title="City must be between 1 and 100 characters"
// //                     style={inputStyle}
// //                     className="movie-input"
// //                 />
// //                 {/* Address */}
// //                 <label htmlFor="capacity">Country : </label>
// //                 <input
// //                     type="text"
// //                     id="country"
// //                     name="country"
// //                     required=""
// //                     //   pattern=".{1,200}"
// //                     //   title="Address must be between 1 and 200 characters"
// //                     style={inputStyle}
// //                     className="movie-input"
// //                 />
// //                 {/* Distance */}
// //                 <label htmlFor="to">genre : </label>
// //                 <input
// //                     type="text"
// //                     id="genre"
// //                     name="genre"
// //                     required=""
// //                     min={0}
// //                     step="0.01"
// //                     style={inputStyle}
// //                     className="movie-input"
// //                 />

// //                 <label htmlFor="from">Rating : </label>
// //                 <input
// //                     type="text"
// //                     id="rating"
// //                     name="rating"
// //                     required=""
// //                     min={0}
// //                     step="0.01"
// //                     style={inputStyle}
// //                     className="movie-input"
// //                 />

// //                 {/* Description */}
// //                 <label htmlFor="departure">Duration : </label>
// //                 <input
// //                     type="Number"
// //                     name="runtime"
// //                     id="runtime"
// //                     style={inputStyle}
// //                     className="movie-input"
// //                 />
// //                 {/* Price */}
// //                 <label htmlFor="arrival">Release Date : </label>
// //                 <input
// //                     type="Date"
// //                     id="releasedate"
// //                     name="arrival"
// //                     required=""
// //                     min={0}
// //                     style={inputStyle}
// //                     className="movie-input"
// //                     step="0.01"
// //                 />
// //                 {/* Maximum Group Size */}

// //                 <label htmlFor="fare">Available Seats :</label>
// //                 <input
// //                     type="Number"
// //                     id="availableseats"
// //                     name="availableseats"
// //                     required=""
// //                     min={0}
// //                     style={inputStyle}
// //                     className="movie-input"
// //                     step="0.01"
// //                 />
// //                 <label htmlFor="photo">Location :</label>
// //                 <input
// //                     type="text"
// //                     id="location"
// //                     name="location"
// //                     required=""
// //                     style={inputStyle}
// //                     className="movie-input"
// //                 />
// //                 <label htmlFor="photo"> Price :</label>
// //                 <input
// //                     type="Number"
// //                     id="price"
// //                     name="price"
// //                     required=""
// //                     style={inputStyle}
// //                     className="movie-input"
// //                 />
// //                 {/* Photo */}
// //                 <label htmlFor="photo">Photo URL:</label>
// //                 <input
// //                     type="url"
// //                     id="photo"
// //                     name="photo"
// //                     required=""
// //                     style={inputStyle}
// //                     className="movie-input"
// //                 />

// //                 {/* Submit Button */}
// //                 <div
// //                     onClick={handleMoviePost}
// //                     style={{ width: "30vw" }}
// //                     className="btn btn-warning rounded"
// //                 >
// //                     Submit
// //                 </div>
// //             </form>
// //         </>
// //     );
// // };

// // export default MovieForm;

// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
// import { Link, useNavigate } from "react-router-dom";


// // import MovieCard from "../../shared/MovieCard";
// // import tourData from '../../assets/data/tours'
// import useFetch from "../../hooks/useFetch";
// import { BASE_URL } from "../../utils/config";

// const MoviesForm = () => {
//     // console.log(featuredTours)
//     const navigate = useNavigate();
//     const [showForm, setShowForm] = useState(false);
//     const [credentials, setCredentials] = useState({
//         title: undefined,
//         language: undefined,
//         genre: undefined,
//         country: undefined,
//         rating: undefined,
//         runtime: undefined,
//         capacity: undefined,
//         showDate: undefined,
//         showTime: undefined,
//         location: undefined,
//         price: undefined,
//         photo: undefined,
//     });

//     const handleChange = (e) => {
//         setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//     };

//     const toggleForm = () => {
//         setShowForm(!showForm);
//     };

//     const handleClick = async (e) => {
//         e.preventDefault();

//         try {
//             const res = await fetch(`${BASE_URL}/movies/`, {
//                 method: "post",
//                 headers: {
//                     "content-type": "application/json",
//                 },
//                 body: JSON.stringify(credentials),
//             });
//             const result = await res.json();

//             if (!res.ok) alert(result.message);
//             alert("Movie Created");

//             window.location.reload();
//         } catch (err) {
//             alert(err.message);
//         }
//     };

//     const formStyle = {
//         display: "flex",
//         flexDirection: "column",
//     };
//     const inputStyle = {
//         width: "24vw",
//         margin: "14px 10px",
//         alignItems: "center",
//     };

//     const checkBoxStyle = {
//         width: "24vw",
//         margin: "14px 10px",
//         alignItems: "center",
//         position: "relative",
//         top: "-32px",
//         left: -99,
//     };
//     return (
//         <>
//             <div>
//                 <button onClick={toggleForm} className="btn primary__btn">
//                     Add Movie
//                 </button>
//                 {showForm && (
//                     <div className="login__form ">
//                         <div className="user"></div>
//                         <h2>Add Details</h2>

//                         <Form >
//                             <FormGroup>
//                                 <label htmlFor="title">Movie Name:</label>
//                                 <input
//                                     type="text"
//                                     placeholder="Movie Name"
//                                     id="title"
//                                     name="title"
//                                     onChange={handleChange}
//                                     pattern=".{1,100}"
//                                     title="Movie Name must be between 1 and 100 characters"
//                                     required
//                                 />
//                             </FormGroup>

//                             <FormGroup>
//                                 <label htmlFor="language">Movie Language:</label>
//                                 <input
//                                     type="text"
//                                     id="language"
//                                     name="language"
//                                     pattern=".{100,999}"
//                                     title="Movie Number must be between 100 and 999 characters"
//                                     required
//                                     onChange={handleChange}
//                                 //style={inputStyle}
//                                 />
//                             </FormGroup>
//                             <FormGroup>
//                                 <label htmlFor="genre"> Genre : </label>
//                                 <input
//                                     type="text"
//                                     id="genre"
//                                     name="genre"
//                                     required
//                                     // pattern=".{1,200}"
//                                     // title="Address must be between 1 and 200 characters"
//                                     onChange={handleChange}
//                                     placeholder=" genre"

//                                 //style={inputStyle}
//                                 />
//                             </FormGroup>
//                             <FormGroup>
//                                 <label htmlFor="rating">Rating : </label>
//                                 <input
//                                     type="number"
//                                     id="rating"
//                                     name="rating"
//                                     required
//                                     onChange={handleChange}
//                                     placeholder="rating"
//                                     min={0}
//                                     step="0.01"
//                                 //style={inputStyle}
//                                 />
//                             </FormGroup>
//                             <FormGroup>
//                                 <label htmlFor="country">Country : </label>
//                                 <input
//                                     type="text"
//                                     id="country"
//                                     name="country"
//                                     required
//                                     onChange={handleChange}
//                                     placeholder="Country"
//                                     min={0}
//                                     step="0.01"
//                                 //style={inputStyle}
//                                 />
//                             </FormGroup>
//                             <FormGroup>
//                                 <label htmlFor="runtime">Run Time : </label>
//                                 <input
//                                     type="number"
//                                     id="runtime"
//                                     name="runtime"
//                                     required
//                                     onChange={handleChange}
//                                     placeholder="runtime"
//                                     min={0}
//                                     step="0.01"
//                                 //style={inputStyle}
//                                 />
//                             </FormGroup>
//                             <FormGroup>
//                                 <label htmlFor="showDate">Show Date : </label>
//                                 <input
//                                     type="Date"
//                                     id="showDate"
//                                     name="showDate"
//                                     required
//                                     onChange={handleChange}
//                                     placeholder="Show Date"
//                                     min={0}
//                                     step="0.01"
//                                 //style={inputStyle}
//                                 />
//                             </FormGroup>
//                             <FormGroup>
//                                 <label htmlFor="showTime">Show Time : </label>
//                                 <input
//                                     type="text"
//                                     name="showTime"
//                                     id="showTime"
//                                     required
//                                     onChange={handleChange}
//                                     placeholder="Show Time "
//                                 // style={inputStyle}
//                                 />
//                             </FormGroup>
//                             <FormGroup>
//                                 <label htmlFor="capacity">Capacity : </label>
//                                 <input
//                                     type="number"
//                                     name="capacity"
//                                     id="capacity"
//                                     required
//                                     onChange={handleChange}
//                                     placeholder="Capacity "
//                                 // style={inputStyle}
//                                 />
//                             </FormGroup>
//                             <FormGroup>
//                                 <label htmlFor="location">Location : </label>
//                                 <input
//                                     type="text"
//                                     id="location"
//                                     name="location"
//                                     required
//                                     onChange={handleChange}
//                                     placeholder="location "
//                                     min={0}
//                                     //style={inputStyle}
//                                     step="0.01"
//                                 />
//                             </FormGroup>

//                             <FormGroup>
//                                 <label htmlFor="price">Price:</label>
//                                 <input
//                                     type="number"
//                                     id="price"
//                                     name="price"
//                                     required
//                                     onChange={handleChange}
//                                     placeholder="Price Per Person"
//                                     min={0}
//                                     //style={inputStyle}
//                                     step="0.01"
//                                 />
//                             </FormGroup>
//                             <FormGroup>
//                                 <label htmlFor="photo">Photo URL:</label>
//                                 <input
//                                     type="url"
//                                     id="photo"
//                                     name="photo"
//                                     onChange={handleChange}
//                                     required
//                                 //style={inputStyle}
//                                 />
//                             </FormGroup>
//                             <Button className="btn secondary_btn auth_btn" onClick={handleClick}>
//                                 Add Details
//                             </Button>
//                         </Form>
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// };

// export default MoviesForm;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";


// import MovieCard from "../../shared/MovieCard";
// import tourData from '../../assets/data/tours'
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const MoviesForm = () => {
    // console.log(featuredTours)
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [credentials, setCredentials] = useState({
        title: undefined,
        language: undefined,
        genre: undefined,
        country: undefined,
        rating: undefined,
        runtime: undefined,
        releaseDate: undefined,
        availableSeats: undefined,
        location: undefined,
        price: undefined,
        photo: undefined,
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
            const res = await fetch(`${BASE_URL}/movies/`, {
                method: "post",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(credentials),
            });
            const result = await res.json();

            if (!res.ok) alert(result.message);
            alert("Movie Created");

            window.location.reload();
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
                <button onClick={toggleForm} className="btn primary__btn">
                    Add Movie
                </button>
                {showForm && (
                    <div className="login__form ">
                        <div className="user"></div>
                        <h2>Add Details</h2>

                        <Form >
                            <FormGroup>
                                <label htmlFor="title">Movie Name:</label>
                                <input
                                    type="text"
                                    placeholder="Movie Name"
                                    id="title"
                                    name="title"
                                    onChange={handleChange}
                                    pattern=".{1,100}"
                                    title="Movie Name must be between 1 and 100 characters"
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <label htmlFor="language">Movie Language:</label>
                                <input
                                    type="text"
                                    id="language"
                                    name="language"
                                    pattern=".{100,999}"
                                    title="Movie Number must be between 100 and 999 characters"
                                    required
                                    onChange={handleChange}
                                //style={inputStyle}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="genre"> Genre : </label>
                                <input
                                    type="text"
                                    id="genre"
                                    name="genre"
                                    required
                                    // pattern=".{1,200}"
                                    // title="Address must be between 1 and 200 characters"
                                    onChange={handleChange}
                                    placeholder=" genre"

                                //style={inputStyle}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="rating">Rating : </label>
                                <input
                                    type="number"
                                    id="rating"
                                    name="rating"
                                    required
                                    onChange={handleChange}
                                    placeholder="rating"
                                    min={0}
                                    step="0.01"
                                //style={inputStyle}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="country">Country : </label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    required
                                    onChange={handleChange}
                                    placeholder="Country"
                                    min={0}
                                    step="0.01"
                                //style={inputStyle}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="runtime">Run Time : </label>
                                <input
                                    type="number"
                                    id="runtime"
                                    name="runtime"
                                    required
                                    onChange={handleChange}
                                    placeholder="runtime"
                                    min={0}
                                    step="0.01"
                                //style={inputStyle}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="release Date">Release Date : </label>
                                <input
                                    type="Date"
                                    id="releaseDate"
                                    name="releaseDate"
                                    required
                                    onChange={handleChange}
                                    placeholder="Release Date"
                                    min={0}
                                    step="0.01"
                                //style={inputStyle}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="availableSeats">Available Seats : </label>
                                <input
                                    type="text"
                                    name="availableSeats"
                                    id="availableSeats"
                                    required
                                    onChange={handleChange}
                                    placeholder="Available Seats "
                                // style={inputStyle}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="location">Location : </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    required
                                    onChange={handleChange}
                                    placeholder="location "
                                    min={0}
                                    //style={inputStyle}
                                    step="0.01"
                                />
                            </FormGroup>

                            <FormGroup>
                                <label htmlFor="price">Price:</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
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
                )}
            </div>
        </>
    );
};

export default MoviesForm;
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FormGroup, Form } from "reactstrap";
import axios from "axios";

const EditMovieForm = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [title, setTitle] = useState();
    const [language, setLanguage] = useState();
    const [genre, setGenre] = useState();
    const [rating, setRating] = useState();
    const [runtime, setRuntime] = useState();
    const [releaseDate, setReleaseDate] = useState();
    const [availableSeats, setAvailableSeats] = useState();
    const [location, setLocation] = useState();
    const [price, setPrice] = useState();
    const [photo, setPhoto] = useState();

    console.log(`${BASE_URL}/movies/${id}`);
    useEffect(() => {
        axios
            .get(`${BASE_URL}/movies/${id}`)
            .then((res) => {
                const { data } = res;
                const movie = data.data;
                setTitle(movie.title);
                setLanguage(movie.language);
                setGenre(movie.genre);
                setRating(movie.rating);
                setRuntime(movie.runtime);
                setReleaseDate(movie.releaseDate);
                setAvailableSeats(movie.availableSeats);
                setLocation(movie.location);
                setPrice(movie.price);
                setPhoto(movie.photo);
            })

            .catch((err) => console.log(err));
    }, []);

    const Update = async (e) => {
        e.preventDefault();
        axios
            .put(`${BASE_URL}/movies/${id}`, {
                title,
                language,
                genre,
                rating,
                runtime,
                releaseDate,
                availableSeats,
                location,
                price,
                photo,
            })
            .then((movie) => {
                console.log(movie);
                navigate("/getAllMovies");
            });

        navigate("/movies");
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
                            <label htmlFor="title">Movie Name:</label>
                            <input
                                type="text"
                                id="title"
                                name="name"
                                required
                                //className="movie-input"
                                value={title}
                                pattern=".{1,100}"
                                title="Title must be between 1 and 100 characters"
                                //style={inputStyle}
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    setTitle(e.target.value);
                                }}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="language">Movie Language:</label>
                            <input
                                type="text"
                                id="language"
                                name="language"
                                required
                                //   pattern=".{1,100}"
                                //   title="City must be between 1 and 100 characters"
                                //style={inputStyle}
                                //className="movie-input"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="genre"> Genre : </label>
                            <input
                                type="text"
                                id="genre"
                                name="genre"
                                required
                                //   pattern=".{1,200}"
                                //   title="Address must be between 1 and 200 characters"
                                //style={inputStyle}
                                //className="movie-input"
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="rating">Rating : </label>
                            <input
                                type="text"
                                id="rating"
                                name="rating"
                                required=""
                                min={0}
                                step="0.01"
                                //style={inputStyle}
                                //className="movie-input"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="runtime">Run Time : </label>
                            <input
                                type="number"
                                id="runtime"
                                name="runtime"
                                required=""
                                min={0}
                                step="0.01"
                                //style={inputStyle}
                                //className="movie-input"
                                value={runtime}
                                onChange={(e) => setRuntime(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="releaseDate">Release Date : </label>
                            <input
                                type="Date"
                                name="releaseDate"
                                id="releaseDate"
                                //style={inputStyle}
                                //className="movie-input"
                                value={releaseDate}
                                onChange={(e) => setReleaseDate(e.target.value)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="availableSeats">Available Seats : </label>
                            <input
                                type="text"
                                id="availableSeats"
                                name="availableSeats"
                                required=""
                                min={0}
                                //style={inputStyle}
                                //className="movie-input"
                                step="0.01"
                                value={availableSeats}
                                onChange={(e) => setAvailableSeats(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="location">Location:</label>
                            <input
                                type="text"
                                id="locaation"
                                name="location"
                                required=""
                                min={0}
                                //style={inputStyle}
                                //className="movie-input"
                                step="0.01"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
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
                                //style={inputStyle}
                                //className="movie-input"
                                step="0.01"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
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
                                //className="movie-input"
                                value={photo}
                                onChange={(e) => setPhoto(e.target.value)}
                            />
                        </FormGroup>

                        <Button className="btn secondary_btn auth_btn" type="submit">
                            Update Details
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default EditMovieForm;
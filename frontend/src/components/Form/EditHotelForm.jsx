import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FormGroup, Form } from "reactstrap";
import axios from "axios";

const EditHotelForm = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [title, setTitle] = useState();
    const [city, setCity] = useState();
    const [address, setAddress] = useState();
    const [desc, setDescription] = useState();
    const [rooms, setRooms] = useState();
    const [rating, setRating] = useState();
    const [type, setType] = useState();
    const [price, setPrice] = useState();
    const [photo, setPhoto] = useState();

    console.log(`${BASE_URL}/hotels/${id}`);
    useEffect(() => {
        axios
            .get(`${BASE_URL}/hotels/${id}`)
            .then((res) => {
                const { data } = res;
                const hotel = data.data;
                setTitle(hotel.title);
                setCity(hotel.city);
                setAddress(hotel.address);
                setDescription(hotel.desc);
                setRooms(hotel.rooms);
                setRating(hotel.rating);
                setType(hotel.type);
                setPrice(hotel.price);
                setPhoto(hotel.photo);
            })

            .catch((err) => console.log(err));
    }, []);

    const Update = async (e) => {
        e.preventDefault();
        axios
            .put(`${BASE_URL}/hotels/${id}`, {
                title,
                city,
                address,
                desc,
                rooms,
                rating,
                type,
                price,
                photo,
            })
            .then((hotel) => {
                console.log(hotel);
                navigate("/getAllHotel");
            });

        navigate("/hotels");
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
                            <label htmlFor="title">Hotel Name:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                required
                                //className="bus-input"
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
                            <label htmlFor="city">City:</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                required
                                //   pattern=".{1,100}"
                                //   title="City must be between 1 and 100 characters"
                                //style={inputStyle}
                                //className="bus-input"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="address">Address : </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                required
                                //   pattern=".{1,200}"
                                //   title="Address must be between 1 and 200 characters"
                                //style={inputStyle}
                                //className="bus-input"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="to">Description : </label>
                            <input
                                type="text"
                                id="desc"
                                name="desc"
                                required=""
                                min={0}
                                step="0.01"
                                //style={inputStyle}
                                //className="bus-input"
                                value={desc}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="rooms">Rooms : </label>
                            <input
                                type="text"
                                id="rooms"
                                name="rooms"
                                required=""
                                min={0}
                                step="0.01"
                                //style={inputStyle}
                                //className="bus-input"
                                value={rooms}
                                onChange={(e) => setRooms(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="rating">Rating : </label>
                            <input
                                type="number"
                                name="rating"
                                id="rating"
                                //style={inputStyle}
                                //className="bus-input"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
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
                            <label htmlFor="price">Price:</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                required=""
                                min={0}
                                //style={inputStyle}
                                //className="bus-input"
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
                                //className="bus-input"
                                value={photo}
                                onChange={(e) => setPhoto(e.target.value)}
                            />
                        </FormGroup>

                        <Button className="btn secondary_btn auth__btn" type="submit">
                            Update Details
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default EditHotelForm;
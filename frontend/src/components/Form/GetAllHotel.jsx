import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "reactstrap";
import "../../styles/login.css";


const GetAllHotel = () => {
    const [hotels, setHotels] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    useEffect(function () {
        async function getHotels() {
            const res = await fetch(`${BASE_URL}/hotels`);
            const data = await res.json();
            setHotels(data.data);
        }
        getHotels();
    }, []);

    const handleDelete = async function (id) {
        axios.delete(`${BASE_URL}/hotels/${id}`);
        // window.location.reload();

        const res = await fetch(`${BASE_URL}/hotels`);
        const data = await res.json();

        setHotels(data.data);
    };
    return (
        <>

            <div className="m-5">
                {JSON.parse(localStorage.getItem(`userRole`)).currRole ===
                    "admin" && (
                        <Button className="btn primary__btn me-3 ">
                            <Link to={`/createHotel`}>Add Hotel</Link>
                        </Button>
                    )}
                {showForm && (
                    <div className="m-5 ">
                        <table className="table table-hover table-bordered table-striped  ">
                            <thead className="bg-warning text-align-center">
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Price</th>
                                    <th scope="col" >Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-warning">
                                {hotels.map((hotel) => {
                                    return (
                                        <tr>
                                            <td>{hotel.title}</td>
                                            <td>{hotel.city}</td>
                                            <td>{hotel.address}</td>
                                            <td>{hotel.price}</td>
                                            <td>
                                                <div className="display-flex">
                                                    <Button className="btn primary__btn m-2">
                                                        <Link to={`/editHotelForm/${hotel._id}`}>Update</Link>
                                                    </Button>

                                                    <Button
                                                        className="btn primary__btns  m-2"
                                                        //style={{width: "45%" , }}
                                                        onClick={() => handleDelete(hotel._id)}

                                                        type="submit"
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </>
    );
};

export default GetAllHotel;
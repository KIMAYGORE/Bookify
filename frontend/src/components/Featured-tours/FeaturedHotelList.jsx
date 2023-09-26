import React from "react";
import BusCard from "../../shared/HotelCard";
// import tourData from '../../assets/data/tours'
import { Col } from "reactstrap";
import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const FeaturedHotelList = () => {
    const {
        data: getAllHotel,
        loading,
        error,
    } = useFetch(`${BASE_URL}/hotels`);
    // console.log(featuredTours)

    return (
        <>
            {loading && <h4>Loading.....</h4>}
            {error && <h4>{error}</h4>}
            {!loading &&
                !error &&
                getAllHotel?.map((hotel) => (
                    <Col lg="3" md="4" sm="6" className="mb-4" key={hotel._id}>
                        <BusCard hotel={hotel} />
                    </Col>
                ))}
        </>
    );
};

export default FeaturedHotelList;
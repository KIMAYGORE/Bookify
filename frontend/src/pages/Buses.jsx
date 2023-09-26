
import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
// import tourData from '../assets/data/tours'
import "../styles/tour.css";
import { Link, useNavigate } from "react-router-dom";

import BusCard from "./../shared/BusCard";
import SearchBar from "./../shared/SearchBar";
import Newsletter from "./../shared/Newsletter";
import { Col, Container, Row, Button } from "reactstrap";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import BusForm from "../components/Form/BusForm";
import GetAllBus from "../components/Form/GetAllBus";
//import { getBusCount } from '../../../backend/Controllers/busController'

const Buses = () => {
   const [pageCount, setPageCount] = useState(0);
   const [page, setPage] = useState(0);

   const {
      data: buses,
      loading,
      error,
   } = useFetch(`${BASE_URL}/buses?page=${page}`);
   const { data: busCount } = useFetch(`${BASE_URL}/buses/search/getBusCount`);
   console.log(busCount);

   useEffect(() => {
      const pages = Math.ceil(busCount / 8);
      setPageCount(pages);
      window.scrollTo(0, 0);
   }, [page, busCount, buses]);

   return (
      <>
         <CommonSection title={"All Buses"} />
         <br></br>
         <br></br>

         <section className="pt-0">
            <Container>
               {loading && <h4 className="text-center pt-5">LOADING..........</h4>}
               {error && <h4 className="text-center pt-5">{error}</h4>}
               {!loading && !error && (
                  <Row>
                     {buses?.map((bus) => (
                        <Col lg="3" md="6" sm="6" className="mb-4" key={bus._id}>
                           {" "}
                           <BusCard bus={bus} />{" "}
                        </Col>
                     ))}

                     <Col lg="12">
                        <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                           {[...Array(pageCount).keys()].map((number) => (
                              <span
                                 key={number}
                                 onClick={() => setPage(number)}
                                 className={page === number ? "active__page" : ""}
                              >
                                 {number + 1}
                              </span>
                           ))}
                        </div>
                     </Col>
                  </Row>
               )}
               <Row className="mt-5">
                  <Col
                     lg="12"
                     className="mb-5   d-flex align-items-center justify-content-center"
                  >
                     {/* <div className='col-6 justify-content-right'>
              {JSON.parse(localStorage.getItem(`userRole`)).currRole ===
                "admin" && <BusForm /> }
              </div > */}
                     <div>
                        {JSON.parse(localStorage.getItem(`userRole`)).currRole ===
                           "admin" && (
                              <Button className="btn primary__btn me-3 ">
                                 <Link to={`/GetAllBus`}>Bus Actions</Link>
                              </Button>
                           )}
                     </div>
                  </Col>
                  {/* <Col lg="12" className="mb-5 d-flex align-items-center justify-content-center">
              {JSON.parse(localStorage.getItem(`userRole`)).currRole ===
                "admin" && <BusForm /> }
            </Col>
            <Col lg="12" className="mb-5 d-flex align-items-center justify-content-center">
              {JSON.parse(localStorage.getItem(`userRole`)).currRole ===
                "admin" && <GetAllBus /> }
            </Col> */}
               </Row>
            </Container>
         </section>
         <Newsletter />
      </>
   );
};

export default Buses;
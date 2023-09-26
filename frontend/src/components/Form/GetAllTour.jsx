// import React, { useEffect, useState } from "react";
// import useFetch from "../../hooks/useFetch";
// import { BASE_URL } from "../../utils/config";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Button } from "reactstrap";

// const GetAllTour = () => {
//   const [tours, setTours] = useState([]);
//   const [showForm, setShowForm] = useState(false);

//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   useEffect(function () {
//     async function getTours() {
//       const res = await fetch(`${BASE_URL}/tours`);
//       const data = await res.json();
//       setTours(data.data);
//     }
//     getTours();
//   }, []);

//   const handleDelete = async function (id) {
//     axios.delete(`${BASE_URL}/tours/${id}`);
//     // window.location.reload();

//     const res = await fetch(`${BASE_URL}/tours`);
//     const data = await res.json();

//     setTours(data.data);
//   };
//   return (
//     <>
//      <div>
//     <button onClick={toggleForm} className="btn btn-primary">
//         Tour Actions
//       </button>
//       {showForm && (
//     <div className="m-5 ">
//       <table className="table table-hover  ">
//         <thead className="bg-warning text-align-center">
//           <tr>
//             <th scope="col">Title</th>
//             <th scope="col">City</th>
//             <th scope="col">Address</th>
//             <th scope="col">Price</th>
//             <th scope="col" >Actions</th>
//           </tr>
//         </thead>
//         <tbody className="table-warning">
//           {tours.map((tour) => {
//             return (
//               <tr>
//                 <td>{tour.title}</td>
//                 <td>{tour.city}</td>
//                 <td>{tour.address}</td>
//                 <td>{tour.price}</td>
//                 <td>
//                   <div className="display-flex">
//                     <Button className="btn primary__btn me-3">
//                       <Link to={`/editTourForm/${tour._id}`}>Update</Link>
//                     </Button>

//                     <Button
//                       className="btn primary__btns"
//                       style={{width: "50%" , }}
//                       onClick={() => handleDelete(tour._id)}

//                       type="submit"
//                     >
//                       Delete
//                     </Button>
//                   </div>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//      )}

//      </div>
//      </>
//   );
// };

// export default GetAllTour;

import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "reactstrap";
import "../../styles/login.css";

const GetAllTour = () => {
  const [tours, setTours] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);

  useEffect(function () {
    async function getTours() {
      const res = await fetch(`${BASE_URL}/tours?page=${page}`);
      const data = await res.json();
      console.log(data);
      setTours(data.data);
    }
    getTours();
  }, []);

  const handleDelete = async function (id) {
    axios.delete(`${BASE_URL}/tours/${id}`);
    // window.location.reload();

    const res = await fetch(`${BASE_URL}/tours/`);
    const data = await res.json();

    setTours(data.data);
  };
  return (
    <>
      <div>
        <div className="m-5 ">
          <div className="m-5">
            {JSON.parse(localStorage.getItem(`userRole`)).currRole ===
              "admin" && (
                <Button className="btn primary__btn me-3 ">
                  <Link to={`/createTour`}>Add Tour</Link>
                </Button>
              )}
          </div>
          <table className="table table-hover table-bordered table-striped  ">
            <thead className="bg-warning text-align-center">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">City</th>
                <th scope="col">Address</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody className="table-warning">
              {tours?.map((tour) => {
                return (
                  <tr>
                    <td>{tour.title}</td>
                    <td>{tour.city}</td>
                    <td>{tour.address}</td>
                    <td>{tour.price}</td>
                    <td>
                      <div className="display-flex">
                        <Button className="btn primary__btn m-2">
                          <Link to={`/editTourForm/${tour._id}`}>Update</Link>
                        </Button>

                        <Button
                          className="btn primary__btns  m-2"
                          //style={{width: "45%" , }}
                          onClick={() => handleDelete(tour._id)}
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
      </div>
    </>
  );
};

export default GetAllTour;
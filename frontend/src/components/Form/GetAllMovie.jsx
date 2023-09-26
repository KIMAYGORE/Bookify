// import React, { useEffect, useState } from "react";
// import useFetch from "../../hooks/useFetch";
// import { BASE_URL } from "../../utils/config";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Button } from "reactstrap";
// import "../../styles/login.css";


// const GetAllMovie = () => {
//   const [Movies, setMovies] = useState([]);
//   const [showForm, setShowForm] = useState(false);

//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   useEffect(function () {
//     async function getMovies() {
//       const res = await fetch(`${BASE_URL}/movies/`);
//       const data = await res.json();
//       setMovies(data.data);
//     }
//     getMovies();
//   }, []);

//   const handleDelete = async function (id) {
//     axios.delete(`${BASE_URL}/movies/${id}`);
//     window.location.reload();

//     const res = await fetch(`${BASE_URL}/movies`);
//     const data = await res.json();

//     setMovies(data.data);
//   };
//   return (
//     <>
//       <div>
//         <button onClick={toggleForm} className="btn primary__btn">
//           Movie Actions
//         </button>

//         {showForm && (
//           <div className="m-5 ">
//             <table className="table table-hover table-bordered table-striped  ">
//               <thead className="bg-warning text-align-center">
//                 <tr>
//                   <th scope="col">Title</th>
//                   <th scope="col">City</th>
//                   <th scope="col">Address</th>
//                   <th scope="col">Price</th>
//                   <th scope="col" >Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="table-warning">
//                 {Movies.map((Movie) => {
//                   return (
//                     <tr>
//                       <td>{Movie.title}</td>
//                       <td>{Movie.genre}</td>
//                       <td>{Movie.rating}</td>
//                       <td>{Movie.price}</td>
//                       <td>
//                         <div className="display-flex">
//                           <Button className="btn primary__btn m-2">
//                             <Link to={`/editMovieForm/${Movie._id}`}>Update</Link>
//                           </Button>

//                           <Button
//                             className="btn primary__btns  m-2"

//                             onClick={() => handleDelete(Movie._id)}

//                             type="submit"
//                           >
//                             Delete
//                           </Button>
//                         </div>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         )}

//       </div>
//     </>
//   );
// };

// export default GetAllMovie;

import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "reactstrap";
import "../../styles/login.css";


const GetAllMovie = () => {
  const [Movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false);



  useEffect(function () {
    async function getMovies() {
      const res = await fetch(`${BASE_URL}/movies/`);
      const data = await res.json();
      setMovies(data.data);
    }
    getMovies();
  }, []);

  const handleDelete = async function (id) {
    axios.delete(`${BASE_URL}/movies/${id}`);
    // window.location.reload();

    const res = await fetch(`${BASE_URL}/movies`);
    const data = await res.json();

    setMovies(data.data);
  };
  return (
    <>
      <div className="m-5">
        {JSON.parse(localStorage.getItem(`userRole`)).currRole ===
          "admin" && (
            <Button className="btn primary__btn me-3 ">
              <Link to={`/createMovie`}>Add Movie</Link>
            </Button>
          )}



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
              {Movies.map((Movie) => {
                return (
                  <tr>
                    <td>{Movie.title}</td>
                    <td>{Movie.genre}</td>
                    <td>{Movie.rating}</td>
                    <td>{Movie.price}</td>
                    <td>
                      <div className="display-flex">
                        <Button className="btn primary__btn m-2">
                          <Link to={`/editMovieForm/${Movie._id}`}>Update</Link>
                        </Button>

                        <Button
                          className="btn primary__btns  m-2"
                          // style={{width: "45%" , }}
                          onClick={() => handleDelete(Movie._id)}

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

export default GetAllMovie;
// import React, { useEffect, useState } from "react";
// import useFetch from "../../hooks/useFetch";
// import { BASE_URL } from "../../utils/config";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Button } from "reactstrap";

// const GetAllBus = () => {
//   const [buses, setBuses] = useState([]);
//   const [showForm, setShowForm] = useState(false);

//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   useEffect(function () {
//     async function getBuses() {
//       const res = await fetch(`${BASE_URL}/buses`);
//       const data = await res.json();
//       setBuses(data.data);
//     }
//     getBuses();
//   }, []);

//   const handleDelete = async function (id) {
//     axios.delete(`${BASE_URL}/buses/${id}`);
//     // window.location.reload();

//     const res = await fetch(`${BASE_URL}/buses`);
//     const data = await res.json();

//     setBuses(data.data);
//   };
//   return (
//     <>
//      <div>
//     <button onClick={toggleForm} className="btn btn-primary">
//         Bus Actions
//       </button>
//       {showForm && (
//     <div className="m-5">
//       <table className="table table-hover">
//         <thead className="bg-warning" >
//           <tr>
//             <th scope="col">Name</th>
//             <th scope="col">Number</th>
//             <th scope="col">From</th>
//             <th scope="col">To</th>
//             <th scope="col">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="table-warning">
//           {buses.map((bus) => {
//             return (
//               <tr>
//                 <td>{bus.name}</td>
//                 <td>{bus.number}</td>
//                 <td>{bus.from}</td>
//                 <td>{bus.to}</td>
//                 <td>
//                   {/* <Button><Link to={`/editBusForm/${bus._id}`}> Update</Link></Button>
//                   <Button onClick={() => handleDelete(bus._id)}>Delete</Button> */}

//                   <Button className="btn primary__btn me-3 ">
//                       <Link to={`/editBusForm/${bus._id}`}>Update</Link>
//                     </Button>


//                     <Button
//                       onClick={() => handleDelete(bus._id)}
//                       className="btn primary__btns"
//                       type="submit"
//                     >
//                       Delete
//                     </Button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//       )}

//   </div>
//   </>
//   );

// };

// export default GetAllBus;
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "reactstrap";

const GetAllBus = () => {
  const [buses, setBuses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(function () {
    async function getBuses() {
      const res = await fetch(`${BASE_URL}/buses/`);
      const data = await res.json();
      setBuses(data.data);
    }
    getBuses();
  }, []);

  const handleDelete = async function (id) {
    axios.delete(`${BASE_URL}/buses/${id}`);
    // window.location.reload();

    const res = await fetch(`${BASE_URL}/buses`);
    const data = await res.json();

    setBuses(data.data);
  };
  return (
    <>
      <div className="m-5">
        {JSON.parse(localStorage.getItem(`userRole`)).currRole ===
          "admin" && (
            <Button className="btn primary__btn me-3 ">
              <Link to={`/createBus`}>Add Bus</Link>
            </Button>
          )}
      </div>
      <div className="m-5">
        <table className="table table-hover table-bordered table-striped ">
          <thead className="bg-warning text-align-center">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="table-warning">
            {buses.map((bus) => {
              return (
                <tr>
                  <td>{bus.name}</td>
                  <td>{bus.number}</td>
                  <td>{bus.from}</td>
                  <td>{bus.to}</td>
                  <td>
                    {/* <Button><Link to={`/editBusForm/${bus._id}`}> Update</Link></Button>
                  <Button onClick={() => handleDelete(bus._id)}>Delete</Button> */}

                    <Button className="btn primary__btn me-3 ">
                      <Link to={`/editBusForm/${bus._id}`}>Update</Link>
                    </Button>

                    <Button
                      onClick={() => handleDelete(bus._id)}
                      className="btn primary__btns"
                      type="submit"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>


    </>
  );
};

export default GetAllBus;
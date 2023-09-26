// import React, { useState, useEffect } from 'react'
// import CommonSection from '../shared/CommonSection'
// // import tourData from '../assets/data/tours'
// import '../styles/tour.css'
// // import BusCard from './../shared/BusCard'
// import SearchBar from './../shared/SearchBar'
// import Newsletter from './../shared/Newsletter'
// import { Col, Container, Row } from 'reactstrap'
// import useFetch from '../hooks/useFetch'
// import { BASE_URL } from '../utils/config'
// // import BusForm from '../components/Form/BusForm'
// // import EditBusForm from '../components/Form/EditBusForm'
// import MovieCard from '../shared/MovieCard'
// import MovieForm from "../components/Form/MovieForm"
// import GetAllMovie from '../components/Form/GetAllMovie'
// //import { getBusCount } from '../../../backend/Controllers/busController'


// const Movies = () => {
//    const [pageCount, setPageCount] = useState(0)
//    const [page, setPage] = useState(0)

//    const { data: movies, loading, error } = useFetch(`${BASE_URL}/movies?page=${page}`)
//    const { data: movieCount } = useFetch(`${BASE_URL}/movies/search/getMovieCount`)
//    console.log(movieCount)

//    useEffect(() => {
//       const pages = Math.ceil(movieCount / 8)
//       setPageCount(pages)
//       window.scrollTo(0, 0)
//    }, [page, movieCount, movies])

//    return (
//       <>
//          <CommonSection title={"All Movies"} />
//          <br></br>
//          <br></br>

//          <section className='pt-0'>
//             <Container>
//                {loading && <h4 className='text-center pt-5'>LOADING..........</h4>}
//                {error && <h4 className='text-center pt-5'>{error}</h4>}
//                {
//                   !loading && !error &&
//                   <Row>
//                      {
//                         movies?.map(movies => (<Col lg='3' md='6' sm='6' className='mb-4' key={movies._id}> <MovieCard movies={movies} /> </Col>))
//                      }

//                      <Col lg='12'>
//                         <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
//                            {[...Array(pageCount).keys()].map(number => (
//                               <span key={number} onClick={() => setPage(number)}
//                                  className={page === number ? 'active__page' : ''}
//                               >
//                                  {number + 1}
//                               </span>
//                            ))}
//                         </div>
//                      </Col>
//                   </Row>
//                }
//                <Row>
//                   <Col lg="12" className="mb-5 d-flex align-items-center justify-content-center">
//                      {JSON.parse(localStorage.getItem(`userRole`)).currRole ===
//                         "admin" && <MovieForm />}
//                   </Col>
//                   <Col lg="12" className="mb-5 d-flex align-items-center justify-content-center">
//                      {JSON.parse(localStorage.getItem(`userRole`)).currRole ===
//                         "admin" && <GetAllMovie />}
//                   </Col>
//                </Row>
//             </Container>
//          </section>
//          <Newsletter />
//       </>
//    )
// }

// export default Movies

import React, { useState, useEffect } from 'react'
import CommonSection from '../shared/CommonSection'
// import tourData from '../assets/data/tours'
import '../styles/tour.css'
// import BusCard from './../shared/BusCard'
import { Link } from 'react-router-dom'
import SearchBar from './../shared/SearchBar'
import Newsletter from './../shared/Newsletter'
import { Col, Container, Row, Button } from 'reactstrap'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
// import BusForm from '../components/Form/BusForm'
// import EditBusForm from '../components/Form/EditBusForm'
import MovieCard from '../shared/MovieCard'
//import { getBusCount } from '../../../backend/Controllers/busController'


const Movies = () => {
   const [pageCount, setPageCount] = useState(0)
   const [page, setPage] = useState(0)

   const { data: movies, loading, error } = useFetch(`${BASE_URL}/movies?page=${page}`)
   const { data: movieCount } = useFetch(`${BASE_URL}/movies/search/getMovieCount`)
   console.log(movieCount)

   useEffect(() => {
      const pages = Math.ceil(movieCount / 8)
      setPageCount(pages)
      window.scrollTo(0, 0)
   }, [page, movieCount, movies])

   return (
      <>
         <CommonSection title={"All Movies"} />
         <br></br>
         <br></br>
         {/* <section>
            <Container>
               <Row>
                  <SearchBar />
               </Row>
            </Container>
         </section> */}

         <section className='pt-0'>
            <Container>
               {loading && <h4 className='text-center pt-5'>LOADING..........</h4>}
               {error && <h4 className='text-center pt-5'>{error}</h4>}
               {
                  !loading && !error &&
                  <Row>
                     {
                        movies?.map(movies => (<Col lg='3' md='6' sm='6' className='mb-4' key={movies._id}> <MovieCard movies={movies} /> </Col>))
                     }

                     <Col lg='12'>
                        <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                           {[...Array(pageCount).keys()].map(number => (
                              <span key={number} onClick={() => setPage(number)}
                                 className={page === number ? 'active__page' : ''}
                              >
                                 {number + 1}
                              </span>
                           ))}
                        </div>
                     </Col>
                  </Row>
               }
               <Row>
                  <Col lg="12" className="mb-5 d-flex align-items-center justify-content-center">
                     {/* {JSON.parse(localStorage.getItem(`userRole`)).currRole ===
                "admin" && <MoviesForm /> } */}
                     <div>
                        {JSON.parse(localStorage.getItem(`userRole`)).currRole ===
                           "admin" && <Button className="btn primary__btn me-3 ">
                              <Link to={`/getAllMovie`}>Movies Action</Link>
                           </Button>}
                     </div>
                  </Col>
                  {/* <Col lg="12" className="mb-5 d-flex align-items-center justify-content-center">
              {JSON.parse(localStorage.getItem(`userRole`)).currRole ===
                "admin" && <EditBusForm /> }
            </Col> */}
               </Row>
            </Container>
         </section>
         <Newsletter />
      </>
   )
}

export default Movies
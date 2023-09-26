import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import AboutUs from './../pages/AboutUs'
import PaymentSuccess from './../pages/PaymentSuccess'
import Buses from "../pages/Buses";
import BusDetails from "../pages/BusDetails";
import FormInput from "../pages/FormInput";
import GetAllBus from "../components/Form/GetAllBus";
import EditBusForm from "../components/Form/EditBusForm";
import EditTourForm from "../components/Form/EditTourForm";
import GetAllTour from "../components/Form/GetAllTour";
import Hotels from '../pages/Hotels'
import HotelDetails from '../pages/HotelDetails'
import VerifyEmail from "../pages/VerifyEmail"
import Movies from '../pages/Movies'
import MovieDetails from '../pages/MovieDetails'
import GetAllMovie from '../components/Form/GetAllMovie'
import EditMovieForm from '../components/Form/EditMovieForm'
import MoviesForm from '../components/Form/MovieForm'
import GetAllHotel from '../components/Form/GetAllHotel'
import EditHotelForm from '../components/Form/EditHotelForm'
import TourForm from '../components/Form/TourForm'
import BusForm from '../components/Form/BusForm'
import HotelForm from '../components/Form/HotelForm'
// import SeatSelection from "../shared/SeatSelection";

const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home' />} />
         <Route path='/home' element={<Home />} />
         <Route path='/tours' element={<Tours />} />
         <Route path='/createTour' element={<TourForm />} />
         <Route path='/createBus' element={<BusForm />} />
         <Route path='/createHotel' element={<HotelForm />} />



         <Route path='/AboutUs' element={<AboutUs />} />
         <Route path='/tours/:id' element={<TourDetails />} />
         <Route path='/login' element={<Login />} />
         <Route path='/register' element={<Register />} />
         <Route path='/tours/search' element={<SearchResultList />} />
         <Route path='/paymentsuccess' element={<PaymentSuccess />} />
         <Route path="/buses" element={<Buses />} />
         <Route path="/buses/:id" element={<BusDetails />} />
         <Route path="/formInput" element={<FormInput />} />
         <Route path="/getAllBus" element={<GetAllBus />} />
         <Route path="/getAllTour" element={<GetAllTour />} />
         <Route path="/editBusForm/:id" element={<EditBusForm />} />
         <Route path="/editTourForm/:id" element={<EditTourForm />} />
         <Route path="/verify-email" element={<VerifyEmail />} />
         <Route path='/hotels' element={<Hotels />} />
         <Route path='/hotels/:id' element={<HotelDetails />} />
         <Route path='/movies' element={<Movies />} />
         <Route path='/movies/:id' element={<MovieDetails />} />
         <Route path='/getAllMovie' element={<GetAllMovie />} />
         <Route path='/editMovieForm/:id' element={<EditMovieForm />} />
         <Route path='/createMovie' element={<MoviesForm />} />
         <Route path='/getAllHotels' element={<GetAllHotel />} />
         <Route path="/editHotelForm/:id" element={<EditHotelForm />} />



         {/* <Route path="/SeatSelection" element={<SeatSelection />} /> */}
      </Routes>
   )
}

export default Routers
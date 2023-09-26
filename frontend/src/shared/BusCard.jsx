import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'

import './bus_card.css'
//import calculateAvgRating from '../utils/avgRating'

const BusCard = ({ bus }) => {

   const { _id, name, from, to, fare, capacity, journeyDate,photo } = bus

  // const { totalRating, avgRating } = calculateAvgRating(reviews)

   return (
      <div className='tour__card'>
         <Card>
            <div className="tour__img">
               <img src={photo} alt="tour-img" />
               
            </div>

            <CardBody>
               <div className="card__top d-flex align-items-center justify-content-between">
                  <span className="tour__location d-flex align-items-center gap-1">
                     {/* <i class='fa fa-globe'></i> {name} */}
                  </span>
                 
               </div>

               <h5 className='tour__title'><i class='fa fa-globe'></i><Link to={`/buses/${_id}`}>{name}</Link></h5>

               <div className="card__bottom align-items-center justify-content-between mt-3">
                  <h5><span>Destination : </span>{to} </h5>
                  <h5><span>Source : </span>{from} </h5>
                  {/* <h5><span>Total Seats : </span>${capacity} </h5> */}
                  <h5><span>Journey Date : </span>{journeyDate} </h5>
                  <h5><span>Price per Person : </span><i class="fa fa-inr"></i>{fare} </h5>


                  {/* <button className=' booking__btn'>
                     <Link to={`/tours/${_id}`}>Book Now</Link>
                  </button> */}
                  <Link to={`/buses/${_id}`}>
                     <button className=' booking__btn'>Book Now</button>
                  </Link>
               </div>
            </CardBody>
         </Card>
      </div>
   )
}

export default BusCard
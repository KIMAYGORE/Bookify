import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'

import './bus_card.css'
//import calculateAvgRating from '../utils/avgRating'

const HotelCard = ({ hotel }) => {

   const { _id, title, city, address, photo, desc, price, rooms, type } = hotel

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

               <h5 className='tour__title'><i class='fa fa-globe'></i><Link to={`/hotels/${_id}`}>{title}</Link></h5>

               <div className="card__bottom align-items-center justify-content-between mt-3">
                  <h5><span>Title : </span>{title} </h5>
                  <h5><span>Location : </span>{address} </h5>
                  {/* <h5><span>Total Seats : </span>${capacity} </h5> */}
                  <h5><span>Type : </span>{type} </h5>
                  <h5><span>Price  : </span><i class="fa fa-inr"></i>{price} </h5>


                  {/* <button className=' booking__btn'>
                     <Link to={`/tours/${_id}`}>Book Now</Link>
                  </button> */}
                  <Link to={`/hotels/${_id}`}>
                     <button className=' booking__btn'>Book Now</button>
                  </Link>
               </div>
            </CardBody>
         </Card>
      </div>
   )
}

export default HotelCard
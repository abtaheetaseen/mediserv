import React from 'react'
import {
    TbTruckDelivery
  } from "react-icons/tb";

  import {
    AiFillMedicineBox
  } from "react-icons/ai";

  import {
    ImTruck
  } from "react-icons/im";

const Facilities = () => {
  return (
    <div className="faci-container">
        <h1>MEDISERV'S FACILITIES</h1>
        <div className="facilities-row">

            <div className="facilities">
                <TbTruckDelivery className='facilities-icon'/>
                <h2>One Hour Delivery</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>

            <div className="facilities">
                <AiFillMedicineBox className='facilities-icon'/>
                <h2>Imported Medicine</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>

            <div className="facilities">
                <ImTruck className='facilities-icon'/>
                <h2>Ambulance Service</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>

            <div className="facilities">
                <TbTruckDelivery className='facilities-icon'/>
                <h2>One Hour Delivery</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>

        </div>
    </div>
  )
}

export default Facilities

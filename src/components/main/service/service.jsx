import React from 'react'
import "./service.css"
import ServiceItem from './service-item'
const Service = () => {
  return (
    <div className='service-box '>
        <div className="service p-50">
            <div className="service-top">
                <h4>My <span>Services</span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>
            </div>
            <div className="service-list">
                <ServiceItem/>
                <ServiceItem/>
                <ServiceItem/>
            </div>
            <div className="dots">
              <div className="dot dotActive"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
        </div>
    </div>
  )
}

export default Service
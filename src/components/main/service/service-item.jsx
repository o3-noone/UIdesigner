import React from 'react'
import imgItem from "./item.png"
const ServiceItem = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>UI/ UX Design</h2>
        <img src={imgItem} alt="UI/UX Design" />

      </div>
      <div className="arrow">
        <a href="#"><div className="arrow-icon">➔</div></a>
      </div>
    </div>
  )
}

export default ServiceItem
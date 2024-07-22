import React from 'react'
import "./hire.css"
import user from "./user.png"
const Hire = () => {
  return (
    <div className='Hire'>
        <div className="hireImg">
            <img src={user} alt="img" />
        </div>
        <div className="hireText">
            <h3>Why <span>Hire me</span>?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>

            <div className="hireInfo">
                <div className="infoHire">
                    <h4>450+</h4>
                    <p>Project Completed</p>
                </div>
                <div className="infoHire">
                    <h4>450+</h4>
                    <p>Project Completed</p>
                </div>
            
            </div>
            <div className="hireBtns">
                <button className="hireBtn">
                    Hire Me
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hire
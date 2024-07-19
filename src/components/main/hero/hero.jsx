import React from 'react'
import "./hero.css"
import icon from "./icon.png"
import user from "./user.png"
const Hero = () => {
    return (
        <div className="hero-box p-50">
            <div className="hero">
                <div className="hero-cont">
                    <div className="hero-t-hi">
                        Hello!
                        <img src={icon} alt="icon" />
                    </div>
                    <h1 className='hero-text'>I.m <span>Jenny</span>, <br /> Product Designer <img src={icon} alt="" /> </h1>
                </div>
                <div className="hero-img-cont">
                    <div className="hero-info">
                        <i class="fa-solid fa-quote-left"></i>
                        <p>Jenny’s Exceptional product designensure our website’s success.Highly Recommended</p>
                    </div>
                    <img className='hero-img' src={user} alt="img" />
                    <div className="hero-star">
                        <div className="hero-icon"> <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i></div>
                        <h4>10 Years</h4>
                        <p>Experince</p>
                    </div>
                    <div className="hero-navigate">
                        <button className="hero-portfolio">Portfolio <i class="fa-solid fa-arrow-up portfolio-icon"></i></button>
                        <button className="hero-hireMe">Hire Me<i class="fa-solid fa-arrow-up portfolio-icon2"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
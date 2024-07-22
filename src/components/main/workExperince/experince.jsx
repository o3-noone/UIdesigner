import React from 'react'
import "./experince.css"
const Experince = () => {
    return (
        <div className='ExperinceBox p-50'>
            <div className="ExperinceHead">
                <h3>My <span>Work Experince</span></h3>
            </div>
            <ul className="ExperinceList">
                <li className="ExperinceItem">
                    <div className="itemLeft">
                        <h4>Cognizant, Mumbai</h4>
                        <p>Sep 2016- July 2020</p>
                    </div>
                    <div className="itemCenter">
                        <div>
                            <span></span>
                        </div>
                        <span className='itemDashed'></span>
                    </div>
                    <div className="itemRight">
                        <h4>Experince Designer</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>
                    </div>
                </li>
                <li className="ExperinceItem">
                    <div className="itemLeft">
                        <h4>Sugee Pvt limited, Mumbai</h4>
                        <p>Sep 2020- July 2023</p>
                    </div>
                    <div className="itemCenter">
                        <div>
                            <span></span>
                        </div>
                        <span className='itemDashed'></span>
                    </div>
                    <div className="itemRight">
                        <h4>UI/UX Designer</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales  </p>
                    </div>
                </li>
                <li className="ExperinceItem">
                    <div className="itemLeft">
                        <h4>Cinetstox, Mumbai</h4>
                        <p>Sep 2023</p>
                    </div>
                    <div className="itemCenter">
                        <div>
                            <span></span>
                        </div>
                        <span className='itemDashed'></span>
                    </div>
                    <div className="itemRight">
                        <h4>Lead UX Designer</h4>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Experince
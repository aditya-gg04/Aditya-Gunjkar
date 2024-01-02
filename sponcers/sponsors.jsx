import React from "react";
import './sponsors.css'

const Sponsor = () => {
    return (
        <>
            <div className=" op ">
                <div className="op1">
                    Our Sponsors
                </div>
            </div>
            
            <div className="main">
                <div className="sponcer-card">
                    <div className="img">
                        <img src="./assets/sponcer1.png" alt="404" />
                    </div>
                    <div className="caption ">
                        <h3 >Markonow</h3>
                        <h6>Education Sponsor</h6>
                        <h6>markonow.com</h6>

                    </div>
                
                </div>


                <div className="sponcer-card">
                    <div className="img">
                        <img src="./assets/sponcer2.png" alt="404" />
                    </div>
                    <div className="caption ">
                        <h3 >Insyst Labs</h3>
                        <h6>Title  Sponsor</h6>
                        <h6>insystlabs.com</h6>

                    </div>
                
                </div>


                <div className="sponcer-card">
                    <div className="img">
                        <img src="./assets/zsponcer3.png" alt="404" />
                    </div>
                    <div className="caption ">
                        <h3 >Stokpe </h3>
                        <h6>Event Sponsor</h6>
                        <h6>Stockpe Privation Limited</h6>

                    </div>
                
                </div>
            </div>
        </>
    )
}
export default Sponsor;
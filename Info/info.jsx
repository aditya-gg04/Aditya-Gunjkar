import React from "react";
import './info.css'



const Info = () => {
    return (
        <>
            <div className=" main bg-black text-white">

            </div>
            <div className=" main1 bg-black text-white">
                <div className="box">
                    <div>
                        <div className="heading">Educational workshops</div>
                        <div className="content">Get first hand experience and learn from quality workshops which fare across a wide area of interests.</div>
                        <div>
                            <button className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">View Workshop</span>
                            </button>
                        </div>
                    </div>

                    <div className="img">
                        <img src="./assets/workshop.png" alt="" />
                    </div>
                </div>

            </div>

            {/*  for space */}
            <div className=" main bg-black text-white">

            </div>
            {/* for space */}





            <div className=" main1 bg-black text-white">
                <div className="box1">
                    <div className="img1">
                        <img src="./assets/events.png" alt="" />
                    </div>
                    <div>
                        <div className="heading">Challenging Events</div>
                        <div className="content">Unleash your competitive spirit by participating in 20+ competitions and get a chance to win exciting prices.</div>
                        <div>
                            <button className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">View events</span>
                            </button>
                        </div>
                    </div>

                </div>

            </div>



            {/*  for space */}
            <div className=" main bg-black text-white">

            </div>
            {/* for space */}





            <div className=" main1 bg-black text-white">
                <div className="box">
                    <div>
                        <div className="heading">Exclusive Merch</div>
                        <div className="content">Get exclusive merch with custom,handmade pieces from right here</div>
                        <div>
                            <button className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Buy Merch</span>
                            </button>
                        </div>
                    </div>

                    <div className="img2">
                        <img src="./assets/merch.png" alt="" />
                    </div>
                </div>

            </div>


            {/*  for space */}
            <div className=" main bg-black text-white">

            </div>
            {/* for space */}
        </>
    )
}
export default Info;





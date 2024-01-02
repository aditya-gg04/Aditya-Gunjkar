import React from "react";
import './enspire.css'
import { useEffect } from "react";
import gsap from 'gsap';
import SplitTextJS from "split-text-js";

function Video() {
    useEffect(() => {
        const titles = gsap.utils.toArray('p');
        const tl = gsap.timeline({ repeat: -1 });

        titles.forEach((title) => {
            const splitTitle = new SplitTextJS(title);

            tl.from(splitTitle.chars, {
                opacity: 0,
                y: 80,
                rotateX: -90,
                stagger: 0.02,
                duration: 1,
                // delay:2
            }, "<")
                .to(splitTitle.chars, {
                    opacity: 0,
                    y: -80,
                    rotateX: 90,
                    stagger: 0.02,
                    duration: 1,

                }, "<1");
        });
    },);
    return (
        <>
            <div className="important">
                <div className="video-section">
                
                     {/* <video src="./assets/video3.mp4" loop autoPlay muted></video> */}
                     <video src="./assets/video1.mp4" loop autoPlay muted></video>
                   
                    {/* <video src="https://mdbootstrap.com/img/video/Sail-Away.mp4" loop autoPlay muted></video> */}
                    <div className="video-copy">
                        <h1>Enspire</h1>

                    </div>


                </div>
              

               


            </div>

            <div className="container">
                <div className="text-wrapper w-screen">
                    <p>INNOVATION ODESSEY</p>
                    <p>2023</p>
                </div>
            </div>
             
        </>
    )
}

export default Video;
import React from "react"
import { useEffect } from "react";
import './style.css'
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import gsap from 'gsap';
import SplitTextJS from "split-text-js";
const Animation = () => {


    return (
        <>
            <div className="container1">
                <h1 className="jt --debug">
                    <span className="jt__row">
                        <span className="jt__text">Ecell IIITL presents</span>
                    </span>
                    <span className="jt__row jt__row--sibling" aria-hidden="true">
                        <span className="jt__text">Ecell IIITL presents</span>
                    </span>
                    <span className="jt__row jt__row--sibling" aria-hidden="true">
                        <span className="jt__text">Ecell IIITL presents</span>
                    </span>
                    <span className="jt__row jt__row--sibling" aria-hidden="true">
                        <span className="jt__text">Ecell IIITL presents</span>
                    </span>
                </h1>
            </div>



        </>


    )
}

export default Animation
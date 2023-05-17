import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import "../../Styles/Login.css";
//ort Image1 from '../../Images/Busreport_image.jpg'
export default function Loggin() {
  return (
    <div id="LoginPage">
      <div className="row" id="formlogin1">
        <div></div>
        <div id="formlogin">
          <h1 id="ltext1">LOGIN</h1>
          <br></br>

          <Link to="/dashboard" className="regLink" id="ltext4">
            Create an Account
          </Link>

        </div>
      </div>

      {/* <div >
                <img src={Image1} id="image1"/>
            </div> */}
      <div id="c1">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div id="ltext6">
          WELCOME &nbsp;&nbsp; BACK <br></br>
          <i id="ltext5"> TravelLanka</i>
          <br></br>
          <span id="ltext7">
            No matter where you’re going from, we take you there..
          </span>
        </div>
      </div>
    </div>
  );
}

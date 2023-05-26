import React from "react";
import './Simulate.css';
import InputBackground from '../assets/InputField.png';
import {useState} from 'react';
import Decor4 from '../assets/Decor4.png';
import Decor3 from '../assets/Decor3.png';
import Decor2 from '../assets/Decor2.png';
// import crystal from '/Users/phamdoanphuonganh/Desktop/Crystal Simulator/crystal/src/assets/Crystal.png';

import ClickOne from "./ClickOne";

const Simulate = () => {
    const [value, setValue] = useState('');
  
    const handleChange = event => {
      const result = event.target.value.replace(/\D/g, '');
  
      setValue(result);
    };
  
    console.log(value);
    console.log(typeof value);
    console.log(Number(value));

    return(
        <div className="input-field">
            <img src={InputBackground} alt='#' />
            <div className="crystal">
                <img src={Decor4} alt="#" />
            </div>
        <div className="input-content">
            <h1>
                Adventure Time~
            </h1>
            {/* <div className="description">
                <h2>The number of</h2>
                <h3>molecules of</h3>
                <h4>your crystal</h4>
                <h5>valid-input: </h5>
                <h5>10 - 20 - 30 - 40 - 50</h5>
            </div>
                <form className="input-box">
                    <input type="text"
                    placeholder="20"
                    value={value}
                    onChange={handleChange}
                    />
                    <i></i>
                </form>
            <div className="mol">
                <h5>mol</h5>
            </div> */}
            <div className="chemical">
                <h1>Chemical Compound</h1>
                <h2>CuSO4.5H2O</h2>
            </div>
        <div className="decor-3">
            <img src ={Decor3} alt="#" />
        </div>
        <div className="decor-2">
            <img src={Decor2} alt="#" />
        </div>
        </div>
        <div id="container">
            <ClickOne />
        {/* /* <button className="learn-more"> */}
            {/* <div className="crystal-simu">
                <Crystal />
                <h1 className="note">Crystal Copper Sulphate Pentahydrate</h1>
            </div> */}
            {/* <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <span className="button-text">Deploy 20 mol</span>
        </button> */}
        </div>
    </div>
    )
}

export default Simulate;
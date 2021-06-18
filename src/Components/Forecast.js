import React from 'react';
import PartlyCloudy from '../images/partly-cloudy.png';
import Snow from '../images/snow.png';
import Sunny from '../images/sunny.png';
import Rainy from '../images/rainy.png';
import Thunder from '../images/thunderstorm.png';
import Windy from '../images/windy.png';

// import Card from 'Card';

const Forecast = () => (
    <div id="forecast">
        <h2>weekly forecast</h2>
        <section>
            <div className="card">
                <p>Today</p>
                <img src={PartlyCloudy} alt="Partly Cloudy" className="weather-logo"></img>
                <p>43° F</p>
            </div>
            <div className="card">
                <p>Tomorrow</p>
                <img src={Snow} alt="Snow" className="weather-logo"></img>
                <p>43° F</p>
            </div>
            <div className="card">
                <p>Saturday</p>
                <img src={Windy} alt="Windy" className="weather-logo"></img>
                <p>43° F</p>
            </div>
            <div className="card">
                <p>Sunday</p>
                <img src={Sunny} alt="Sun" className="weather-logo"></img>
                <p>43° F</p>            
            </div>
            <div className="card">
                <p>Monday</p>
                <img src={Rainy} alt="Rain Cloud" className="weather-logo"></img>
                <p>43° F</p>
            </div>
            <div className="card">
                <p>Tuesday</p>
                <img src={Thunder} alt="Thunder Cloud" className="weather-logo"></img>
                <p>43° F</p>
            </div>
            <div className="card">
                <p>Wednesday</p>
                <img src={Sunny} alt="Sun" className="weather-logo"></img>
                <p>43° F</p>
            </div>
        </section>
    </div>
)

export default Forecast;
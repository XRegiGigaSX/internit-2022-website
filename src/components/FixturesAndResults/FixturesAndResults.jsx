import React from 'react'
import ScoreCard from "../ScoreCard.jsx";

export default function FixturesAndResults() {
    return (
        <div>
            <div className="sport-categories">
                <ul className="sport-cat-container">
                    <li>BADMINTON</li>
                    <li>CHESS</li>
                    <li>TABLE TENNIS</li>
                </ul>
            </div>
            <div className="sort-cat">
                <span>Sort by : </span>
                {/* <span className="dropdown">
                    <button className="sortBy">
                        Dropdown
                    </button>
                    <ul className="sort-rodeo">
                        <li><button className="dropdown-item">Dropdown item</button></li>
                        <li><button className="dropdown-item">Dropdown item</button></li>
                    </ul>
                </span> */}
                <div class="dropdown">
                    <button class="dropbtn" id="myColors">Upcoming <img src={require('./down.png')} alt="down" /></button>
                    <div class="dropdown-content">
                        <a href="#" value="Completed">Completed</a>
                        <a href="#" value="Upcoming">Upcoming</a>
                    </div>
                </div>
            </div>
            <div className="scores">
                <ScoreCard
                    color="red"
                />
            </div>

        </div>
    )
}

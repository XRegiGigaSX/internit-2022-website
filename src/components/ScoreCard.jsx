import React from 'react'

const ScoreCard = ({color}) => {
  return (
    <div className="score-container" style={{borderTop: `1px solid ${color?color:"gray"}`}}>
        <span className="match-title">Match 1 - Completed</span>
        <div className="match-details">
            <span className="match-time">
                Time :- 16:50
            </span> | <span className="match-date">
                Date :- Friday, 07 October, 2022
            </span>
        </div>
        <div className="team1">
            <span className="team-name1">NIT Silchar</span>
            <img src="https://picsum.photos/200" alt="team-logo" className="team-logo" />      
        </div>
        <div className="score-box">
            <div className="score">
                2
            </div>
            <div className="vs">
                - VS -
            </div>
            <div className="score">
                0
            </div>
        </div>
        <div className="team2">
            <img src="https://picsum.photos/200" alt="team-logo" className="team-logo" />      
            <span className="team-name2">NIT Meghalaya</span>         
        </div>
    </div>
  )
}
export default ScoreCard


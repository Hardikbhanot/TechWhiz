import React from 'react'
import './clubs.scss'
import Terminal from './Terminal'
function Clubs() {
    return (
    <>
        <div className="club-container">
            <div className="menu">
                <div className="buttons-flex">
                    <div className="button green"></div>
                    <div className="button yellow"></div>
                    <div className="button red"></div>
                </div>
                <div className="title">
                    <h1>WELCOME TO TECHWHIZ</h1>

                </div>
                
            </div>
            <Terminal/>
        </div>
    </>
    )
}

export default Clubs

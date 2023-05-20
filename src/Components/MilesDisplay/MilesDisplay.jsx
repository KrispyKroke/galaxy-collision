import React from 'react';
import './MilesDisplay.css';

import {useState, useEffect} from 'react';


function MilesDisplay() {

    const [milesRemaining, setMilesRemaining] = useState('');

    useEffect(() => {
        calculateMiles();
    }, []);

    /* When this function is called, it uses a fixed reference date 
    and gets the time in seconds of both the collision date and 
    the current date since that reference date.  It then calculates
    the difference between the two and uses that time to get the miles until
    collision of the galaxies. */
    function calculateMiles() {
        const collisionDateInSeconds = 211856265808983360;
        const todayInSeconds = Date.now() / 1000;
        const timeLeft = collisionDateInSeconds - todayInSeconds;
        setMilesRemaining(timeLeft * 69);
    }

    return (
        <div className="MilesContainer">
            <h2>{milesRemaining} MILES UNTIL COLLISION!</h2>
        </div>
    );
}

export default MilesDisplay;
import React from 'react';
import './MilesDisplay.css';

import {useState, useEffect} from 'react';


function MilesDisplay() {

    const [milesRemaining, setMilesRemaining] = useState('');

    // When the page is visited, the current number of miles remaining is 
    // calculated.  After that, the new distance is recalculated at an 
    // interval of 1 second for as long as the user is on the page.
    useEffect(() => {
        calculateMiles();
        setInterval(calculateMiles, 1000);
    }, []);

    /* When this function is called, it uses a fixed reference date 
    and gets the time in seconds of both the collision date and 
    the current date since that reference date.  It then calculates
    the difference between the two and uses that time to get the miles until
    collision of the galaxies. */
    function calculateMiles() {
        const collisionDateInSeconds = 211856265808983360;
        const todayInSeconds = Math.round(Date.now() / 1000);
        const timeLeft = collisionDateInSeconds - todayInSeconds;
        setMilesRemaining(Math.round(timeLeft * 69));
    }

    return (
        <div className="MilesContainer">
            <h2>{milesRemaining.toLocaleString()} MILES UNTIL COLLISION!</h2>
        </div>
    );
}

export default MilesDisplay;
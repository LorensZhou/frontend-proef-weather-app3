import React from 'react';
import './CurrentWeather.css';

function CurrentWeather() {
    return (
        <div className="searchWithLoc">
            <h1>Zoeken met huidige weer</h1>
            <p>Hier komt de zoekfunctionaliteit voor huidige weer.</p>
            <form>
                <input type="text" placeholder="Zoekterm" />
                <input type="text" placeholder="Locatie" />
                <button type="submit">Zoeken</button>
            </form>
        </div>
    );
}

export default CurrentWeather;
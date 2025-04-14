import React from 'react';
import './Forecast.css';

function Forecast() {
    return (
        <div>
            <h1>Zoeken weer voorspelling</h1>
            <p>Hier komt de zoekfunctionaliteit weer voorspelling.</p>
            <form>
                <input type="text" placeholder="Zoekterm" />
                <button type="submit">Zoeken</button>
            </form>
        </div>
    );
}

export default Forecast;
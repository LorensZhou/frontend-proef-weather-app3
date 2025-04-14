import React from 'react';
import cities from '../../constants/cities.js';
import './CityPage.css';
import dutchNumberFormat from '../../helper/dutchNumberFormat.js';

function CityPage() {
    return (
        <div>
            <h1>Steden Pagina</h1>
            <p>Hier komt de functionaliteit voor de stad pagina.</p>
            <form>
                <input type="text" placeholder="Zoekterm" />
                <button type="submit">Zoeken stad</button>
            </form>
            <div className="cities-container">
                <ul>
                    {cities.map((city)=>{
                        return (
                            <div className="city-item" key={city.number}>
                                <li>
                                    <p>{city.number}. {city.name}, inwoners aantal: {dutchNumberFormat(city.inhabitants)}</p>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default CityPage;
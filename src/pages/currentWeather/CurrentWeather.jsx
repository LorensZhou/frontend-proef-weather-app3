import {useState} from 'react';
import './CurrentWeather.css';
import SearchableInput from "../../components/searchableInput/SearchableInput";
import cities from "../../constants/cities.js";
import Input from "../../components/input/Input.jsx";
import weatherCategories from "../../constants/weatherCategories.js";


function CurrentWeather() {
    const [searchMethod, setSearchMethod] = useState("");

    const cityNames = cities.map((city) => city.name);

    const [city1, setCity1] = useState("");
    const [city2, setCity2] = useState("");
    const [city3, setCity3] = useState("");
    const [city4, setCity4] = useState("");
    const [city5, setCity5] = useState("");
    const [city6, setCity6] = useState("");

    const [selectedWeather, setSelectedWeather] = useState('');
    const [preferredTemp, setPreferredTemp] = useState('');
    const [preferredWindSpeed, setPreferredWindSpeed] = useState('');

    const handleSearch1 = (value) => setCity1(value);
    const handleSearch2 = (value) => setCity2(value);
    const handleSearch3 = (value) => setCity3(value);
    const handleSearch4 = (value) => setCity4(value);
    const handleSearch5 = (value) => setCity5(value);
    const handleSearch6 = (value) => setCity6(value);

    const handleWeatherChange = (event) => setSelectedWeather(event.target.value);
    const handleTempChange = (event) => setPreferredTemp(event.target.value);
    const handleWindChange = (event) => setPreferredWindSpeed(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        const allSearchTerms = [
            city1,
            city2,
            city3,
            city4,
            city5,
            city6,
        ];
        console.log("All Search Terms:", allSearchTerms);
        // Do something with all the search terms (e.g., send to an API)
    };

    return (
        <>
            <div className="current-weather-container">
                <h1>Zoeken met huidige weer</h1>
                <p>Hier kunt u zoeken met ingave van locatie of zonder ingave van locatie voor het weer van huidige moment.
                   U kunt maximaal 6 locaties opgeven. Als u zoekt zonder locatie, dan worden random 6 locaties voor u geselecteerd.
                    U kunt alleen zoeken op locatie met meer dan 10.000 inwoners in Zuid-Holland.
                   Daarnaast kunt u minimaal een tot maximaal drie criteria's opgeven voor uw voorkeur van weer.</p>

                <div className="search-method-container">
                    <select name="search" id="search-method" value={searchMethod} onChange={(e) => setSearchMethod(e.target.value)}>
                        <option value="">--kies een zoekmethode--</option>
                        <option value="without-location">zoeken zonder locatie</option>
                        <option value="with-location">zoeken met locatie</option>
                    </select>
                </div>

                <section className="search-section">
                    <form className="search-form-flex" onSubmit={handleSubmit}>
                        <div className="search-inputs-flex">
                            <div className="search-input-wrapper">
                                <SearchableInput
                                    items={cityNames}
                                    onSearch={handleSearch1}
                                    label="plaats 1"
                                    inputId="city1"
                                    inputName="city1"
                                    maxSuggestions={10}
                                />
                            </div>
                            <div className="search-input-wrapper">
                                <SearchableInput
                                    items={cityNames}
                                    onSearch={handleSearch2}
                                    label="plaats 2"
                                    inputId="city2"
                                    inputName="city2"
                                    maxSuggestions={10}
                                />
                            </div>
                            <div className="search-input-wrapper">
                                <SearchableInput
                                    items={cityNames}
                                    onSearch={handleSearch3}
                                    label="plaats 3"
                                    inputId="city3"
                                    inputName="city3"
                                    maxSuggestions={10}
                                />
                            </div>
                            <div className="search-input-wrapper">
                                <SearchableInput
                                    items={cityNames}
                                    onSearch={handleSearch4}
                                    label="plaats 4"
                                    inputId="city4"
                                    inputName="city4"
                                    maxSuggestions={10}
                                />
                            </div>
                            <div className="search-input-wrapper">
                                <SearchableInput
                                    items={cityNames}
                                    onSearch={handleSearch5}
                                    label="plaats 5"
                                    inputId="city5"
                                    inputName="city5"
                                    maxSuggestions={10}
                                />
                            </div>
                            <div className="search-input-wrapper">
                                <SearchableInput
                                    items={cityNames}
                                    onSearch={handleSearch6}
                                    label="plaats 6"
                                    inputId="city6"
                                    inputName="city6"
                                    maxSuggestions={10}
                                />
                            </div>
                        </div>
                        <div className="search-criteria-flex">
                            <div className="criteria-search-wrapper">
                                <label htmlFor="weatherSelection" className="weather-selection-container">
                                    Selecteer het weer:
                                </label>
                                <select
                                    id="weatherSelection"
                                    name="weather"
                                    value={selectedWeather}
                                    onChange={handleWeatherChange}>
                                    <option value="">-- Selecteer een optie --</option>
                                    {weatherCategories.map((category, index) => (
                                        <option key={`${index}-${category}`} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="criteria-search-wrapper">
                                <Input
                                    type="number"
                                    name="temperature"
                                    labelText="voorkeur temperatuur:"
                                    required={false}
                                    value={preferredTemp}
                                    handleChange={handleTempChange}/>
                            </div>
                            <div className="criteria-search-wrapper">
                                <Input
                                    type="number"
                                    name="weatherCriteria"
                                    labelText="voorkeur windkracht:"
                                    required={false}
                                    value={preferredWindSpeed}
                                    handleChange={handleWindChange}/>
                            </div>

                            </div>
                            <button type="submit" className="submit-button-flex">Ophalen zoekresultaten</button>
                    </form>
                </section>

                <section className="display-data-section">

                </section>
            </div>

        </>
    );
}

export default CurrentWeather;
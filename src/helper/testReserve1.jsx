import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.jsx';
import axios from 'axios';
import './Profile.css';
import SearchableInput from "../../components/searchableInput/SearchableInput.jsx";
import cities from "../../constants/cities.js";
// import invalidCityNamesCheck from "../../helper/invalidCityNamesCheck.js";
// import getLocalStorageCities from "../../helper/getLocalStorageCities.js";

function Profile() {
    const [profileData, setProfileData] = useState({});
    const { user } = useContext(AuthContext);
    const cityNames = cities.map(city => city.name);

    // const cityKeys = ["city1", "city2", "city3", "city4", "city5", "city6"];
    const [city1, setCity1] = useState("");
    const [city2, setCity2] = useState("");
    const [city3, setCity3] = useState("");
    const [city4, setCity4] = useState("");
    const [city5, setCity5] = useState("");
    const [city6, setCity6] = useState("");
    // const [city1Disabled, setCity1Disabled] = useState(true);
    // const [city2Disabled, setCity2Disabled] = useState(true);
    // const [city3Disabled, setCity3Disabled] = useState(true);
    // const [city4Disabled, setCity4Disabled] = useState(true);
    // const [city5Disabled, setCity5Disabled] = useState(true);
    // const [city6Disabled, setCity6Disabled] = useState(true);

    const handleSearch1 = (value) => setCity1(value);
    const handleSearch2 = (value) => setCity2(value);
    const handleSearch3 = (value) => setCity3(value);
    const handleSearch4 = (value) => setCity4(value);
    const handleSearch5 = (value) => setCity5(value);
    const handleSearch6 = (value) => setCity6(value);
    // function handleCitiesDisabled() {
    //   setCity1Disabled(false);
    //   setCity2Disabled(false);
    //   setCity3Disabled(false);
    //   setCity4Disabled(false);
    //   setCity5Disabled(false);
    //   setCity6Disabled(false);
    // }
    // const citiesObject = {
    //   city1: city1,
    //   city2: city2,
    //   city3: city3,
    //   city4: city4,
    //   city5: city5,
    //   city6: city6,
    // }
    // function handleButtonClicked(){
    //   localStorage.setItem( "city1", "Rotterdam" );
    //   localStorage.setItem( "city2", "Den Haag" );
    //   localStorage.setItem( "city3", "Leiden" );
    //   localStorage.setItem( "city4", "Dordrecht" );
    //   localStorage.setItem( "city5", "Zoetermeer" );
    //   localStorage.setItem( "city6", "Delft" );
    //
    //   console.log("object cities in localstorage", getLocalStorageCities(cityKeys));
    // }
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        const allCities = [
            city1,
            city2,
            city3,
            city4,
            city5,
            city6,
        ];
        console.log("All Search Terms:", allCities);
    }

    useEffect(() => {
        // we halen de pagina-content op in de mounting-cycle
        async function fetchProfileData() {
            // haal de token uit de Local Storage om in het GET-request te bewijzen dat we geauthoriseerd zijn
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get('http://localhost:3000/660/private-content', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfileData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        void fetchProfileData();
    }, [])

    return (
        <>
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                <p><strong>Gebruikersnaam:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </section>

            {/*Als er keys in ons object zitten hebben we data, en dan renderen we de content*/}
            {Object.keys(profileData).length > 0 &&
                <section>
                    <h2>Strikt geheime profiel-content</h2>
                    <h3>{profileData.title}</h3>
                    <p>{profileData.content}</p>
                </section>
            }
            <h2>Opslaan favoriete plaatsen</h2>
            <p>Hier komt de functionaliteit voor toevoegen, verwijderen en aanpassen van
                favoriete plaatsen die kan worden gebruikt voor de zoekfunctie.</p>

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
                                // initialValue={city1}
                                maxSuggestions={10}
                                // disabled={city1Disabled}
                            />
                        </div>
                        <div className="search-input-wrapper">
                            <SearchableInput
                                items={cityNames}
                                onSearch={handleSearch2}
                                label="plaats 2"
                                inputId="city2"
                                inputName="city2"
                                // initialValue={city2}
                                maxSuggestions={10}
                                // disabled={city2Disabled}
                            />
                        </div>
                        <div className="search-input-wrapper">
                            <SearchableInput
                                items={cityNames}
                                onSearch={handleSearch3}
                                label="plaats 3"
                                inputId="city3"
                                inputName="city3"
                                // initialValue={city3}
                                maxSuggestions={10}
                                // disabled={city3Disabled}
                            />
                        </div>
                        <div className="search-input-wrapper">
                            <SearchableInput
                                items={cityNames}
                                onSearch={handleSearch4}
                                label="plaats 4"
                                inputId="city4"
                                inputName="city4"
                                // initialValue={city4}
                                maxSuggestions={10}
                                // disabled={city4Disabled}
                            />
                        </div>
                        <div className="search-input-wrapper">
                            <SearchableInput
                                items={cityNames}
                                onSearch={handleSearch5}
                                label="plaats 5"
                                inputId="city5"
                                inputName="city5"
                                // initialValue={city5}
                                maxSuggestions={10}
                                // disabled={city5Disabled}
                            />
                        </div>
                        <div className="search-input-wrapper">
                            <SearchableInput
                                items={cityNames}
                                onSearch={handleSearch6}
                                label="plaats 6"
                                inputId="city6"
                                inputName="city6"
                                // initialValue={city6}
                                maxSuggestions={10}
                                // disabled={city6Disabled}
                            />
                        </div>
                    </div>
                    <div className="button-container-flex">
                        <button type="submit" className="submit-button-flex">Opslaan plaatsen</button>
                        <button type="button" className="updating-button-flex">Wijzigen plaatsen</button>
                    </div>
                </form>
            </section>
            <div className="link-container">
                <p>Terug naar de <Link to="/">Homepagina</Link></p>
            </div>
        </>
    );
}

export default Profile;
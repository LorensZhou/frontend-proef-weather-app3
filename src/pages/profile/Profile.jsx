import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.jsx';
import axios from 'axios';
import './Profile.css';
import SearchableInput from "../../components/searchableInput/SearchableInput.jsx";
import cities from "../../constants/cities.js";

function Profile() {
  const [profileData, setProfileData] = useState({});
  const { user } = useContext(AuthContext);

  const cityNames = cities.map((city) => city.name);

  const [city1, setCity1] = useState("");
  const [city2, setCity2] = useState("");
  const [city3, setCity3] = useState("");
  const [city4, setCity4] = useState("");
  const [city5, setCity5] = useState("");
  const [city6, setCity6] = useState("");

  const handleSearch1 = (value) => setCity1(value);
  const handleSearch2 = (value) => setCity2(value);
  const handleSearch3 = (value) => setCity3(value);
  const handleSearch4 = (value) => setCity4(value);
  const handleSearch5 = (value) => setCity5(value);
  const handleSearch6 = (value) => setCity6(value);

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
    // Do something with all the search terms (e.g., send to an API)
  };

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
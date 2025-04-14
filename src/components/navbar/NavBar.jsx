import { useContext, useRef, useEffect, useState } from 'react';
import logo from '../../assets/weather-icon.png';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.jsx';
import './NavBar.css';

function NavBar() {
    const { isAuth, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false); // Close the dropdown after navigation
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Weather App
            </h3>
          </span>
            </Link>

            {isAuth ?
                <div>
                    <button
                        type="button"
                        onClick={logout}
                    >
                        Log uit
                    </button>

                    <div style={{position: 'relative', display: 'inline-block'}}>
                        <button onClick={handleToggle}>
                            zoek menu
                        </button>
                        {isOpen && (
                            <div ref={dropdownRef} className="dropdown-menu">
                                <button
                                    type="button"
                                    onClick={() => handleNavigation('/currentWeather')}
                                >
                                    zoeken huidige weer
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleNavigation('/forecast')}
                                >
                                    zoeken weer voorspelling
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleNavigation('/cityPage')}
                                >
                                    zoeken op een stad/locatie
                                </button>
                            </div>
                        )}
                      </div>
                    </div>
                    :
                    <div>
                        <button
                            type="button"
                            onClick={() => navigate('/signin')}
                        >
                            Log in
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/signup')}
                        >
                            Registreren
                        </button>
                    </div>
                    }
                </nav>
                );
            }

            export default NavBar;
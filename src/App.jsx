import { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar.jsx';
import Profile from './pages/profile/Profile.jsx';
import Home from './pages/home/Home.jsx';
import SignIn from './pages/signin/SignIn.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import { AuthContext } from './context/AuthContext';
import './App.css';
import CurrentWeather from "./pages/currentWeather/CurrentWeather.jsx";
import Forecast from "./pages/forecast/Forecast.jsx";
import CitiesPage from "./pages/citiesPage/CitiesPage.jsx";
import CityDetailPage from "./pages/cityDetailPage/CityDetailPage.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";

function App() {
    const { isAuth } = useContext(AuthContext);

    return (
        <>
            <NavBar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/login"/>}/>
                    <Route path="/signin" element={<SignIn />}/>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path="/currentWeather" element={<CurrentWeather />}/>
                    <Route path="/forecast" element={<Forecast />}/>
                    <Route path="/cities" element={<CitiesPage />}/>
                    <Route path="/cities/:id" element={<CityDetailPage />}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
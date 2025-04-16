import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.jsx';
import axios from 'axios';
import './SignIn.css';
import Button from '../../components/button/Button.jsx';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, toggleError] = useState(false);
  const { login } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();
    toggleError(false);

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password,
      });
      // log het resultaat in de console
      console.log(response.data);

      // geef de JWT token aan de login-functie van de context mee
      if(response.status === 200) {
        //aanroep van login functie uit AuthContext
        login(response.data.accessToken);
      }

    } catch(e) {
      console.error(e);
      toggleError(true);
    }
  }

  return (
      <>
        <h1>Inloggen</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email-field">
            Emailadres:
            <input
                type="email"
                id="email-field"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label htmlFor="password-field">
            Wachtwoord:
            <input
                type="password"
                id="password-field"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {error && <p className="error">Combinatie van emailadres en wachtwoord is onjuist</p>}

          <Button
              type="submit"
              variant="secundary"
             >
            Inloggen
          </Button>
        </form>

        <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
      </>
  );
}

export default SignIn;
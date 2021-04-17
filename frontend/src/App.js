import './App.css';
import AuthenticationButton  from './components/authentication-button'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom"

function App() {
  const { user } = useAuth0();
  return(
    <div>
      <div className="App-header">
        <Link  to="/one">One</Link>
        <Link to="/two">Two</Link>
        <Link to="/three">Three</Link>
        <AuthenticationButton />
      </div>

      <div className="App-content">
        <div className="item">
          Template Page.
          This page does not need you to be signed in, but the links do.
          This is built with create-react-app, and auth0 and redux.
          If you are logged in, you should be able to see your user details:
        </div>
        <div className="item box">
        <pre>
        {JSON.stringify(user,null,2)}
        </pre>
          </div>
      </div>
    </div>
    );
}

export default App;

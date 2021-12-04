import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return isAuthenticated ? (
        <div>
            {console.log(user)}
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <LogoutButton />
        </div>
    ) : (
        <div>
            <LoginButton />
        </div>
    );
}

export default App;

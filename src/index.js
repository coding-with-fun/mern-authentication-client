import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={process.env.REACT_APP_AUTH0_REDIRECT_URI}
    >
        <App />
    </Auth0Provider>,
    document.getElementById("root")
);

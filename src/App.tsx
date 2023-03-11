import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { PublicClientApplication } from "@azure/msal-browser";
import {
  AuthenticatedTemplate,
  MsalProvider,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { maslAuthConfig } from "./authConfig";

const msalInstance = new PublicClientApplication(maslAuthConfig);
export const scopes = ["user.read"];

function App() {
  const login = () => {
    msalInstance
      .handleRedirectPromise()
      .then((response) => {
        // If response is non-null, it means page is returning from AAD with a successful response
        if (response) {
          console.log(response);
          localStorage.setItem("accessToken", response.accessToken);
        } else {
          // Otherwise, invoke login
          msalInstance.loginRedirect({
            scopes,
          });
        }
      })
      .catch((error) => {
        const errorData: string = `errorMessage: ${error.errorCode}
                                   message: ${error.errorMessage}
                                   errorCode: ${error.stack}`;
        console.log(errorData);
      });
  };
  return (
    <MsalProvider instance={msalInstance}>
      <AuthenticatedTemplate>
        <Home />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        {/* Uncomment the below to directly redirect the user to the microsoft login page if the user is not authenticated */}
        {/* {
          (() => {
            login();
            return <></>;
          }) as unknown as React.ReactNode
        } */}
        {/* Uncomment the below to show a login button if the user is not authenticated */}
        <button type="button" onClick={login} className="login-button">
          Login
        </button>
      </UnauthenticatedTemplate>
    </MsalProvider>
  );
}

export default App;

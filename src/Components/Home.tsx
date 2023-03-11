import React from "react";
import logo from "../logo.svg";
import { useMsal } from "@azure/msal-react";

export default function Home() {
  const { instance, accounts } = useMsal();
  const logout = () => {
    instance.logoutRedirect();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome {accounts[0].name}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={logout}>Logout</button>
      </header>
    </div>
  );
}

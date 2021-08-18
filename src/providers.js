import React from "react";
import { Reset } from "styled-reset";
import App from "./App";
import GithubProvider from "./providers/github-provider";

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <Reset />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;

import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "@chakra-ui/core";
import { Global, css } from "@emotion/core";
import "focus-visible/dist/focus-visible";

import App from "./app";

import "./index.scss";

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

ReactDOM.render(
  <ThemeProvider>
    <Global styles={GlobalStyles} />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

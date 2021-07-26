import React from "react";
import { BrowserRouter } from "react-router-dom";

import Route from "../src/routes";
import GlobalStyle from "../src/style/global";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Route />
      </BrowserRouter>
    </>
  );
}

export default App;

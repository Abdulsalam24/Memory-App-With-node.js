import React from "react";
import Header from "./components/Header";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "./components/styles/Global";
import Main from "./components/Main";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";

const App = () => {
  const theme = {
    color: {
      text: "#2E2B3F",
      bg: "#FFFFFF",
      primary: "#575989",
      secoundary: "#07043B",
      button: "#2F65F9",
    },
    media: "700px",
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Main />
        <PreFooter />
        <Footer />
      </>
    </ThemeProvider>
  );
};


export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

import { HomeClients } from "./pages/HomeClients";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HomeClients />
    </ThemeProvider>
  </React.StrictMode>,
)

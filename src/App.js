import React from 'react';
// import logo from './logo.svg';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import styled from "styled-components";

import Color from "./utils/Color"
import QAPanels from "./QAPanels";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
 

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#6ec6ff",
      main: "#2196f3",
      dark: "#0069c0",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#ffffff"
    }
  }
});

const Wrapper = styled.div`
  background: ${Color.lightGray};
  height: 100vh;
`;

const ToolbarTitle = styled.h5`
  color: ${Color.white};
  font-size: 1.25rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: 0em;
  margin: 0;
`;

const StyledQAPanels = styled(QAPanels)`
  padding: 10px;
`;

function App() {
  const items = [
    {
      request:
        "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque",
      requestPD:
        "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque",
      answer:
        "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque",
      },
    {
      request:
        "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque",
      requestPD:
        "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque",
      answer:
        "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque",
    },
    {
      request:
        "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque",
      requestPD:
        "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque",
      answer:
        "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque",
    },
    {
      request:
        "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque",
      requestPD:
        "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque",
      answer:
        "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque",
    },
    {
      request:
        "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque",
      requestPD:
        null,
      answer:
        null
    }
  ];
  return (
    <Wrapper>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <ToolbarTitle>九工大アプリ: 回答</ToolbarTitle>
          </Toolbar>
        </AppBar>
        <StyledQAPanels items={items} />
      </MuiThemeProvider>
    </Wrapper>
  );
}

export default App;

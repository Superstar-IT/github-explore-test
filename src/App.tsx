import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import materialTheme from "./contants/theme";
import Home from "./screens/Home";
import UserProvider from "./contexts/userContext";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={materialTheme}>
        <UserProvider>
          <div className="App">
            <Home />
          </div>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

import React, {useState} from 'react';
//import {Button} from 'components/common';
import {createGlobalStyle,ThemeProvider} from 'styled-components';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Login from 'components/pages/Login';
import Home from 'components/pages/Home';
import LightTheme from 'components/themes/light';
import DarkTheme from 'components/themes/dark';



const GlobalStyle = createGlobalStyle `
  body{
    background: white;
    min-width: 100vh;
    margin: 0;
    color: black;
    font-family: 'kaushan Script'
  }
`;


function App() {
  const [theme, setTheme] = useState (LightTheme);

  return (
    <ThemeProvider theme={{...theme, setTheme: () => {
        setTheme (s => s.id === 'light' ? DarkTheme : LightTheme)
    }}}>

      <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route path="/login">
                  <Login />
            </Route>

            <Route path="/">
                  <Home />
            </Route>
          </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { ThemeProvider } from './contexts/theme-context.jsx';
import { AppRoutes } from './components/app-routes/app-routes.jsx';
import GlobalStyle from './styles/GlobalStyles.js';


function App() {

    return (
        <ThemeProvider>
          <GlobalStyle/>
          <AppRoutes/>
        </ThemeProvider>
    )
}

export default App;

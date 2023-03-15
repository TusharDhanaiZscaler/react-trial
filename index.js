import React from "react";
import {createRoot} from 'react-dom/client'
import App from './src/App.js'
import { ThemeContext, themes } from "./src/theme-context.js";

const container = document.getElementById('root');
const root = createRoot(container);

const ThemeProvider = ThemeContext.Provider;

root.render(
<ThemeProvider value={themes.dark}>
    <App/>
</ThemeProvider>
)
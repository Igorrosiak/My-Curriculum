import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { themes } from './utils/theme';
import { Controller } from "./utils/controller.jsx"
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ThemeProvider theme={themes}>
      <Controller />
    </ThemeProvider>
  </>
);

reportWebVitals();
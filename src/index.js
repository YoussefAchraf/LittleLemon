import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header,Footer } from "./layout/Layout";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <HelmetProvider>
        <Header />
        <App />
        <Footer />
      </HelmetProvider>
    </BrowserRouter>
  </>
);
reportWebVitals();

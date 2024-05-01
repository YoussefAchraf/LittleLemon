import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header,Footer } from "./layout/Layout";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { OrderProvider } from './pages/context/OrderContext';
import './index.css';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <OrderProvider>
    <BrowserRouter>
      <HelmetProvider>
        <Header />
        <App />
        <Footer />
      </HelmetProvider>
    </BrowserRouter>
    </OrderProvider>
  </>
);
reportWebVitals();

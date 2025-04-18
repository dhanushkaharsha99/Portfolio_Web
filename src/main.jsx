import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollUp from "./components/ScrollUp/ScrollUp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
    <ScrollUp />
  </React.StrictMode>
);
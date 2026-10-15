import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './frontend/components/Home';
import Nav from './frontend/components/Navbar';
import Appp from './frontend/components/Appp';
import Footer from './frontend/components/Footer';
import Courses from './frontend/components/Courses';
import Contact from './frontend/components/Contact';
import About from './frontend/components/About';
import Testimonial from './frontend/components/Testimonial';
import FAQ from './frontend/components/FAQs';
import Team from './frontend/components/Team';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Appp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

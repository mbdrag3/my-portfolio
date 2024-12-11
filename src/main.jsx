import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import Home from './components/pages/home.jsx';
import Contact from './components/pages/Contact.jsx';
import About from './components/pages/AboutMe.jsx';
import Resume from './components/pages/Resume.jsx';
import Projects from './components/pages/Projects.jsx';
import Recommendations from './components/pages/recommendations.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Intro from './components/pages/intro.jsx';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/app/*" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="recommendations" element={<Recommendations />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

// Main Render with BrowserRouter and AppRouter
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

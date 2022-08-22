import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import NavBar from "./NavBar";
import './App.css';
import NotFounfPage from "./pages/NotFoundage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="*" element={ <NotFounfPage/> }/>
            <Route path="/" element={ <HomePage/> }/>
            <Route path="/about" element={ <AboutPage/> }/>
            <Route path="/articles" element={ <ArticlesListPage/> }/>
            <Route path="/article/:name" element={ <ArticlePage /> }/>
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;

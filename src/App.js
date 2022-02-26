import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Movies from "./Components/Movies/Movies";
import MovieCard from "./Components/MoviesDetail/MovieCard";
import Home from "./Components/Pages/Home";
import Search from "./Components/Pages/Search";
import "./App.scss";
import './grid.scss';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:category" element={<Movies />} />
          <Route path='/:category/:idMovie' element={<MovieCard />} />
          <Route path="/:category/type/:type/:idtype" element={<Movies />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

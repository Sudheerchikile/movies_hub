import React from 'react';
import { BrowserRouter as Router,Navigate, Route, Routes } from 'react-router-dom';


import Home from './Pages/Home';
// import Header from './components/Header';
import DetailMovie from './components/DetailedMoviePage';
import SearchItem from './Pages/SearchPage';
import PageNotFound from './Pages/PageNotFound';
 import TopRated from './Pages/TopRated';
import Upcoming from './Pages/Upcoming';
import AccountDetailsSection from './Pages/AccountDetails';

const App = () => (
  <Router>
   
    <Routes>
      <Route path="/" element={<Home/>} />
    
    
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/top-rated" element={<TopRated />} />
      <Route path="/search" element={<SearchItem/>}/>
      <Route path="/account" element={<AccountDetailsSection/>}/>
      <Route path="movies/:id" element={<DetailMovie />}></Route>
      <Route path="/not-found" element={<PageNotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  </Router>
);

export default App;

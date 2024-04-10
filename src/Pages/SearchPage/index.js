import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import Header from '../../components/Header';

const SearchItem = () => {
    const [searchInput,setSearchInput]=useState("")
    const [searchedData,setSearchedData]=useState([])

    const fetchMovies = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${"a6f3d24596a7dc2b7098de842287e440"}&language=en-US&page=1`);
       
          setSearchedData(data.results);
      };
      console.log(searchedData);
    
      
      
    
      useEffect(() => {
        window.scroll(0, 0);
        fetchMovies();
       
      }, [searchInput]);

  return (
    <div>
     <Header  setSearchInput={setSearchInput} fetchMovies={fetchMovies}/>
    </div>
  )
}

export default SearchItem

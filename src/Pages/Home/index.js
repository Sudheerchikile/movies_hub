// import axios from "axios";

import { useEffect, useState } from "react";
import MovieCardItem from "../../components/MovieCardItem";
import Pagination from "../../components/Pagination";
import "./index.css"
import Header from "../../components/Header";

const Home = () => {
 
 
  const [page, setPage] = useState(1);
  const [searchInput,setSearchInput]=useState("")
 const [content, setContent] = useState([]);
 const [numOfPages,setNumOfPages] = useState();
  
 let Url= `https://api.themoviedb.org/3/movie/popular?api_key=${"a6f3d24596a7dc2b7098de842287e440"}&language=en-US&page=${page}`;
 if (searchInput.length>0){
  Url=`https://api.themoviedb.org/3/search/movie?api_key=${"a6f3d24596a7dc2b7098de842287e440"}&language=en-US&query=${searchInput}&page=1`}


  const fetchMovies = async () => {
    const data  = await fetch(Url);

      const response=await data.json()
   
    console.log(response.results)
    setContent(response.results);
    setNumOfPages(response.total_pages);

  
  };
  

  
  

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
   
  }, [page]);
 

  return (
    <div>
      <Header setSearchInput={setSearchInput}   fetchMovies={fetchMovies}/>
      
      <span className="pageTitle">Popular Movies</span>
      
      <ul className="all-movies-con">
        {content &&
          content.map((c) => (
            <MovieCardItem
              key={c.id}
              details={c}
            />
          ))}
      </ul>
      {numOfPages > 1 && (
        <Pagination setPage={setPage} numOfPages={numOfPages} page={page} data={content} />
      )}
     
      
    </div>
  );
};

export default Home;
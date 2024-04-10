import axios from "axios";
import { useEffect, useState } from "react";
import MovieCardItem from "../../components/MovieCardItem";
import Pagination from "../../components/Pagination";
import Header from "../../components/Header";


// import SingleContent from "../../components/SingleContent/SingleContent";

// import CustomPagination from "../../components/Pagination/CustomPagination";

const UpComing = () => {
 
 
  const [page, setPage] = useState(1);
  const [searchInput,setSearchInput]=useState("")
 const [content, setContent] = useState([]);
 const [numOfPages, setNumOfPages] = useState();
  
  // console.log(selectedGenres);

  let Url=`https://api.themoviedb.org/3/movie/upcoming?api_key=${"a6f3d24596a7dc2b7098de842287e440"}&language=en-US&page=${page}`
  if (searchInput.length>0){
    Url=`https://api.themoviedb.org/3/search/movie?api_key=${"a6f3d24596a7dc2b7098de842287e440"}&language=en-US&query=${searchInput}&page=1`}

  console.log(searchInput)

  const fetchMovies = async () => {
    const { data } = await axios.get(Url);
    console.log(data)
    console.log("upcoming")
    setContent(data.results);
  setNumOfPages(data.total_pages);
  };
  

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
   
  }, [page]);
 

  return (
    <div>
      <Header  setSearchInput={setSearchInput} fetchMovies={fetchMovies}/>
      <span className="pageTitle">Upcoming Movies</span>
      
      <div className="all-movies-con">
        {content &&
          content.map((c) => (
            <MovieCardItem
              key={c.id}
              details={c}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <Pagination  numOfPages={numOfPages} setPage={setPage} page={page} data={content} />
      )}
     
      
    </div>
  );
};

export default UpComing;
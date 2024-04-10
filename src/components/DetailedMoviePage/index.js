import React, {useEffect, useState} from "react"
import "./index.css"
import { useParams } from "react-router-dom"
import Header from "../Header"
import ImageSlider from "../ImagesSlider"

const DetailMovie = () => {
   
    
    const [cast, setCast] = useState([])
    const [searchInput,setSearchInput]=useState("")
    const [currentMovieDetail,setMovieDetails]=useState()
    const {id}=useParams()
    useEffect(() => {
        getCastData()
        getMovieData()
        window.scrollTo(0,0)
    }, [])

    let Url=`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${"a6f3d24596a7dc2b7098de842287e440"}&language=en-US`

    if (searchInput.length>0){
        Url=`https://api.themoviedb.org/3/search/movie?api_key=${"a6f3d24596a7dc2b7098de842287e440"}&language=en-US&query=${searchInput}&page=1`}
      
      

    const getCastData = async () => {
      const data=await  fetch(Url)
       const response=await data.json();
       

       setCast(response.cast)

       
       
    }
    const getMovieData = async () => {
        const data=await  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${"a6f3d24596a7dc2b7098de842287e440"}&language=en-US`)
         const response=await data.json();
      
         setMovieDetails(response)
         
         
      }

    console.log(cast)
    return (
        
        <div>
            <Header fetchMovies={getMovieData}  setSearchInput={setSearchInput}/>
       
        <div className="movie">
            
        <div className="movie__intro">
            <img className="movie__backdrop" alt="movie-backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
        </div>
        <div className="movie__detail">
            <div className="movie__detailLeft">
                <div className="movie__posterBox">
                    <img className="movie__poster" alt="movie-poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                </div>
            </div>
            <div className="movie__detailRight">
                <div className="movie__detailRightTop">
                    <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                    <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                    <div className="movie__rating">
                        {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                        <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                    </div>  
                    <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                    <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                    <div className="movie__genres">
                        {
                            currentMovieDetail && currentMovieDetail.genres
                            ? 
                            currentMovieDetail.genres.map(genre => (
                                <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                            )) 
                            : 
                            ""
                        }
                    </div>
                </div>
             
                
            </div>
        </div>
       
        </div>
        <h1 className="cast">Cast</h1>
        <div className="cast-container">
            <ImageSlider data={cast} />

        </div>
       
        </div>
    )
}

export default DetailMovie
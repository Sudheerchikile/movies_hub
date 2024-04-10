 import {Link} from 'react-router-dom'
import "./index.css"

const MovieCardItem =({details})=> {
  const {data}=details
  const {title, id,vote_average,  poster_path} = details
  console.log(poster_path)
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    
    <li className="movie-item">
      <Link to={`/movies/${id}`}>
    <img src={imageUrl} alt={title} className="movie-item-image" />
    <span className="title1">{title}</span>
    <br/>
    
    <span className="rating">Rating :{vote_average}</span>
    
    
    </Link>
   
  </li>
  )
}

export default MovieCardItem

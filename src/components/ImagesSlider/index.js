import {Link} from 'react-router-dom'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'




const ImageSlider = props => {
    
    const settings = {
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 5,
        
        infinite: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
  }
  const {data} = props
  console.log(data)
  
 

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {data.map(eachVideo => (
           
          <Link to={`/movies/${eachVideo.id}`} key={eachVideo.id}>
            <img
              className="thumbnail"
              src={`https://image.tmdb.org/t/p/w500${eachVideo.profile_path}`}
              alt={eachVideo.original_name}
            />
            
            

            
          </Link>
         
        ))}
       
      </Slider>
     
    </div>
  )
}

export default ImageSlider
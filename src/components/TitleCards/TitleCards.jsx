import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { NavLink } from 'react-router-dom'
const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWIzMDAyMGFjNDBlYTM2MGFkNWMzN2Q2YzljMTAyMiIsInN1YiI6IjY2NWQ2ZmI3NmE2Yzk0MGNkNjkwN2RjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xvRci2m6s05KTtsuXFh9rHfUvQveBxSeSRA7hqZfR5U'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])
  return (
    <div className='title-cards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className='card-list' ref={cardsRef}>
        {
          apiData.map((card, index) => {
            return (
              <NavLink to={`/player/${card.id}`} className='card' key={index}>
                <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt='card-img'></img>
                <p>{card.original_title}</p>
              </NavLink>
            )
          })
        }
      </div>
    </div>
  )
}

export default TitleCards
import React,{useState, useEffect} from 'react'
import {getMovie} from '../tmdb';

import '../CSS/MoviesRow.css'

function Movies({title, path}) {
    const [movieList, setMovieList] = useState([]);
    const [scrollX, setScrollX] = useState(0);

    const fetchMovies = async (_path) => {
        try{
            const data = await getMovie(path);
            setMovieList(data?.results);
        }catch(err){
            console.log("error fetching movie", err);
        }
    }

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0)
        {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = movieList.length * 250;
        if((window.innerWidth - listWidth) > x)
        {
            x = (window.innerWidth - listWidth) - 500;    
        }
        setScrollX(x);
    }

    useEffect(() => {
        fetchMovies(path);
    }, [path])
    
    return (
        <div className='Movies'>
            <h2>{title}</h2>    

            <div className='container'>
                <label onClick={handleLeftArrow} className='label-left'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </label>
                <label onClick={handleRightArrow} className='label-right'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </label>

                <div className='card-movies' id='card' style={{marginLeft: scrollX}}>
                    {movieList?.map((movie) => {
                        return (
                            <div key={movie.id} className="container-movie">
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                            </div>
                        )
                    })}
                </div> 
            </div>
            
            {movieList?.length <= 0 &&
                <div className='loading'>
                    <img src='https://assets.wired.com/photos/w_2000/wp-content/uploads/2016/01/Netflix_LoadTime.gif' alt='loading'></img>
                </div>
            }
        </div>
    )
}

export default Movies
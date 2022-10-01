import React, {useState, useEffect} from 'react'
import categorias, {getMovie} from '../tmdb'

import '../CSS/PreviewMovie.css'

const PreviewMovie = () => {
    const [movie, setMovie] = useState({});

    const fetchRandom = async () => {
        try{
            let preview = await getMovie(categorias.find(categorias=>categorias.name === 'originals').path);

            
            const randomIndex = Math.floor(Math.random() * preview?.results.length);

            setMovie(preview?.results[randomIndex]);
            console.log(preview?.results[randomIndex]);
        }catch(err){
            console.log("Preview Movie: " + err);
        }
    }

    useEffect(() => {
        fetchRandom();
    }, []);

    const getDate = (movie) => {
        let year = new Date(movie?.first_air_date);

        return year.getFullYear();
    }

    return (
        <div className='Preview'>
            <div className='preview-container' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path}`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className='preview-vertical'>
                        <div className='preview-horizontal'></div>
                    </div>
                    <div className='content'>
                        <div className='preview-title'>
                            <h1>{movie?.name}</h1>
                        </div>
                        <div className='preview-info'>
                            <div>
                                <span>{movie?.vote_average} pontos</span>
                            </div>
                            <div>
                                <p>{getDate(movie)}</p>
                            </div>
                        </div>
                        <div className='preview-desc'>
                            <p>{movie?.overview}</p>
                        </div>
                        <div className='preview-buttons'>
                            <div className='buttons-play'>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                        <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p>
                                        Assistir
                                    </p>
                                </div>
                            </div>
                            <div className='buttons-info'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p>
                                        Mais informações
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default PreviewMovie;
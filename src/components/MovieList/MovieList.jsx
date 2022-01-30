import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    // getting specific details for each movie
    // take user to details page
    const handleImage = (movie) => {
        dispatch({
            type: 'SET_MOVIE_DETAILS',
            payload: movie
        })
        history.push('/details')
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}
                            onClick={()=>handleImage (movie)}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;
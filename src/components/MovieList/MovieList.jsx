import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './MovieList.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

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
        dispatch({ type: 'FETCH_MOVIES' }),
        dispatch({type: 'FETCH_GENRES'});
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Card key={movie.id} sx={{ maxWidth: 150 }} onClick={()=>handleImage (movie)}>
                            <CardMedia
                              component="img"
                              image={movie.poster}
                              alt={movie.title}
                            />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="div">
                            <h3>{movie.title}</h3>
                            </Typography>
                        </CardContent>
                        </Card>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;
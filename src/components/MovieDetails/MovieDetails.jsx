import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import Button from '@mui/material/Button';


function MovieDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const movieDetails = useSelector (store => store.movieDetails);
    const genres = useSelector (store => store.genres)

    useEffect(() => {
        dispatch({
            type: 'FETCH_GENRES',
            payload: movieDetails.id
        })
    }, []);

    const handleGoBack =() =>{
        history.push('/');
    }

    return (
        <>
        <div className="container">
            <h1>Movie Details</h1>
            <h3>{movieDetails.title}</h3>
            <img src={movieDetails.poster} />
            <h4>Move Description</h4>
            <p>{movieDetails.description}</p><br></br>
            <h3>Movie Genres</h3>
            <table className="table">
                <tbody>
                {genres.map(genre => (
            <tr key={genre}>
                <td>{movieDetails.genre}</td>
            </tr>
        ))}
                </tbody>
            </table>

        </div>
        <Button variant="contained" disableElevation onClick={handleGoBack}>
            Home Page
        </Button>
        </>
    )
    
}

export default MovieDetails
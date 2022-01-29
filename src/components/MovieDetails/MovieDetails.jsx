import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const movieDetails = useSelector (store => store.movieDetails);
    console.log('check out movieDetails', movieDetails[0]);

    const handleGoBack =() =>{
        history.push('/');
    }

    return (
        <>
        {movieDetails.map(movie => (
            <div key={movie.id}>
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title} />
                <p>Genres: {movie.genres.join}</p>
                <p>Descriptions: {movie.description}</p>
            </div>
        ))}
        <button onClick={handleGoBack}>Home Page</button>
        </>
    )
    
}

export default MovieDetails
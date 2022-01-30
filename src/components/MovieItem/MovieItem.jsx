import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieItem({movie}) {
    const dispatch = useDispatch();
    const history = useHistory();

    // getting specific details for each movie and take user to details page
    const handleImage = () => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: movie.id
        })
        history.push('/movieDetails')
    }
    return(
        <div>
            <img width="200" height="300" onClick={handleImage} src={movie.poster} alt={movie.title} />

        </div>
    )
}

export default MovieItem
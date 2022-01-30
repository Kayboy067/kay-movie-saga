const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  console.log('get genre in router', req.query);

  const selectQuery = `
  SELECT
    movies.title,
    array_agg(genres.name)
  FROM movies
  JOIN movies_genres
    ON movies_genres.movies.id = movies.id
  JOIN genres
    ON genres.id = movies_genres.genres_id
  WHERE movies.id = $1
  GROUP BY movies.id, movies.title, movies.poster, movies.description;`;

  let queryParams = [
    req.query.movieID
  ];

  pool.query(selectQuery, queryParams)
  .then(results => {
    console.log('results', results);
    res.send(results.rows);
  })

  .catch(error => {
    console.error('get movie details error', error);
  res.sendStatus(500)
  })
});

module.exports = router;
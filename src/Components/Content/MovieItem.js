import React from 'react';
import { Link } from 'react-router-dom';

function MovieItem(props) {
    const { imageUrl, movie, movieRef, category } = props
    const link = `/${category}/${movie.id}`;

    return (

        <Link to={link}
            className="movie__item"
            ref={movieRef}
            draggable="false"
        >
            <img
                className="movie__img"
                src={imageUrl}
                alt=""
                draggable="false"
            />
            <div className="movie__name">
                {movie.title || movie.name}
            </div>
        </Link>

    );
}

export default MovieItem;
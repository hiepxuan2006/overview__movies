import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCast, getMovieById } from "../Store/Action/MoviesAction";
import "./MovieCard.scss";

function MovieCard(props) {
  const slug = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.infoMovies.MovieById);
  const casts = useSelector((state) => state.infoMovies.Cast);
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getMovieById(slug.category, slug.idMovie));
    dispatch(getCast(slug.category, slug.idMovie));
  }, [dispatch, slug.idMovie]);
  console.log(movie);
  const handleTypeMovie = (genre) => {
    navigate(`/movie/type/${genre.name}/${genre.id}`)
  }
  return (
    <div className="movie">
      {movie && (
        <div className="movie__content">
          <div
            className="movie__bg"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path || null
                })`,
            }}
          ></div>
          <div className="movie__info">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.poster_path || null
                }`}
              alt=""
            />
            <div className="movie__desc">
              <h1 className="movie__name">{movie.name || movie.title}</h1>
              <span className="movie__release">
                Release:
                {movie && moment(movie.release_date).format("DD/MM/YYYY")}
              </span>
              <p className="movie__overview">{movie.overview}</p>
              <div className="movie__genres">
                {movie.genres &&
                  movie.genres.slice(0, 5).map((genre, i) => (
                    <span onClick={() => handleTypeMovie(genre)} className="genres__item" key={i}>
                      {genre.name}
                    </span>
                  ))}
              </div>
              <div className="movie__cast">
                <span>Casts:</span>
                <div className="cast__list">
                  {casts &&
                    casts.slice(0, 5).map((cast, i) => (
                      <div key={i} className="cast__item">
                        <img
                          src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                          alt=""
                        />
                        <div className="cast__name">{cast.name}</div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default MovieCard;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getsearchMovie, setMoviesDetail } from "../Store/Action/MoviesAction";
import "./Search.scss";
const moviesList = [
  "https://image.tmdb.org/t/p/w500/xByXRGWUzCHdiENxBH2urvsVAFm.jpg",
  "https://image.tmdb.org/t/p/w500/vM9gdUBvSKRasOjBarZimJEfN3H.jpg",
  "https://image.tmdb.org/t/p/w500/xByXRGWUzCHdiENxBH2urvsVAFm.jpg",
  "https://image.tmdb.org/t/p/w500/vM9gdUBvSKRasOjBarZimJEfN3H.jpg",
  "https://image.tmdb.org/t/p/w500/xByXRGWUzCHdiENxBH2urvsVAFm.jpg",
  "https://image.tmdb.org/t/p/w500/vM9gdUBvSKRasOjBarZimJEfN3H.jpg",
];
const useQuery = () => new URLSearchParams(useLocation().search)
function SearchMovies(props) {
  const { SearchMovies } = useSelector(state => state.infoMovies)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const keywords = useQuery().get('keywords')
  const handleCardMovie = (movie) => {
    dispatch(setMoviesDetail(movie))
    navigate(`/movie/${movie.id}`)
  }
  useEffect(() => {

    dispatch(getsearchMovie(keywords))
  }, [dispatch, keywords])
  return (
    <div className="grid search">
      {SearchMovies && SearchMovies.length > 0 ? (
        <div className="row search__content">
          {
            SearchMovies.map((movie, index) => {
              var imageUrl = ''
              if (movie.backdrop !== null && movie.media_type !== 'person') {
                imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie.poster_path}`
                return (
                  <div style={{ marginTop: "40px" }}
                    key={index}
                    onClick={() => handleCardMovie(movie)}
                    className="col l-2 m-6 c-12">
                    <div className="search__item">
                      <img src={imageUrl} alt="" />
                      <span>{movie.title || movie.name}</span>
                    </div>
                  </div>)
              }
            })}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            marginTop: "100px",
          }}
        >
          <h1>No Movies</h1>
        </div>
      )}
    </div>
  );
}

export default SearchMovies;

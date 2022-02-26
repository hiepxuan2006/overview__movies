import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMoviesList, getTypeMovies } from "../Store/Action/MoviesAction";
import "./Movies.scss";

function Movies(props) {
  let slug = useParams();
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState();
  const [totalPage, setTotalPage] = useState();
  const API_KEY = '1987b30a756448cfc2e379cb85b05558'
  const BASE_URL = 'https://api.themoviedb.org/3'
  const dispatch = useDispatch();
  const MoviesList = useSelector((state) => state.infoMovies.MoviesList);
  const MoviesType = useSelector((state) => state.infoMovies.MoviesType);
  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};
      if (slug.type !== null) {
        response = await axios.get(`${BASE_URL}/discover/${slug.category}?api_key=${API_KEY}&page=${slug.idtype}`)

        // dispatch(getTypeMovies(slug.category, slug.idtype))
        setMovies(response.data.results)
      } else {
        response = await axios.get(`${BASE_URL}/${slug.category}/popular?api_key=${API_KEY}&page=${params}`)

        setMovies(response.data.results);
        setTotalPage(response.data.results.total_pages);
      }
    }
    getList();

  }, [dispatch, slug.category, slug.type, slug.idtype]);
  const handleAddPage = () => {
    const params =
      page + 1
    console.log(params);
    dispatch(getMoviesList(slug.category, params));
    setMovies([...movies, ...MoviesList]);
    setPage(page + 1);
  };
  return (
    <div className="home__content">
      <div className="grid wide">
        <div className="row">
          {movies &&
            movies.map((item, i) => (
              <div className="col l-2" key={i}>
                <Link to={`/movie/${item.id}`} className="item">
                  <img
                    className="item__img"
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt=""
                  />
                  <div className="item__name">{item.name || item.title}</div>
                </Link>
              </div>
            ))}
        </div>

        {
          (slug.type) ?
            (
              null
            )
            : (<div className="button">
              <p onClick={handleAddPage}>View More</p>
            </div>)
        }
      </div >
    </div >
  );
}

export default Movies;

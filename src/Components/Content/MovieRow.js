import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SmoothHorizontalScrolling } from "../utils/index";
import MovieItem from "./MovieItem";
import "./MoviewRow.scss";
function MovieRow(props) {
  const { movies, title, isNetflix, category } = props;
  const sliderRef = useRef();
  const movieRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const dispatch = useDispatch();

  const handleScrollPrev = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  const handleScrollNext = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  useEffect(() => {
    if (isDrag) {
      if (dragDown > dragMove) handleScrollNext();
      if (dragDown < dragMove) handleScrollPrev();
    }
  }, [dragDown, dragMove, isDrag]);
  // const onDragStart = (e) => {
  //   setIsDrag(true);
  //   setDragDown(e.screenX);
  // };
  // const onDragEnd = (e) => {
  //   setIsDrag(false);
  // };
  // const onDragEnter = (e) => {
  //   setDragMove(e.screenX);
  // };
  const navigate = useNavigate()
  const handleViewmore = () => { navigate(`/${category}`) }
  return (
    <div className="movie__content" >
      <div className="movie__header">
        <h1 className="movie__heading">{title}</h1>
        <button onClick={handleViewmore}>view More</button>
      </div>
      <div>
        <div
          className="movie__slider"
          ref={sliderRef}
          draggable="true"
        // onDragStart={onDragStart}
        // onDragEnd={onDragEnd}
        // onDragEnter={onDragEnter}
        >
          {movies &&
            movies.length > 0 &&
            movies.map((movie, index) => {
              if (movie.poster_path && movie.backdrop_path !== null) {
                let imageUrl = isNetflix
                  ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                  : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
                return (
                  <MovieItem category={category} key={index} movieRef={movieRef} imageUrl={imageUrl} index={index} movie={movie} />
                );
              }
            })}
        </div>
      </div>
      <div
        className={`btn__prev ${isNetflix && "isNetflix"}`}
        onClick={handleScrollPrev}
      >
        <FiChevronLeft />
      </div>
      <div
        className={`btn__next ${isNetflix && "isNetflix"}`}
        onClick={handleScrollNext}
      >
        <FiChevronRight />
      </div>
    </div>
  );
}

export default MovieRow;

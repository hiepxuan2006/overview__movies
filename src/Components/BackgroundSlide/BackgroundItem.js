import axios from "axios";
import React, { Fragment, useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ShowContext } from "./BackgroundSlide";

function BackgroundItem(props) {
  const { item, background, className } = props;
  const navigate = useNavigate()
  const showContext = useContext(ShowContext)
  const setModalActive = async () => {


  };
  const dispatch = useDispatch()
  const handleMovieName = () => {
    navigate(`/movie/${item.id}`)
  }


  return (
    <Fragment>
      <div className={`intro__item  ${className}`}>
        <div className="intro__info">
          <div className="intro__desc">
            <h2 className="title">{item.title}</h2>
            <div className="overview">{item.overview}</div>
            <div className="btns">
              <button onClick={handleMovieName} className="btn__now">Watch now</button>
              <button onClick={setModalActive}>Watch trailer</button>
            </div>
          </div>
          <div className="info__img">
            <img src={`${background}`} alt="" />
          </div>
        </div>

        <img
          className="intro__img"
          src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
          alt=""
        />
      </div>
    </Fragment>
  );
}

export default BackgroundItem;

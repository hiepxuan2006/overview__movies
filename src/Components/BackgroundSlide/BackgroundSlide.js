import React, { createContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getBackground } from "../Store/Action/MoviesAction";
import BackgroundItem from "./BackgroundItem";
import "./BackgroundSlide.scss";
import TrailerView from "./TrailerView/TrailerView";
export const ShowContext = createContext()
function BackgroundSlide(props) {
  SwiperCore.use([Autoplay]);
  const dispatch = useDispatch();
  const BackgroundMovie = useSelector((state) => state.infoMovies.Background);
  useEffect(() => {
    dispatch(getBackground());
  }, [dispatch]);
  const params = {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
    },
  };



  return (
    <div className="intro">
      {/* <ShowContext.Provider value={{ valueShow }}> */}

      <Swiper {...params}>
        {BackgroundMovie &&
          BackgroundMovie.map((item, i) => {
            let background = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
            return (
              <SwiperSlide key={i}>
                {({ isActive }) => (
                  <BackgroundItem


                    item={item}
                    className={`${isActive ? "active" : ""}`}
                    background={background}
                  />
                )}
              </SwiperSlide>
            );

          })}
      </Swiper>
      {/* </ShowContext.Provider> */}

    </div>
  );
}
export default BackgroundSlide;

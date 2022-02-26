import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import * as ACTIONS from "../Store/Action/MoviesAction";
import * as TV from "../Store/Action/TvAction";
import MovieRow from "./MovieRow";

function Content(props) {
  const dispatch = useDispatch();
  const { TrendingMovies } = useSelector((state) => state.infoMovies);
  const { TopRatedMovies } = useSelector((state) => state.infoMovies);
  const { ActionsMovies } = useSelector((state) => state.infoMovies);
  const { ComedyMovies } = useSelector((state) => state.infoMovies);
  const { HorrorMovies } = useSelector((state) => state.infoMovies);
  const { RomanceMovies } = useSelector((state) => state.infoMovies);

  // //////////tv//////////
  const OnAirTv = useSelector((state) => state.infoTv.OnAirTv)
  const TopRateTv = useSelector((state) => state.infoTv.TopRateTv)
  const [scrollY, setScrollY] = useState();
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, [window.scrollY]);
  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    dispatch(ACTIONS.getTrendingMovies());
    dispatch(ACTIONS.getTopRatedMovies());
    dispatch(ACTIONS.getActionMovies());
    dispatch(ACTIONS.getComedyMovies());
    dispatch(ACTIONS.getHorrorMovies());
    dispatch(ACTIONS.getRomanceMovies());
    // //tv////////
    dispatch(TV.getOnAirTv());
    dispatch(TV.getTopRate());


  }, [dispatch]);
  return (
    <div>

      <MovieRow
        movies={TrendingMovies}
        title="Trending Movies"
        isNetflix={true}
        category='movie'

      />
      <MovieRow
        movies={TopRatedMovies}
        title="Top Rated Movies"
        category='movie'

      />
      <MovieRow
        movies={OnAirTv}
        title="Tv On Air"
        isNetflix={true}
        category='tv'

      />
      <MovieRow
        movies={TopRateTv}
        title=" Top Rate Tv"
        category='tv'

      />
      {/* <MovieRow
        movies={ActionsMovies}
        title="Action Movies"
        idSection="action"
      />
      <MovieRow movies={ComedyMovies} title="Comdy Movies" idSection="comedy" />
      <MovieRow
        movies={HorrorMovies}
        title="Horror Movies"
        idSection="horror"
      />
      <MovieRow
        movies={RomanceMovies}
        title="Romances Movies"
        idSection="romance"
      /> */}
      <GoToTop
        style={scrollY > 600 ? { visibility: "visible" } : { visibility: "hidden" }}
        onClick={() => handleScrollToTop()}
      >
        <FaArrowAltCircleUp />
      </GoToTop>
    </div>
  );
}

export default Content;
const GoToTop = styled.div`
  position: fixed;
  bottom: 10%;
  font-size: 50px;
  color: #fff;
  right: 44px;
  z-index: 99;
  opacity: 0.8;
  transform: scale(1);
  transition: all 0.2s linear;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

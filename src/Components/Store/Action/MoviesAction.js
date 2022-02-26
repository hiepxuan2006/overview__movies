import axios from "axios";
import * as Types from '../type'
const API_KEY = '1987b30a756448cfc2e379cb85b05558'
const BASE_URL = 'https://api.themoviedb.org/3'

export const getTrendingMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}`
        )
        dispatch({ type: Types.GET_TRENDING_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log('get trending ', error);
    }
}
export const getTopRatedMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
        )
        dispatch({ type: Types.GET_TOP_RATED, payload: result.data.results })
    } catch (error) {
        console.log('get toprate ', error);
    }
}
export const getActionMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
        )
        dispatch({ type: Types.GET_ACTIONS_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log('get action ', error);
    }
}
export const getComedyMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
        )
        dispatch({ type: Types.GET_COMEDY_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log('get comedy ', error);
    }
}
export const getHorrorMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
        )
        dispatch({ type: Types.GET_HORROR_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log('get horror ', error);
    }
}
export const getRomanceMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        )
        dispatch({ type: Types.GET_ROMANCE_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log('get romance ', error);
    }
}
export const setMoviesDetail = (movie) => dispatch => {
    dispatch({ type: Types.SET_MOVIE_DETAIL, payload: movie })
}
export const getsearchMovie = (keyword) => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}}`
        )
        dispatch({ type: Types.GET_SEARCH_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log("get search ", error);
    }
}
export const getBackground = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`
        )
        dispatch({ type: Types.GET_BACKGROUND, payload: result.data.results })
    } catch (error) {
        console.log('get netflix', error);
    }
}
export const getMovieById = (category, id) => async dispatch => {
    try {
        const result = await axios.get(`${BASE_URL}/${category}/${id}?api_key=${API_KEY}`)
        dispatch({ type: Types.GET_MOVIE_BY_ID, payload: result.data })
    } catch (error) {
        console.log('get netflix', error);
    }
}
export const getCast = (category, id) => async dispatch => {
    try {
        const result = await axios.get(`${BASE_URL}/${category}/${id}/credits?api_key=${API_KEY}`)
        dispatch({ type: Types.GET_CAST, payload: result.data.cast })
    } catch (error) {
        console.log('get netflix', error);
    }
}
export const getMoviesList = (category, params) => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/${category}/popular?api_key=${API_KEY}&page=${params}`
        )
        dispatch({ type: Types.GET_LIST_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log('get trending ', error);
    }
}
export const getTypeMovies = (category, params) => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/${category}?api_key=${API_KEY}&with_genres=${params}`
        )
        dispatch({ type: Types.GET_TYPE_MOVIES, payload: result.data.results })
    } catch (error) {
        console.log('get trending ', error);
    }
}

import axios from "axios";
import * as Types from '../type'
const API_KEY = '1987b30a756448cfc2e379cb85b05558'
const BASE_URL = 'https://api.themoviedb.org/3'
export const getOnAirTv = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/tv/airing_today?api_key=${API_KEY}`
        )
        dispatch({ type: Types.GET_ON_AIR_TV, payload: result.data.results })
    } catch (error) {
        console.log('get trending ', error);
    }
}
export const getTopRate = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/tv/top_rated?api_key=${API_KEY}`
        )
        dispatch({ type: Types.GET_TOP_RATE_TV, payload: result.data.results })
    } catch (error) {
        console.log('get trending ', error);
    }
}
export const getTypeTv = (page) => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/tv/airing_today?api_key=${API_KEY}&page=${page}`
        )
        dispatch({ type: Types.GET_TYPES_TV, payload: result.data.results })
    } catch (error) {
        console.log('get trending ', error);
    }
}

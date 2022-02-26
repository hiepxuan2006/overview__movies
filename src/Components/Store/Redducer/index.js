import { combineReducers } from "redux";
import reducerMovies from "./ReducerMovies";
import reducerTv from "./ReducerTv";
const rootReducer = combineReducers({
    infoMovies: reducerMovies,
    infoTv: reducerTv,
})
export default rootReducer;
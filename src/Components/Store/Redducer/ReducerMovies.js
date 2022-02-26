import * as Types from '../type'
const reducerMoviesInitialState = {
    TrendingMovies: null,
    TopRatedMovies: null,
    ActionsMovies: null,
    ComedyMovies: null,
    HorrorMovies: null,
    RomanceMovies: null,
    MoviesDetail: null,
    SearchMovies: null,
    Background: null,
    MovieById: null,
    Cast: null,
    MoviesList: null,
    MoviesType: null


}
const reducerMovies = (state = reducerMoviesInitialState, action) => {
    const { type, payload } = action
    switch (type) {
        case Types.GET_TRENDING_MOVIES:
            return { ...state, TrendingMovies: payload };
        case Types.GET_TOP_RATED:
            return { ...state, TopRatedMovies: payload };
        case Types.GET_ACTIONS_MOVIES:
            return { ...state, ActionsMovies: payload };
        case Types.GET_COMEDY_MOVIES:
            return { ...state, ComedyMovies: payload };
        case Types.GET_HORROR_MOVIES:
            return { ...state, HorrorMovies: payload };
        case Types.GET_ROMANCE_MOVIES:
            return { ...state, RomanceMovies: payload };
        case Types.SET_MOVIE_DETAIL:
            return { ...state, MoviesDetail: payload };
        case Types.GET_SEARCH_MOVIES:
            return { ...state, SearchMovies: payload };
        case Types.GET_BACKGROUND:
            return { ...state, Background: payload };
        case Types.GET_MOVIE_BY_ID:
            console.log(payload);
            return { ...state, MovieById: payload };
        case Types.GET_CAST:
            return { ...state, Cast: payload };

        case Types.GET_LIST_MOVIES:
            return { ...state, MoviesList: payload };

        case Types.GET_TYPE_MOVIES:
            return { ...state, MoviesType: payload };

        default:
            return state
    }
}
export default reducerMovies
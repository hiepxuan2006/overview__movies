import * as Types from '../type'

const reducerTvInitialState = {
    OnAirTv: null,
    TopRateTv: null,
    TvSeries: null
}
const reducerTv = (state = reducerTvInitialState, action) => {
    const { type, payload } = action
    switch (type) {
        case Types.GET_ON_AIR_TV:
            return { ...state, OnAirTv: payload }
        case Types.GET_TOP_RATE_TV:
            return { ...state, TopRateTv: payload }

        case Types.GET_TYPES_TV:
            return { ...state, TvSeries: payload }
        default:
            return state;
    }
}
export default reducerTv
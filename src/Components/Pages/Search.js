import React from 'react';
import { useSelector } from 'react-redux';
import SearchMovies from '../Search/SearchMovies';

function Search(props) {
    const { MoviesDetail } = useSelector(state => state.infoMovies)
    return (
        <div>
            <SearchMovies />
        </div>
    );
}

export default Search;
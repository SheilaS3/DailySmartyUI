import { SET_RECENT_POSTS } from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then(response => {
            console.log(response.data.results);
            dispatch({
                type: SET_RECENT_POSTS,
                payload: response.data.results
            })
        })
    }
}
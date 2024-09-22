import { 
    SET_RECENT_POSTS,
    SET_RESULTS_POSTS 
} from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then(response => {
            dispatch({
                type: SET_RECENT_POSTS,
                payload: response.data.results
            })
        })
    }
}

export function fetchPostsWithQuery(name, callback) {
    return function(dispatch) {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => {
            dispatch({
                type: SET_RESULTS_POSTS,
                payload: response.data.abilities
            })
            if(callback) { callback() }
        })
    }
}    
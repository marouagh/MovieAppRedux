import {
         ADD_MOVIE, 
         DELETE_MOVIE, 
         EDIT_MOVIE,
         SEARCH_NAME_MOVIE,
         SEARCH_RATING_MOVIE,
        } from '../constants/actionTypes'


export function addMovie (payload) {
    return {type: ADD_MOVIE, payload}
}
export function deleteMovie (payload) {
    return {type: DELETE_MOVIE, payload}
}

export function editMovie (payload) {
    return {type: EDIT_MOVIE, payload}
}
export function searchNameMovie (payload) {
    return {type: SEARCH_NAME_MOVIE, payload}
}
export function searchRatingMovie (payload) {
    return {type: SEARCH_RATING_MOVIE, payload}
}
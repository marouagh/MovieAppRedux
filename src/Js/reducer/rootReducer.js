import {
    ADD_MOVIE, 
    DELETE_MOVIE, 
    EDIT_MOVIE,
    SEARCH_NAME_MOVIE,
    SEARCH_RATING_MOVIE,
   } from '../constants/actionTypes'
   import {moviesData} from '../../Components/Data'


const initState = { moviesData : moviesData, 
                    nameSearch: "", 
                    rateSearch: 1}


const rootReducer = (state = initState , action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return{
                ...state,
                moviesData : state.moviesData.concat(action.payload)

            }
        case DELETE_MOVIE:
            return {
                ...state,
                moviesData : state.moviesData.filter(el => el.id !== action.payload)
              }
        case EDIT_MOVIE:
            return {
            ...state,
            moviesData : state.moviesData.map(el => el.id=== action.payload.id ? action.payload : el)
        }
        case SEARCH_NAME_MOVIE:
            return{
            ...state,
            nameSearch:action.payload
        } 
        case SEARCH_RATING_MOVIE:
            return{
            ...state,
            rateSearch:action.payload
            }
         default:
            return state;
    }
}
export default rootReducer
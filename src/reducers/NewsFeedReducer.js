/* NewsFeedReducer.js
 * Imports the LOAD_NEWS action and return the results array from the action payload
 * searchTerm contained within our state tree is just a string, so we'll return the entire payload
 * Dependencies: ActionTypes
 * Author: Tiffany Tse
 * Created: July 29, 2017
 */
//import dependencies
import { LOAD_NEWS } from '../actions/ActionsTypes';

export default (state = [], action = {}) => {
    switch (action.type) {
        case LOAD_NEWS:
            return action.payload.results || [];
        default: 
            return state;
    }
};
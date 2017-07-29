/* SearchTermReducer.js
 * Imports the SEARCH_NEWS action and return the results array from the action payload
 * Dependencies: ActionTypes
 * Author: Tiffany Tse
 * Created: July 29, 2017
 */
//import dependencies
import { SEARCH_NEWS } from '../actions/ActionsTypes';

export default (state = [], action = {}) => {
    switch (action.type) {
        case SEARCH_NEWS:
            return action.payload.results || [];
        default: 
            return state;
    }
};
/* CreateStore.js
 * create store createStore
 * Dependencies: Redux, redux-logger, newsFeedReducer, searchTermReducer
 * Author: Tiffany Tse
 * Created: July 16, 2017
 */
//import modules
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import newsFeedReducer from './reducers/NewsFeedReducer';
import searchTermReducer from './reducers/SearchTermReducer';

export default (initialState = {}) => (
    createStore(
        combineReducers({
            news: newsFeedReducer,
            searchTerm: searchTermReducer
            }),
            initialState,
            applyMiddleware(logger)
    )
);
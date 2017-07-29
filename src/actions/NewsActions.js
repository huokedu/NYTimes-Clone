/* NewsActions.js
 * create actions
 * Dependencies: ActionTypes, TestData
 * Author: Tiffany Tse
 * Created: July 29, 2017
 */

//import modules
import { LOAD_NEWS, SEARCH_NEWS } from './ActionTypes';
import mockData from '../TestData.json';

export const loadNews = () => ({
    type: LOAD_NEWS,
    payload: mockData
});

export const searchNews = searchTerm => ({
    type: SEARCH_NEWS,
    payload: searchTerm
});
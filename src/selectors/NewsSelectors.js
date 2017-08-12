/* NewsSelector.js
 * Use reselect.js library for our seearch functionlity which has two types of selectors: input and memoized
 * Dependencies: reselect
 * Modules: reshapeNewsData
 * Author: Tiffany Tse
 * Created: August 12, 2017
 */
//import dependencies
import {createSelector } from 'reselect';
//import modules
import { reshapeNewsData, filterNewsBySearchTerm} from '../util/DataTransformations.js';


//pass state  to newsSelector where wstate.news is passed to reshapeNewsData as input
const newsSelector = state => state.news;

/*Return the news portion of our Redux state tree. From there, we create two memoized
selectors–reshapeNewsSelector and allNewsSelector. Memoized selectors take two
arguments. The first is an array of inputs or memoized selectors.*/
const reshapeNewsSelector = createSelector(
    [newsSelector],
    reshapeNewsData
);

//allNewsSelector simply returns the entire transformed list without modification (newsItems => newsItems).
export const allNewsSelector = createSelector(
    [reshapeNewsSelector],
    newsItems => newsItems
);

//responsible for returning curent value of serachTerm from the Redux state tree
const searchTermSelector = state => state.searchTerm;

//takes care of case-insensitive searching
const caseInsensitiveSearchTermSelector = createSelector(
  searchTermSelector,
  searchTerm => searchTerm.toLowerCase()
);

//takes, two inputs = reshapeNewsSelector and caseInsensitiveSearchTermSelector to pass to filterNewsBySearchTerm
//return value of filterNewsBySearchTerm will be data exposed to the Search container
export const searchNewsSelector = createSelector(
  [reshapeNewsSelector, caseInsensitiveSearchTermSelector],
  filterNewsBySearchTerm
);
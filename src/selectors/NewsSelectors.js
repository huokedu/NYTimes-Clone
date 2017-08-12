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
import { reshapeNewsData } from '../util/DataTransformations.js';


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
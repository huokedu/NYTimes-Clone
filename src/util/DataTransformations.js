/* DataTransformations.js
 * transform raw data from New York Times  as impurt and transform it into an array of objects
 * Dependencies: moment
 * Author: Tiffany Tse
 * Created: July 29, 2017
 */

//import dependencies
import moment from 'moment';

const getMultimediaUrlByFormat = (multimedia, format) => {
    //if  do not have a media format
    if (!multimedia) {
        return '';
    }
    //if we do find all of them
    const matchingFormat = multimedia.find(media => media.format === format);
    
    if (!matchingFormat) {
        return '';
    }
    return matchingFormat.url;
};

//transform the raw data to an  news object
export const reshapeNewsData = news => (
     news.map(({abstract, byline, geo_facet, 
                multimeida, published_date}) => {
        description: abstract || '',
        author: byline ? byline.replace('By', '') : '',
        location: geo_facet.length > 0 ? geo_facet[0] : '',
        imageUrl: getMultimediaUrlByFormat(multimedia, 'thumbLarge'),
        date: moment(published_date).format('MMM Do YYYY'),
        title,
        url
     });
);

export const filterNewsBySearchTerm = (newsItems, searchTerm) => {
  // returns an empty list if you haven't typed anything
    if (serachTerm.length == 0) {
        return [];
    }
    return newsItems.filter(
        ({description, author, title}) => (
        description.toLowerCase().indexOf(searchTerm) > -1 ||
        author.toLowerCase().indexOf(searchTerm) > -1 ||
        title.toLowerCase().indexOf(searchTerm) > -1
    ));

};
/** 
*  SearchContainer.js
*  Description: Exposes two props to Serch component -filteredNews and action creator
*  Modules: React and React Native Modules
*  Dependencies: searchNews, Search, searchNewsSelector
*  Author: Tiffany Tse
*/
//import modules 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import deependencies
import { searchNews } from '../actions/NewsActions.js';
import Search from '../components/Search.js';
import { searchNewsSelector } from '../selectors/NewsSelectors.js';

const mapStateToProps = state => ({
    filteredNews: searchNewsSelector(state)
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        searchNews
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
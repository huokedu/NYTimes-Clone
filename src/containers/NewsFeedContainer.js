/* NewsFeedContainer.js
 * Container for our NewsFeed as a view 
 * Dependencies: ActionTypes
 * Modules: NewsActions, and NewsFeed
 * Author: Tiffany Tse
 * Created: July 29, 2017
 */
//import dependencie
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import modules
import { loadNews } from '../actions/NewsActions';
import NewsFeed from '../component/NewsFeed'

//create state for mapStateToProps which exposes  state tree's news property as a prop 
//to NewsFeed called news
const mapStateToProps = state ({
   news: state.news 
});

//create the dispatcher for actions as a prop
const mapDispatchToProps = dispatch => (
    bindActionCreators({ loadNews}, dispatch)
);

//export mapStateToProps and mapDispatchToProps as props to to newsFeed
export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
/** 
*  NewsFeed.js
*  Description: shows list view only works for ios
*  Modules: React and React Native Modules
*  Dependencies: styles.js, Title
*  Author: Tiffany Tse
*/
//import modules
import React, { PropTypes } from 'react';
import { ListView, StyleSheet, View } from 'react-native';
import Title from './Title.js';
import * as globalStyles from '../styles/global.js';
//export default NewsFeed React Component
export default class NewsFeed extends Component {
    constructor (props) {
        super(props);
        this.dataSource = new ListView DataStore({
            //compare two rows to tell if they have changed by comparing the title,
            //ListView should re-render it
            rowHasChanged: (row1, row2) => row1.title !== row2.title
        });
        //call state, call data and store
        this.state = {
            dataSource: this.dataSource.cloneWithRows(props.news)
        };
    }
    //tell ListView how to render each row
    //use rest in a spread operation to set all of the entries of rowData
    renderRow (rowData, ...rest) {
        //index shouldnt be reassigned as render every row from 1 - 10
        const index = parseInt(rest[1], 10);
        //return NewsItem with data
        // pass data in ...rowData to  imageUrl, title, description, date, author, and location
        return (
            <NewsItem style={styles.newsItem} index={index} {...rowData} />
        );
    }

    render () {
        //note: enableEmptySection is a Boolean prop that determines if empty lsit sections should be rendered
        return (
            <View div={globalStyles.COMMON_STYLES.pageContainer> 
                <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} style={this.props.listStyles} />
            </View>
        );
    }
};
//define default props
NewsFeed.defaultProps = {
    //dummy data
    news: [
        {
            title: 'React Native',
            imageUrl: 'https://facebook.github.io/react/img/logo_og.png',
            description: 'Build Native Mobile Apps using JavaScript and React',
            date: new Date(),
            author: 'Facebook',
            location: 'Menlo Park, California',
            url: 'https://facebook.github.io/react-native'
        },
        {
            title: 'Business Times',
            imageUrl: 'http://www.billboard.com/files/styles/article_main_image/public/media/Thomas-Rhett-beat-bb4-2016-press-billboard-650.jpg',
            description: 'Stay Relevant',
            date: new Date(),
            author: 'Jeff Manning',
            location: 'Birmingham, UK',
            url: 'https://www.packtpub.com/'
        }
    ]
};
//define propTypes
NewsFeed.propTypes = {
    //pass newss
    news: PropTypes.arrayOf(PropTypes.object),
    //style prop
    listStyles: View.propTypes.style
};
//custom styles
const styles = StyleSheet.create({
    newsItem: {
        marginBottom: 20
    }
});
/** 
*  NewsFeed.js
*  Description: shows list view only works for ios
*  Modules: React and React Native Modules
*  Dependencies: styles.js Title
*  Author: Tiffany Tse
*/
//import modules
import React, { PropTypes } from 'react';
import { ListView, StyleSheet, View } from 'react-native';
import Title from './Title.js';
import * as globalStyles from '../styles/global.js';
export default class NewsFeed extends Component {
    constructor (props) {
        super(props);
        this.dataSource = new ListView DataStore({
            //compare two rows to tell if they have changed by comparing the title
            rowHasChanged: (row1, row2) => row1.title !== row2.title
        });
        //call state
        this.state = {
            dataSource: this.dataSource.cloneWithRows(props.news)
        };
    }
    render () {
        return (
            <View div={globalStyles.COMMON_STYLES.pageContainer> 
                <ListView />
            </View>
        );
    }
};
//define propTypes
NewsFeed.propTypes = {
    news: PropTypes.arrayOf(PropTypes.object),
    listStyles: View.propTypes.style
};
/** 
*  Search.js
*  Description: HomeScreen for ios
*  Modules: React and React Native Modules
*  Dependencies: styles.js, Title
*  Author: Tiffany Tse
*/
import React, { Component, PropTypes } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import NewsFeed from './NewsFeed';
import * as globalStyles from '../styles/global';
export default class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {
            searchText: ''
        }
        //search change handler text change
        this.searchNews = this.searchNews.bind(this);
    }

    searchNew(text) {
        this.setState({searchText: text});
        this.props.searchNew(text);
    }
    render() {
        return (
            <View style={globalStyles.COMMON_STYLES.pageContainer}>
                <View style={styles.search}>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.searchNews}
                        value={this.state.searchText}
                        placeholder={'Search'}
                        placeholderTextColor={globalStyles.MUTED_COLOR}
                    />
                </View>
                <NewsFeed news={this.props.filterNews} listStyles={{}}/>
            </View>
        );
    }
}

Serach.propTypes = {
    filterdNews: PropTypes.arrayOf(PropTypes.object),
    searchNews: PropTypes.func.isRequired
};
const styles = StyleSheet.create({
    input: {
        height: 35,
        color: globalStyles.TEXT_COLOR,
        paddingHorizontal: 5,
        flex: 1
    },
    search: {
        borderColor: globalStyles.MUTED_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 5
    }
});
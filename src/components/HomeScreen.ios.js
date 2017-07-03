/** 
*  HomeScreen.ios.js
*  Description: HomeScreen for ios
*  Modules: React and React Native Modules
*  Dependencies: styles.js, Title
*  Author: Tiffany Tse
*/
//import react componets
import React, { Component } from 'react';
import {TabBarIOS, Text} from 'react-native';
import NewsFeed from './NewsFeed';
import * as globalStyles from '../styles/global';
export default class HomeScreen extends Component {
    render() {
        return (
            <TabBarIOS>
            </TabBarIOS>
        );
    }
}
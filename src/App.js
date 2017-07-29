/* 
* App.js
* The main entry point for app
* Modules: React and React Native Modules
* Dependencies: Home, Detail
* Author: Tiffany Tse
* Date Created: July 29, 2017
*/
//import modules
import React from 'react';
import { Provider } from 'react-redux';
import HomeScreen from './components/HomeScreen';
import createStore from './createStore';
const store = createStore();

//export our provider from react-redux
export default () => (
        <Provider store={store}>
            <HomeScreen />
        </Provider>
);
/** 
*  SmallText.js
*  Description: display text that is small each news item
*  Modules: React and React Native Modules
*  Dependencies: None
*  Author: Tiffany Tse
*/
//import modules
import React, { PropTypes } from 'react';
import { StyleSheet, Text } from 'react-native';
import AppText from './AppText.js';
//create SmallText React Component
const SmallText = ({ children, style, ...rest }) => (
    <AppText style={[styles.small, style]} {...rest}>
        {children}
    </AppText>
);

//define proptypes
SmallText.propTypes = {
    children: PropTypes.node,
    style: Text.propTypes.style
};

//define custom styling for SmallText
const styles = StyleSheet.create({
    small: {
        fontSize: 11
    }
});
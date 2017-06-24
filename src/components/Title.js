/** 
*  Title.js
*  Description: Title for each article
*  Modules: React and React Native Modules
*  Dependencies: None
*  Author: Tiffany Tse
*/
import React, { PropTypes } from 'react';
import { Text, StyleSheet, } from 'react-native';
import AppText from './AppText.js';
import * as globalStyles from '../styles/global.js';

const Title = ({style, children}) =>(
    <AppText style={[style.text, style]}> 
        {children}
    </AppText>
);
//propTypes
Title.propTypes = {
    //allow styles to be passed
    style: Text.propTypes.style,
    children: PropTypes.node
};
//styles for Title.js
const styles = StyleSheet.create({
    title: {
        fontFamily: 'HelveticaNeue-CondensedBold',
        fontSize: 18,
        color: globalStyles.HEADER_TEXT_COLOR,
        backgroundColor: `${globalStyles.BG_COLOR}99`
    }
});
//export Title
export default Title;
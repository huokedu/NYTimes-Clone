/** 
*  ByLine.js
*  Description: view component that makes up a news item preview
*  Modules: React and React Native Modules
*  Dependencies: styles.js SmallText
*  Author: Tiffany Tse
*/
//import modules
import React, { PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import SmallText from './SmallText.js';
import * as globalStyles from '../styles/global.js';

const Byline ({date, author, location}) => (
    <View>
        <View style={style.row}>
            <SmallText>
                {date.toLocaleDateString()}
            </SmallText>
            <SmallText>
                {author}
            </SmallText>
        </View>
    </View>
    
    {location ? (
        <View style={styles.row}>
            <SmallText style={styles.location}>
            {location}
            </SmallText>
        </View>
    ) : null}
);

//define propTypes
Byline.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    author: PropTypes.string.isRequired,
    location: PropTypes.string
};
//define custom styles
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    location: {
        color: globalStyles.MUTED_COLOR
    }
});
//export Byline
export default Byline;
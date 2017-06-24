/** 
*  Thumbnail.js
*  Description: shows border and small thumbnail picture
*  Modules: React and React Native Modules
*  Dependencies: styles.js Title
*  Author: Tiffany Tse
*/
//import modules
import React, { PropTypes } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Title from './Title.js';
import * as globalStyles from '../styles/global.js';
//create thumbnail react module 
const Thumbnail = ({url, titleText, accentColor}) => {
    const imageStyle = {
        //add some transparnecy to the color
        backgroundColor: `${accentColor}77` 
    };
    const TitleComponent = <Title style={style.title}> {titleText} </Title>;
    return (
        <View style={[style.container, {borderColor: accentColor}, style]}>
        {url.length > 0 ? (
            <Image style={[styles.image, imageStyle]} source={{url:url}}>
               {TitleComponent}
            </Image>
        ) : (
            <View style={[styles.image, imageStyle]}>
               {TitleComponent}
            </View>
        )}
        </View>
    );
};
//define propTypes
Thumbnail.propTypes = {
    style: View.propTypes.style,
    url: PropTypes.string.isRequired,
    titleText: PropTypes.string,
    accentColor: PropTypes.string.isRequired
};
//define custom styles for Thumbnails
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 3,
        borderStyle: 'solid'
    },
    image: {
        height: 100,
        justifyContent: 'flex-end'
    },
    title:{
        padding: 5
    }
});
//export Thumbnails
export default Thumbnail;
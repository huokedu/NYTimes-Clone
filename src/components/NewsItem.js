/** 
*  NewItem.js
*  Description: container item for new feed (ios version)
*  Modules: React and React Native Modules
*  Dependencies: styles.js Title
*  Author: Tiffany Tse
*/
import React, { Component, PropTypes } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    ActionSheetIOS
} from 'react-native';
import Byline from './Byline';
import AppText from './AppText';
import Thumbnail from './Thumbnail';
import * as globalStyles from '../styles/global';

export default class NewsItem extends Component {

  constructor(props) {
    super(props);

    this.onLongPress = this.onLongPress.bind(this);
  }

  onLongPress() {
      //open Action sheet
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Bookmark', 'Cancel'],
      cancelButtonIndex: 1,
      title: this.props.title
    }, buttonIndex => console.log('Button selected', buttonIndex));
  }

  render() {
    //make variable constant, with these props
    const {
      style,
      imageUrl,
      title,
      author,
      date,
      location,
      description,
      onPress
    } = this.props;
    const accentColor = globalStyles.ACCENT_COLORS[
      this.props.index % globalStyles.ACCENT_COLORS.length
    ];
    return (
      <TouchableOpacity
        style={style}
        onLongPress={this.onLongPress}
        onPress={onPress}
      >
        <View>
          <Thumbnail
            url={imageUrl}
            titleText={title}
            accentColor={accentColor}
            style={styles.thumbnail}
          />
          <View style={styles.content}>
            <Byline
              author={author}
              date={date}
              location={location}
            />
            <AppText>
              {description}
            </AppText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

NewsItem.propTypes = {
    //whether or not to display imageUrl
    imageUrl: PropTypes.string,
    //whether or not to display imageUrl
    title: PropTypes.string.isRequired,
    //whether or not to display description
    description: PropTypes.string,
    //whether or not to display date
    date: PropTypes.instanceOf(Date).isRequired,
    //whether or not to display author
    author: PropTypes.string.isRequired,
    //whether or not to display location
    location: PropTypes.string,
    //whether or not to display index
    index: PropTypes.number.isRequired,
    //event handler for onPress
    onPress: PropTypes.func.isRequired,
    //style for NewsiTEM
    style: View.propTypes.style
};

const styles = StyleSheet.create({
  thumbnail: {
    marginBottom: 5
  },
  content: {
    paddingHorizontal: 5
  }
});
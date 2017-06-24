/** 
*  AppText.js
*  Description:  Text component for
*  Modules: React and React Native Modules
*  Dependencies: None
*  Author: Tiffany Tse
*/
import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import * as globalStyles from '../styles/global.js';


const AppText = ({ children, style, ...rest }) => (
  <Text style={[globalStyles.COMMON_STYLES.text, style]} {...rest}>
    {children}
  </Text>
);

//define propTypes
AppText.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};
//export AppText
export default AppText;
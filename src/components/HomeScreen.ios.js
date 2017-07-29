/** 
*  HomeScreen.ios.js
*  Description: HomeScreen for ios
*  Modules: React and React Native Modules
*  Dependencies: styles.js, Title
*  Author: Tiffany Tse
*/
//import react components
import React, { Component } from 'react';
import {TabBarIOS, Text, Alert, Vibration, StatusBar} from 'react-native';
import NewsFeed from './NewsFeed';
import Search from './Search'
import * as globalStyles from '../styles/global';
export default class HomeScreen extends Component {
    constructor (props) {
        super(props);
        //set default state of tab.
        this.state = {
            tab: 'newsFeed'
        };
        //bookmark 
        showBoomarkAlert () {
            Vibration.vibrate();
            Alert.alert(
                "Coming Soon!",
                "We're hard at work on this feature, check back in the near future.",
                [
                    { text: 'OK', onPress: () => console.log('User pressed OK') }
                ]
            );
        }
    }

    render() {
        return (
            <TabBarIOS
                barTintColor={globalStyles.BAR_COLOR}
                tintColor={globalStyles.LINK_COLOR}
                translucent={false}
            >
                <TabBarIOS.Item
                    badge={4}
                    systemIcon={'featured'}
                    selected={this.state.tab ==='newsFeed'}
                    onPress={ () => this.setState({ tab: 'newsFeed'})}
                    >
                    <NewsFeed />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon={'search'}
                    selected={this.state.tab === 'search'}
                    onPress={ () => this.showBookmarkAlert()}
                    >
                    <Search />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon={'bookmarks'}
                    selected={this.state.tab === 'bookmarks'}
                    onPress={ () => this.setState({ tab: 'newsFeed'})}
                    >
                    <Text>Bookmarks</Text>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
HomeScreen.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.BG_COLOR,
    flex: 1
  },
  drawer: {
    backgroundColor: globalStyles.BG_COLOR,
    flex: 1,
    padding: 10
  },
  drawerItem: {
    fontSize: 20,
    marginBottom: 5
  },
  menuButton: {
    marginHorizontal: 10,
    marginTop: 10,
    color: globalStyles.LINK_COLOR
  }
});
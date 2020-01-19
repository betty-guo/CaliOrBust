import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import QuestionScreen from '../screens/QuestionScreen';
import VideoScreen from '../screens/VideoScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      }
    },
    LinksScreen: {
      screen: LinksScreen,
      navigationOptions: {
        header: null,
      }
    },
	QuestionScreen: {
      screen: QuestionScreen,
      navigationOptions: {
        header: null,
      }
    },
	VideoScreen: {
      screen: VideoScreen,
      navigationOptions: {
        header: null,
      }
    }
  },
  config,
);

MainStack.navigationOptions = {
  headerShown: false,
};

MainStack.path = '';
export default MainStack;

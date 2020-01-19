import React, { Component } from 'react';
import { 
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {LinksScreen} from './LinksScreen';

export default class HomeScreen extends Component {
  constructor() {
    super();
    //this.state = {};
  }

  _onUploadResumePress = (status) => {
    console.log(status);
    this.props.navigation.navigate('LinksScreen');
  };

  render() {
    const { outerContainer, caliOrBustText, resumeButton, loaderButton } = styles;

    return (
      <View style={outerContainer}>
        <Text style={caliOrBustText}>cali || bust</Text>
        <TouchableOpacity style={resumeButton} 
		onPress={() => this._onUploadResumePress('Pressed')}>
          <Text style={{
            fontSize: 16,
            color: '#fff',
          }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export const styles = {
  outerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: getStatusBarHeight() + 50
  },
  caliOrBustText: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
  },
  resumeButton: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'turquoise'
  }
};
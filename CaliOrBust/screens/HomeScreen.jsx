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
        <Text style={caliOrBustText}>CaliOrBust</Text>
        <TouchableOpacity style={resumeButton} onPress={() => this._onUploadResumePress('Pressed')}>
          <Text style={{
            fontSize: 16,
            color: '#fff',
          }}>Upload resume</Text>
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
    fontSize: 20,
  },
  resumeButton: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'turquoise'
  }
};
//import React from 'react';
import React, { Component, useState, useEffect } from 'react';
//import styles from 'HomeScreen.jsx';
import { Camera } from 'expo-camera';
import { 
  View,
  Text,
  TouchableOpacity,
  Button,
  Alert,
  SafeAreaView
} from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Constants from 'expo-constants';
//import { Button } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {VideoScreen} from './VideoScreen';


export default class LinksScreen extends Component {
  constructor() {
    super();
    //this.state = {};
  }
  
  _onRecordPress = (status) => {
    console.log(status);
    this.props.navigation.navigate('VideoScreen');
  }

//export default function QuestionScreen() {
render() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <Text style={styles.caliOrBustText}>Answer the following questions:</Text>
	   <Text style={styles.caliOrBustText}>Why are you not successful?</Text>
	   
		
		<TouchableOpacity style={styles.resumeButton} 
		onPress={() => this._onRecordPress('Pressed record')}>
		<Text style={{
            fontSize: 16,
            color: '#fff',
          }}>Answer</Text>
		
		</TouchableOpacity>
		
	<SafeAreaView style={{marginTop: 9999}}>
	   <Button
          title=""
          onPress={() => Alert.alert('Go to the nexy page')}
        />
	</SafeAreaView>
    </ScrollView>

  );
}
};
export const styles = {
  container: {
    flex: 1,
    //paddingTop: 15,
    backgroundColor: '#fff',
	alignItems: 'center'
  },
  caliOrBustText: {
    marginTop: 25,
    //justifyContent: 'flex-start',
    textAlign: 'center',
	fontSize: 20
	
  },
  uploadButton: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 45,
	borderRadius: 25
  },
  nextButton: {
	flex: 1,
	//alignSelf: 'flex-end',
	alignItems: 'center',
	marginTop: 400,
	//position: 'absolute',
    //bottom: 0
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

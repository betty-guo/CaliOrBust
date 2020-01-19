//import React from 'react';
import React, { Component } from 'react';
//import styles from 'HomeScreen.jsx';
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
import * as DocumentPicker from 'expo-document-picker';
//import { Button } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';

export default class LinksScreen extends Component {
  constructor() {
    super();
    //this.state = {};
  }
  _onNextPress = (status) => {
    console.log(status);
    this.props.navigation.navigate('QuestionScreen');
  }

//export default function LinksScreen() {
  render(){
  return (
    <View style={styles.container}>
		<Text style={styles.caliOrBustText}>Please upload your resume:</Text>
		<TouchableOpacity style={styles.resumeButton} 
		onPress={() => DocumentPicker.getDocumentAsync(type='pdf/*', copyToCacheDirectory='true')}>
		<Text style={{
            fontSize: 16,
            color: '#000',
			textAlign: 'center'
          }}>Attach File</Text>
		
		</TouchableOpacity>
	<TouchableOpacity style={styles.nextButton} 
		onPress={() => this._onNextPress('Pressed')}>
		<Text style={{
            fontSize: 16,
            color: '#fff',
			textAlign: 'center'
          }}>Next</Text>
		
		</TouchableOpacity>
	</View>
  );
//};
}
};

LinksScreen.navigationOptions = {
  title: 'Links',
};

export const styles = StyleSheet.create({
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
	borderRadius: 10
  },
  nextButton: {
	position: 'absolute',
	marginTop: 500,
	//marginTop: 400,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#471482'
  },
    resumeButton: {
    //flex: 0.5,
	marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 400,
    borderRadius: 10,
    backgroundColor: 'lightgrey'
  }
}); 

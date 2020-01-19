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

  _onUploadResumePress = (status) => {
    console.log(status);
    this.submitToGoogle();
  };

  submitToGoogle = async () => {
     try {
       this.setState({ uploading: true });
       let { image } = this.state;
       let body = JSON.stringify({
         requests:[
            {
              inputConfig: {
                gcsSource: {
                  uri: "gs://caliorbust/ba-ex04.pdf"
                },
                mimeType: "application/pdf"
              },
              features: [
                {
                  type: "DOCUMENT_TEXT_DETECTION"
                }
              ],
              outputConfig: {
                gcsDestination: {
                  uri: "gs://https://storage.cloud.google.com/caliorbust/ba-ex04.pdf"
                },
                batchSize: 1
              }
            }
          ]
       });
       let response = await fetch(
         "https://us-vision.googleapis.com/v1/files:asyncBatchAnnotate",
         {
           headers: {
             Accept: "application/json",
             "Authorization": "Bearer ya29.c.Kl66B8UJXFvuoORvd5WMACcSv5gvVaKnwrgkRkk65g9MlgXf9dPcqzK--xG08_p1OpvaY5Rd4Zml8ATyscdHSxvRsh_aKFj2-cySpWctD7WnHwRDvnjCKeQniUJ7s7vh",
             "Content-Type": "application/json"
           },
           method: "POST",
           body: body
         }
       );
       let responseJson = await response.json();
       console.log(responseJson.name)
       // let arr = responseJson.name.split('/');
       // console.log(arr)
       // console.log(arr[arr.length - 1])
       this.setState({
         googleResponse: responseJson,
         uploading: false
       });
       console.log("https://vision.googleapis.com/v1/projects/" + responseJson.name);
       let response2 = await fetch(
         "https://vision.googleapis.com/v1/projects/thermal-talon-215015/locations/us/operations/2835c48e7be3cba4",
         {
           headers: {
             Accept: "application/json",
             "Authorization": "Bearer ya29.c.Kl66B8UJXFvuoORvd5WMACcSv5gvVaKnwrgkRkk65g9MlgXf9dPcqzK--xG08_p1OpvaY5Rd4Zml8ATyscdHSxvRsh_aKFj2-cySpWctD7WnHwRDvnjCKeQniUJ7s7vh",
             "Content-Type": "application/json"
           },
           method: "GET",
         }
       )
       .catch((err) => {
         //console.log(err)
       })

    let responseJson2 = await response2.json();
    console.log(responseJson2);
      } catch (error) {
        console.log(error);
      }
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
	   <Text style={styles.caliOrBustText}>{ gen(['machine learning', 'Python', 'programming', 'web development']).g }</Text>
	   
		
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
          onPress={() => Alert.alert('Go to the next page')}
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

export const data = {
"b-count": 13,
"behavioural": ["Tell me a little about yourself.",
    "What are your biggest weaknesses?",
    "What are your biggest strengths?",
    "Where do you see yourself in five years?",
    "Why do you want this job?",
    "What can we expect from you in your first three months?",
    "Tell me about a time when you handled a challenging situation.",
    "Tell me about a time you had to be very strategic in order to meet all your top priorities.",
    "Tell me about a time you failed. How did you deal with the situation?",
    "Tell me about a time you set a goal for yourself. How did you go about ensuring that you would meet your objective?",
    "Tell me about a successful presentation you gave and why you think it was a hit.",
    "Give me an example of a time you were able to be creative with your work. What was exciting or difficult about it?",
    "What do you do if you disagree with someone at work?"
],
"s-count": 13,
"standalone_technical": ["Name a SDLC methodology and explain the steps in detail.",
    "What is a class? What is a superclass?",
    "Explain the differences between a queue and a stack.",
    "Explain the differences between a method and a constructor.",
    "Explain some differences between imperative programming and functional programming.",
    "How does function/method overloading?",
    "Describe a project in the past year or so that you were very passionate about.",
    "What do you think are the most important aspects of a successful development team?",
    "How do you keep your technical skills relevant over time?",
    "Explain the 'Divide and Conquer' methodology.",
    "Explain breadth-first search.",
    "Explain the different types of acces modifiers.",
    "Explain the differences of a compiler and an interpreter."
], 
"g-count": 4,
"generated": ["How can your skills in _ benefit our company project?",
    "Tell us about your previous experiences, both academic and professional, on _.",
    "How familiar are you with _?",
    "Describe a particular challenge you had when working with _. How did you overcome it?"
]
};

export function gen(keywords) {
  const b = Math.floor(Math.random() * Number(data["b-count"]));
  const s = Math.floor(Math.random() * Number(data["s-count"]));
  const g = Math.floor(Math.random() * Number(data["g-count"]));
  var genb = String(data.behavioural[b]);
  var gens = String(data.standalone_technical[s]);
  var geng = String(data.generated[g]);
  var wordIndex = Math.floor(Math.random()) * keywords.length;
  var generated = geng.replace("_", keywords[wordIndex]);
  // console.log(generated);

  return {
      b: genb, s: gens, g: generated
  }
}

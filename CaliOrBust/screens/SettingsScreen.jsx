import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {LinksScreen} from './LinksScreen';

export default class SettingsScreen extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      dataSource: {}
    };
  };

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
};

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

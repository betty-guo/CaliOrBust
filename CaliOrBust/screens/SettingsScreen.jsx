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
    this.state = {
      loading: true,
   dataSource:[]
    };
  }

  _onUploadResumePress = (status) => {
    console.log(status);
    submitToGoogle;
    console.log(this.state.dataSource);
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
                  uri: "gs://caliorbust/Guo_Yuxuan.pdf"
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
                  uri: "gs:https://storage.cloud.google.com/caliorbust/Guo_Yuxuan.pdf"
                },
                batchSize: 1
              }
            }
          ]
        });
        let response = await fetch(
          "https://vision.googleapis.com/v1/files:asyncBatchAnnotate",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            method: "POST",
            body: body
          }
        );
        let responseJson = await response.json();
        console.log(responseJson);
        this.setState({
          googleResponse: responseJson,
          uploading: false
        });
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
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
                  uri: "gs://starter20/Lorem-Ipsum.pdf"
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
                  uri: "gs://storage.cloud.google.com/starter20/Lorem-Ipsum.pdf"
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
             "Authorization": "Bearer ya29.c.Kl66B-WogetfP5Jr9DEh7MUFPvW1AzrpR0y_YQbu8LotzAp-aiAHH7pIO3kWFhBWc8n_u7t8HE4MfF9cZxR8hDDpSwioYrLziWLXIddinNXEGi6dJm37nsgfn9P1MOhG",
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
       console.log("https://vision.googleapis.com/v1/" + responseJson.name);

       let response2 = await fetch(
         "https://vision.googleapis.com/v1/" + responseJson.name,
        //"https://vision.googleapis.com/v1/projects/thermal-talon-215015/locations/us/operations/c75b23c12df4eb26",
         {
           headers: {
             Accept: "application/json",
             "Authorization": "Bearer ya29.c.Kl66B-WogetfP5Jr9DEh7MUFPvW1AzrpR0y_YQbu8LotzAp-aiAHH7pIO3kWFhBWc8n_u7t8HE4MfF9cZxR8hDDpSwioYrLziWLXIddinNXEGi6dJm37nsgfn9P1MOhG",
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

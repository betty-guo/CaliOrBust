import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import Constants from 'expo-constants';
export default function VideoScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1}}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              //flex: 0.1,

              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
		  <TouchableOpacity
            style={ styles.resumeButton }
            onPress={() => {
				Alert.alert('Camera is now recording')
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Record </Text>
          </TouchableOpacity>
		  <TouchableOpacity
            style={ styles.resumeButton }
            onPress={() => {
				Alert.alert('Recording has now stopped')
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Stop </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

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
    marginTop: 75,
    marginRight: 74,
	marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'turquoise'
  }
}; 
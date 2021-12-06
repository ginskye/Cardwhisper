import React, {useEffect} from 'react';
import { Button, 
  FlatList, 
  Image, 
  ScrollView, 
  StyleSheet, Text, TouchableOpacity,
   View, SafeAreaView, Alert, } from 'react-native';
var Sound =require('react-native-sound');

Sound.setCategory('Playback');

//make one button that plays different sounds based on the button call
//button for camera
//button to call function commands = read current hand/enter new
//ML side -> send it an image (as png?), it send back a string of what card -> feed into audio

var sample = new Sound('sample.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // if loaded successfully
    console.log('duration in seconds: ' + sample.getDuration() + 'number of channels: ' + sample.getNumberOfChannels());
  
  });
  const App = () => {
    useEffect(() => {
      sample.setVolume(1);
      return () => {
        sample.release();
      };
    }, []);
    const playPause = () => {
      sample.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    };
    return (
      <View style={styles.container}>
         <Button
  title="Click me!"
  color="red"
  onPress={() =>Alert.alert('Button pressed')}/>
  <Button
  title="This is button 2!"
  color="orange"
  onPress={() =>Alert.alert('Button 2 press')}/>
        <Button title="press" style={styles.playBtn} onPress={playPause} />
               
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
    },
    playBtn: {
      padding: 20,
    },
  });
export default App;
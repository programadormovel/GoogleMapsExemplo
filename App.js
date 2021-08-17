import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} 
          loadingEnabled={true}
          region={{
          latitude: -23.504070995190204,
          longitude: -46.81155827395239,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
          }}>   
        </MapView>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

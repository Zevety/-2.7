import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        This is cat
      </Text>
      <Image style={styles.logo} source={require('../assets/cat.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    backgroundColor:'#ecf0f1'
  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 14,
    color:'grey',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 200,
  }
});

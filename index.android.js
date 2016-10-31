import React from 'react'
import { AppRegistry, StyleSheet, View } from 'react-native'

import Quote from './src/quote/components/large'

const TimelessTruths = () => (
  <View style={styles.container}>
    <Quote text="Hare Krishna" reference="Srila Prabhupada" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

AppRegistry.registerComponent('TimelessTruths', () => TimelessTruths)

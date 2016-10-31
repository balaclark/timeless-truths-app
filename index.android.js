import React from 'react'
import { AppRegistry, StyleSheet, View } from 'react-native'

import Quote from './src/quote/components/large'

const TimelessTruths = () => (
  <View style={styles.container}>
    <Quote
      text="When the Lord is pleased with one's service, one's mission in life is fulfilled."
      reference="A.C. Bhaktivedanta Swami Prabhupada, Srimad Bhagavatam 4.20.9 p." />
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

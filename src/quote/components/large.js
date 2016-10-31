import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const LargeQuote = ({ text, reference }) => (
  <View style={styles.container}>
    <Text style={styles.largeQuote}>{text}</Text>
    <Text style={styles.largeRef}>{reference}</Text>
  </View>
)

LargeQuote.propTypes = {
  text: React.PropTypes.string.isRequired,
  reference: React.PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  largeQuote: {
    fontFamily: 'Rasa-Regular',
    fontSize: 26,
    lineHeight: 34,
    textAlign: 'center',
    color: '#000000',
    margin: 10
  },
  largeRef: {
    fontFamily: 'Rasa-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

export default LargeQuote

// @flow

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Platinum } from '../styles/Colors'

export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>This is where the depth chart goes</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#14213D',
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: Platinum,
    width: '100%',
    textAlign: 'center'
  }
})

// @flow

import React from 'react'
import Elements, { StyleSheet, Text, View } from 'react-native'

import DepthChart from './src/components/DepthChart'
import ActionsBar from './src/components/ActionsBar'
import TransactionList from './src/components/TransactionList'

console.log(Elements)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DepthChart />
        <ActionsBar />
        <TransactionList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50
  }
})

// @flow

import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { Black, Platinum, White, Green, Red } from '../styles/Colors'

export default class ActionsBar extends React.Component {
  buy(): void {
    console.log('buy')
  }

  sell(): void {
    console.log('sell')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buy}>
          <Button color={White} title="Buy -1%" onPress={this.buy} />
        </View>
        <View style={styles.sell}>
          <Button color={White} title="Sell +1%" onPress={this.sell} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: Black,
    width: '100%',
    flexDirection: 'row'
  },
  buy: {
    backgroundColor: Green,
    flex: 1,
    marginRight: 1
  },
  sell: {
    backgroundColor: Red,
    flex: 1,
    marginLeft: 1
  }
})

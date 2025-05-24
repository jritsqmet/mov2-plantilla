import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen( {navigation}: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Ingresar</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btn}>WelcomeScreen</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 20,
  }, 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
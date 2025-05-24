import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function EliminarScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Eliminar</Text>

      <Text>EliminarScreen</Text>
      <TextInput
        placeholder='CI'
        style={styles.input} />
      <Button
        title='Eliminar'
        onPress={() => {
          console.log('Datos eliminados')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    marginBottom: 10,
  }
})
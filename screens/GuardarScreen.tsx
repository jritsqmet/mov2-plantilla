import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function GuardarScreen() {
  const [ci, setCi] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [edad, setEdad] = useState('')

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Guardar</Text>
      <TextInput
        placeholder='CI'
        style={ styles.input}
        value={ci}
        onChangeText={setCi}
      />
      <TextInput
        placeholder='Nombre'
        style={ styles.input}
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        placeholder='Apellido'
        style={ styles.input}
        value={apellido}
        onChangeText={setApellido}
      />
      <TextInput
        placeholder='Edad'
        style={styles.input}
        value={edad}
        onChangeText={setEdad}
      />
      <Button
        title='Guardar'
        onPress={() => {
          console.log('Datos guardados:', { ci, nombre, apellido, edad })
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
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
})
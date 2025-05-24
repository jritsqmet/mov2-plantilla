import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { supabase } from '../supabase/Config'

export default function EliminarScreen() {
  const [ci, setci] = useState("")

  async function eliminar() {
    const { error } = await supabase
      .from('usuarios')
      .delete()
      .eq('ci', ci)
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Eliminar</Text>
      <Text>EliminarScreen</Text>
      <TextInput
        placeholder='CI'
        style={styles.input} 
        onChangeText={ (texto)=> setci(texto)}
        value={ci}
      />
      <Button
        title='Eliminar'
        onPress={() => eliminar()}
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
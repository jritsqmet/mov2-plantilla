import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../supabase/Config'

export default function LeerScreen() {

  const [datos, setdatos] = useState([])

  async function leer() {

    let { data: usuarios, error }: any = await supabase
      .from('usuarios')
      .select('*') 

    setdatos(usuarios)
  }

  useEffect(() => {
    leer()
    console.log(datos);
  }, [])
  

  return (
    <View>
      <FlatList 
        data= {datos}
        renderItem={ ( {item} : any ) =>  
          <View> 
            <Text>{item.nombre}</Text>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({})
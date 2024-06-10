import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, Modal } from 'react-native'
import Logo from './src/assets/Logo.svg'
import Load from './src/components/Load.js'
import { Navbar } from './src/components/Navbar.js'
import { Stats } from './src/screens/Stats.js'

export default function App () {
  // const [products, setProducts] = useState([
  //   { title: 'hola', selected: true },
  //   { title: 'este no', selected: false },
  //   { title: 'este si', selected: true },
  //   { title: 'adios', selected: false },
  //   { title: 'algo', selected: true },
  //   { title: 'nose', selected: false }
  // ])
  const [modal, setModal] = useState(true)
  const [tab, setTab] = useState()

  useEffect(() => {
    const timer = setTimeout(() => {
      setModal(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={styles.screen}>
      <Modal visible={modal} transparent animationType='fade'>
        <View style={styles.modal}>
          <Logo width={200} height={200} />
          <Load size={100} strokeWidth={10} />
          <StatusBar hidden />
        </View>
      </Modal>

      <StatusBar style='auto' />
      <Text> BETA 3.2 </Text>
      {tab}
      <Navbar onChangeTab={setTab} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'silver'
  },
  container: {
    flex: 1,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    gap: 30
  },
  buttons: {
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'flex-end',
    bottom: 75,
    right: 20,
    fontSize: 30,
    borderRadius: 10,
    gap: 10
  },
  button: {
    padding: 10,
    backgroundColor: '#aaa',
    borderRadius: 10
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
})

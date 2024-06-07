import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, ScrollView, Text, TouchableHighlight, Modal } from 'react-native'
import { ProductItem } from './src/components/ProductItem'
import Logo from './src/assets/Logo.svg'
import Load from './src/components/Load.js'

export default function App () {
  const [products, setProducts] = useState([
    { title: 'hola', selected: true },
    { title: 'este no', selected: false },
    { title: 'este si', selected: true },
    { title: 'adios', selected: false },
    { title: 'algo', selected: true },
    { title: 'nose', selected: false }
  ])
  const [modal, setModal] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setModal(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const selectedItems = products.filter(item => item.selected)
  const renderSelectedItems = selectedItems.map((item, idx) => (
    <ProductItem key={`i${idx}`} text={item.title} />
  ))

  return (
    <View style={styles.screen}>
      <Modal visible={modal} transparent animationType='fade'>
        <View style={styles.modal}>
          <Logo width={200} height={200} />
          <Load size={100} strokeWidth={10} />
          <StatusBar hidden />
        </View>
      </Modal>

      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.list, styles.selectedItems]}>
            {renderSelectedItems}
          </View>

          <View style={[styles.list, styles.unselectedList]}>
            {products.filter(item => {
              return !item.selected
            }).map((item, idx) => {
              return <ProductItem key={`i${idx}`} text={item.title} />
            })}
          </View>
        </View>
      </ScrollView>

      <StatusBar style='auto' />
      <TouchableHighlight style={styles.add}><Text>+</Text></TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    gap: 30
  },
  list: {
    gap: 10,
    borderRadius: 15,
    padding: 20,
    width: '90%'
  },
  selectedItems: {
    backgroundColor: '#efe'
  },
  unselectedList: {
    backgroundColor: '#fee'
  },
  add: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    fontSize: 30
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
})

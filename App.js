import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, ScrollView, Text, TouchableHighlight } from 'react-native'
import { useState } from 'react'
import { ProductItem } from './src/components/ProductItem'

export default function App () {
  const [products, setProducts] = useState([
    {
      title: 'hola',
      selected: true
    },
    {
      title: 'este no',
      selected: false
    },
    {
      title: 'este si',
      selected: true
    },
    {
      title: 'adios',
      selected: false
    },
    {
      title: 'algo',
      selected: true
    },
    {
      title: 'nose',
      selected: false
    }
  ])
  const selectedItems = products.filter(item => {
    return item.selected
  })
  const renderSelectedItems = selectedItems.map((item, idx) => {
    return <ProductItem key={`i${idx}`} text={item.title} />
  })
  return (
    <View style={styles.screen}>
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
        <StatusBar style='auto' />
      </ScrollView>
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

  }
})

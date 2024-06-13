import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { PlusIcon, CreditCardIcon } from 'react-native-heroicons/outline'

export function List () {
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Text>List</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}><PlusIcon size={30} color='#222' strokeWidth={3} /></TouchableOpacity>
        <TouchableOpacity style={styles.button}><CreditCardIcon size={40} color='#222' /></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
  }
})

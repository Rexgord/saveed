import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { IconPlus, IconCreditCardPay } from '@tabler/icons-react-native'

export function List () {
  return (
    <View>
      <Text>List</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}><IconPlus size={30} color='#222' /></TouchableOpacity>
        <TouchableOpacity style={styles.button}><IconCreditCardPay size={40} color='#222' /></TouchableOpacity>
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

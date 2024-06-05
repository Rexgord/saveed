import { View, Text, StyleSheet } from 'react-native'

export function ProductItem ({ image, text }) {
  return (
    <View style={styles.item}>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagen: {
    width: 50,
    aspectRatio: 1,
    marginTop: 100,
    marginRightc: 50
  }
})

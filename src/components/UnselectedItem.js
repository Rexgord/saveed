import { View, Image, StyleSheet } from 'react-native'
import Icon from '../assets/favicon.png'

export function UnselectedItem () {
  return (
    <View style={styles.item}>
      <Image source={Icon} style={styles.imagen} />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%'
  },
  imagen: {
    width: '100%',
    aspectRatio: 1,
    marginTop: 100,
    marginRightc: 50
  }
})

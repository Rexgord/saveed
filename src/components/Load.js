import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Animated, Easing, Text } from 'react-native'

export default function Load () {
  const circleAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(circleAnim, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    )

    animation.start()

    return () => animation.stop()
  }, [circleAnim])

  const angle = circleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Animated.View style={[styles.line, { transform: [{ rotate: angle }] }]} />
        <Text style={styles.text}>Load...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%'
  },
  line: {
    width: 100,
    height: 0,
    borderBottomWidth: 7,
    borderColor: 'pink'
  },
  text: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 20
  }
})

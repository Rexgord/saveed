import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { IconChartDonut, IconLayoutList, IconShoppingCart, IconChartDonutFilled, IconLayoutListFilled, IconShoppingCartFilled } from '@tabler/icons-react-native'

import { List } from '../screens/List'
import { Stats } from '../screens/Stats'
import { Purchases } from '../screens/Purchases'
import { useEffect, useState } from 'react'

const screens = {
  stats: Stats,
  list: List,
  purchases: Purchases
}

export function Navbar ({ onChangeTab }) {
  const [tab, setTab] = useState('stats')
  useEffect(() => {
    onChangeTab(screens[tab])
  }, [])
  const handleTab = (tab) => {
    onChangeTab(screens[tab])
    setTab(tab)
  }
  return (
    <View style={styles.TabNavigation}>
      <TouchableOpacity>
        {tab === 'stats'
          ? <IconChartDonut size={45} color='#000' fill='#000' onPress={() => handleTab('stats')} />
          : <IconChartDonut size={45} color='#000' onPress={() => handleTab('stats')} />}
      </TouchableOpacity>
      <TouchableOpacity>
        {tab === 'list'
          ? <IconLayoutList size={45} color='#000' fill='#000' onPress={() => handleTab('list')} />
          : <IconLayoutList size={45} color='#000' onPress={() => handleTab('list')} />}
      </TouchableOpacity>
      <TouchableOpacity>
        {tab === 'purchases'
          ? <IconShoppingCartFilled size={45} color='#000' fill='#000' onPress={() => handleTab('purchases')} />
          : <IconShoppingCart size={45} color='#000' onPress={() => handleTab('purchases')} />}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  TabNavigation: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 0,
    gap: 10,
    height: 65,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    backgroundColor: '#888',
    width: '100%',
    justifyContent: 'space-evenly'
  }
})

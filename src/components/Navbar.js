import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { ChartPieIcon, ClipboardDocumentListIcon, ShoppingCartIcon } from 'react-native-heroicons/outline'
import {
  ChartPieIcon as ChartPieIconSolid,
  ClipboardDocumentListIcon as ClipboardDocumentListIconSolid,
  ShoppingCartIcon as ShoppingCartIconSolid
} from 'react-native-heroicons/solid'

import { List } from '../screens/List'
import { Stats } from '../screens/Stats'
import { Purchases } from '../screens/Purchases'
import { useEffect, useState } from 'react'

const screens = {
  stats: <Stats />,
  list: <List />,
  purchases: <Purchases />
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
          ? <ChartPieIconSolid size={45} color='#000' onPress={() => handleTab('stats')} />
          : <ChartPieIcon size={45} color='#000' onPress={() => handleTab('stats')} />}
      </TouchableOpacity>
      <TouchableOpacity>
        {tab === 'list'
          ? <ClipboardDocumentListIconSolid size={45} color='#000' onPress={() => handleTab('list')} />
          : <ClipboardDocumentListIcon size={45} color='#000' onPress={() => handleTab('list')} />}
      </TouchableOpacity>
      <TouchableOpacity>
        {tab === 'purchases'
          ? <ShoppingCartIconSolid size={45} color='#000' fill='#000' onPress={() => handleTab('purchases')} />
          : <ShoppingCartIcon size={45} color='#000' onPress={() => handleTab('purchases')} />}
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

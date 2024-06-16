import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Logo from '../assets/Logo.svg';

export function Stats() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Your Stats</Text>
      <Text style={styles.txtmin}>{currentDate}</Text>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.totalSaved}>
            <Text style={styles.subt}>Total ahorrado</Text>
          </View>

          <View style={styles.icon}>
            <Logo width={90} height={90} />
          </View>

          <View style = {styles.DateStats}>
            <View style={styles.date}>
              <Text style={styles.subt}>Día</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.subt}>Semana</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.subt}>Mes</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.subt}>Año</Text>
            </View>
          </View>

          <View style={styles.totalSpent}>
            <Text style = {styles.subt}>Total gastado</Text>
          </View>

          <View style = {styles.DateStats}>
            <View style={styles.date}>
              <Text style={styles.subt}>Día</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.subt}>Semana</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.subt}>Mes</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.subt}>Año</Text>
            </View>
          </View>
          
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    bottom: '6%'
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#aaaaaa',
    height: 100,
    width: '30%',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  DateStats: {
    backgroundColor: '#aaaaaa',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '93%',
    borderRadius: 10
  },
  date: {
    backgroundColor: '#999999',
    height: 100,
    width: '43%',
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  subt: {
    fontSize: 20,
  },
  totalSaved: {
    backgroundColor: '#aaaaaa',
    height: 100,
    width: '60%',
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  totalSpent: {
    backgroundColor: '#aaaaaa',
    height: 100,
    width: '93%',
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  txtmin: {
    fontSize: 10,
    marginBottom: 10,
  },
});


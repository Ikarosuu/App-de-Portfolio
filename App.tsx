import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MainScreen from './src/screens/MainScreen'
import SkillScreen from './src/screens/SkillScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen/>
      <SkillScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './src/screens/MainScreen'
import SkillScreen from './src/screens/SkillScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={MainScreen} options={{title: 'Meu portfólio'}}/>
        <Stack.Screen name='Skills' component={SkillScreen} options={{title: 'Habilidades'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

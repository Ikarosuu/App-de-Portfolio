import {createStackNavigator} from '@react-navigation/stack'

const { Screen, Navigator } = createStackNavigator()

import MainScreen from '../screens/MainScreen'
import SkillScreen from '../screens/SkillScreen'

export function StackRoutes(){
    return(
        <Navigator>
            <Screen name='Main' component={MainScreen} options={{title: 'Meu portfólio'}}/>
            <Screen name='Skills' component={SkillScreen} options={{title: 'Habilidades'}}/>
        </Navigator>
    )
}
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import photo from '../../assets/photo.png'
import { styles } from './MainScreenStyles'

export default function MainScreen() {
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <Image source={photo} style={styles.photo}/>
            <Text style={styles.name}>ìcaro Ribeiro Pereira</Text>

            <TouchableOpacity onPress={()=> Linking.openURL('https://www.linkedin.com/in/icarorp/')}>
                <Text style={styles.link}>🔗 LinkedIn</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> Linking.openURL('https://github.com/IcaroRP')}>
                <Text style={styles.link}>🗂️ GitHub 1</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> Linking.openURL('https://github.com/Ikarosuu/')}>
                <Text style={styles.link}>🗂️ GitHub 2</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> Linking.openURL('mailto: icaroribeiroam@gmail.com')}>
                <Text style={styles.link}>✉️ Email</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton} onPress={()=> navigation.navigate('Skills' as never)}>Habilidades</Text>
            </TouchableOpacity>
            <StatusBar style='auto'/>
        </View>
    )
}
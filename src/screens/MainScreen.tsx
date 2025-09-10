import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import photo from '../../assets/icon.png'

export default function MainScreen() {
    //const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <Image source={photo} style={styles.photo}/>
            <Text style={styles.name}>Nome Completo</Text>

            <TouchableOpacity>
                <Text style={styles.link}>LinkedIn</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.link}>GitHub</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.link}>Email</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Habilidades</Text>
            </TouchableOpacity>
            <StatusBar style='auto'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    photo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    link:{
        fontSize: 18,
        color: 'blue',
        marginVertical: 8
    },
    button: {
        marginTop: 30, 
        backgroundColor: 'blue',
        padding: 12,
        borderRadius: 8,
    },
    textButton:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
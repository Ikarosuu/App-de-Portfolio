import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import photo from '../../assets/icon.png'
import { StatusBar } from 'expo-status-bar'

const skills =[
    {
        id: '1', name: 'JavaScript', level: '⭐⭐⭐'
    },
    {
        id: '2', name: 'React Native', level: '⭐⭐⭐'
    },
    {
        id: '3', name: 'Node.js', level: '⭐⭐'
    },
    {
        id: '4', name: 'Python', level: '⭐⭐⭐⭐'
    },
]

export default function SkillScreen() {
    return(
        <View style={styles.container}>
            <Image source={photo} style={styles.photo}/>
            <Text style={styles.name}>Nome Completo</Text>
            <Text style={styles.sibtitle}>Minhas Habilidades</Text>
            
            <FlatList 
                data={skills} 
                keyExtractor={(item)=> item.id} 
                renderItem={({item}) => (
                    <View style={styles.skillItem}>
                        <Text style={styles.skillName}>{item.name}</Text>
                        <Text style={styles.skillLevel}>{item.level}</Text>
                    </View>
            )}/>
            <StatusBar style='auto'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    photo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20
    },
    name:{
        fontSize: 22,
        fontWeight: 'bold'
    },
    sibtitle:{
        fontSize: 18,
        marginVertical: 15,
        color: '#343434ff'
    },
    skillName:{
        fontSize: 16
    },
    skillItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#cbcbcbff'
    },
    skillLevel:{
        fontSize: 16,
    }
})
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import photo from '../../assets/photo.png'
import { StatusBar } from 'expo-status-bar'
import { styles } from './SkillScreenStyles'

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
            <Text style={styles.name}>Ícaro Ribeiro Pereira</Text>
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
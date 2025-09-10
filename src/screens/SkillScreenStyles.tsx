import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
});
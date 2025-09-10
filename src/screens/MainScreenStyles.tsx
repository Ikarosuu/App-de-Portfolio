import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
});
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: "center",
      alignItems: 'center',
    },
    texto: {
      color: '#800000',
      fontSize: 25,
      textAlign: 'center',
    },
    legenda: {
      color: 'blue',
      fontSize: 18,
    },
    button: {
      backgroundColor: 'blue',
      opacity: 0.6,
      alignItems: 'center',
      justifyContent: 'center',
      width: 200,
      height: 50,
      padding: 20,
      marginTop: 10,
      borderRadius: 20,
    },
    imagem: {
      width: 300,
      height: 300,
      borderRadius: 30,
      marginBottom: 50,
      opacity: 0.8,
    },
    caixa: {
      width: 200,
      backgroundColor: 'blue',
      fontSize: 25,
      padding: 10,
      marginTop: 10,
      borderRadius: 15,
    },
    textButton: {
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    link: {
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textLink: {
      marginTop: 10,
      fontSize: 15,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'blue',
    }
});

export default styles;
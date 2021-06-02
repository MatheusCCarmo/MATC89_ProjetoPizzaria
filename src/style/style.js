import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    justifyContent: "center",
    alignItems: 'center',
  },
  texto: {
    color: '#2f3640',
    fontSize: 25,
    textAlign: 'center',
  },
  legenda: {
    color: 'blue',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#c23616',
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
    backgroundColor: 'white',
    fontSize: 25,
    padding: 10,
    marginTop: 10,
    borderRadius: 15,
  },
  textButton: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
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
    color: '#0097e6',
    fontWeight: '600',
  },
  titulo: {
    fontWeight: '600',
    color: '#2f3640',
    fontSize: 28,
    textAlign: 'center',
  },
  secao: {
    height: 28,
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#44bd32',
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  secaoTamanho: {
    height: 48,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignContent: 'space-between',
  },
  opcaoTamanho: {
    flex: 1,
    backgroundColor: 'blue',
    alignSelf: 'center',
    alignItems: 'center',
  },
  opcaoTamanhoSelecionado: {
    flex: 1,
    backgroundColor: 'black',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default styles;
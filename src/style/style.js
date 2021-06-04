import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#C23616',
    justifyContent: "center",
    alignItems: 'center',
  },
  texto: {
    color: '#f5f6fa',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '500',
  },
  legenda: {
    color: 'blue',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#8c7ae6',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
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
    fontSize: 20,
    padding: 10,
    marginTop: 10,
    borderRadius: 15,
  },
  textButton: {
    fontSize: 18,
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
    color: '#f5f6fa',
    fontWeight: '600',
    textDecorationLine: 'underline'
  },
  titulo: {
    fontWeight: '600',
    color: '#f5f6fa',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
  },
  tituloPrincipal: {
    fontWeight: '600',
    color: '#f5f6fa',
    fontSize: 48,
    textAlign: 'center',
    fontFamily: 'georgia',
    marginBottom: 60,
  },
  secao: {
    height: 28,
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#2f3640',
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  secaoTamanho: {
    flex: 0.8,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  secaoSabores: {
    flex: 0.5,
    width: 'stretch',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  opcao: {
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 3,
    backgroundColor: '#dcdde1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  opcaoSelecionado: {
    flex: 1,
    marginHorizontal: 4,
    marginVertical: 3,
    backgroundColor: '#7f8fa6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  textOpcao: {
    fontSize: 16,
    color: '#2f3640',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
  },
  textOpcaoSelecionado: {
    fontSize: 14,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
  },
  buttonPedido: {
    backgroundColor: '#8c7ae6',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 3,
    height: 50,
    padding: 16,
    borderRadius: 20,
  },
  containerCadastro: {
    flex: 1,
    padding: 50,
    backgroundColor: '#C23616',
    justifyContent: "center",
    alignItems: 'center',
  },

  tituloCadastro: {
    alignItems: 'center',
    fontSize: 36,
    color: '#f5f6fa',
    marginBottom: 20,
    fontWeight: '600',
  },

  textoCadastro: {
    alignItems: 'center',
    fontSize: 15,
    color: '#F5F6FA',
    marginBottom: 30,
  },

  caixaDeTexto: {
    fontSize: 20,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#f5f6fa',
    width: 250,
    height: 50,
    textAlign: 'center',
  },

  tituloCadastroRealizado: {
    alignItems: 'center',
    fontSize: 45,
    color: '#f5f6fa',
    marginBottom: 20,
    //fontFamily: 'Lemon',
  },

  textoCadastroRealizado: {
    alignItems: 'center',
    fontSize: 25,
    color: '#F5F6FA',
    marginVertical: 100,
  }
});

export default styles;
import React, { Component } from 'react';

import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../style/style';


// const OpcaoTamanho = (props) => {
//     return (
//         <TouchableOpacity style={props.isSelected ? styles.opcaoTamanhoSelecionado : styles.opcaoTamanho} onPress={props.selecionaOpcao(props.key)}>
//             <Text>{props.tamanho}</Text>
//             <Text>{props.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
//         </TouchableOpacity >

//     );
// }

class Menu extends Component {
    state = {
        tamanho: 'grande',
        pizzas: [
            { key: 0, tamanho: 'Pequena', preco: 20, isSelected: false },
            { key: 1, tamanho: 'Média', preco: 28, isSelected: false },
            { key: 2, tamanho: 'Grande', preco: 36, isSelected: false },
            { key: 3, tamanho: 'Família', preco: 40, isSelected: false },
        ],
    }
    selecionaOpcao = (keyEscolhido) => {
        this.setState((state) => {
            state.pizzas.forEach(element => {
                if (element.key != keyEscolhido) {
                    element.isSelected = false;
                } else {
                    element.isSelected = true;
                }
            });
        })
    }


    render() {
        const { navigation } = this.props;
        const nomeUsuario = navigation.getParam('nome');

        return (
            <View style={styles.container}>
                {/*<Image source={require('../images/img2.png')} style={styles.imagem}/>*/}
                <Text style={styles.titulo}>Olá {nomeUsuario}, bem vindo!</Text>
                <Text style={styles.titulo}>Monte sua pizza!</Text>

                <Text style={styles.secao}>Tamanho</Text>
                <View style={styles.secaoTamanho}>
                    {/* {this.state.pizzas.map((e) => {
                        <TouchableOpacity style={e.isSelected ? styles.opcaoTamanhoSelecionado : styles.opcaoTamanho} onPress={this.selecionaOpcao(e.key)}>
                            <Text>{e.tamanho}</Text>
                            <Text>{e.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
                        </TouchableOpacity >
                    })} */}
                    
                    <TouchableOpacity style={this.state.pizzas[0].isSelected ? styles.opcaoTamanhoSelecionado : styles.opcaoTamanho} onPress={this.selecionaOpcao(this.state.pizzas[0].key)}>
                        <Text>{this.state.pizzas[0].tamanho}</Text>
                        <Text>{this.state.pizzas[0].preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={this.state.pizzas[1].isSelected ? styles.opcaoTamanhoSelecionado : styles.opcaoTamanho} onPress={this.selecionaOpcao(this.state.pizzas[1].key)}>
                        <Text>{this.state.pizzas[1].tamanho}</Text>
                        <Text>{this.state.pizzas[1].preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={this.state.pizzas[2].isSelected ? styles.opcaoTamanhoSelecionado : styles.opcaoTamanho} onPress={this.selecionaOpcao(this.state.pizzas[2].key)}>
                        <Text>{this.state.pizzas[2].tamanho}</Text>
                        <Text>{this.state.pizzas[2].preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={this.state.pizzas[3].isSelected ? styles.opcaoTamanhoSelecionado : styles.opcaoTamanho} onPress={this.selecionaOpcao(this.state.pizzas[3].key)}>
                        <Text>{this.state.pizzas[3].tamanho}</Text>
                        <Text>{this.state.pizzas[3].preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
                    </TouchableOpacity >
                </View>

                <Text style={styles.secao}>Sabores</Text>




                <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('Espera') }}>
                    <Text style={styles.textButton}>Finalizar Pedido</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('Espera') }}>
                    <Text style={styles.textButton}>Sair</Text>
                </TouchableOpacity>

            </View>
        );
    }
};

//make this component available to the app
export default Menu;
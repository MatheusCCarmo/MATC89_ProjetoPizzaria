import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../style/style';


const OpcaoTamanho = ({ id, tamanho, isSelected, callback, maxSabores }) => {
    return (
        <TouchableOpacity style={isSelected ? styles.opcaoSelecionado : styles.opcao} onPress={() => callback(id)}>
            <Text style={isSelected ? styles.textOpcaoSelecionado : styles.textOpcao}>{tamanho}</Text>
            <Text style={isSelected ? styles.textOpcaoSelecionado : styles.textOpcao}>{maxSabores} sabores</Text>
        </TouchableOpacity >

    );
}

const OpcaoSabor = ({ id, sabor, isSelected, callback }) => {
    return (
        <TouchableOpacity style={isSelected ? styles.opcaoSelecionado : styles.opcao} onPress={() => callback(id)}>
            <Text style={isSelected ? styles.textOpcaoSelecionado : styles.textOpcao}>{sabor}</Text>
        </TouchableOpacity >

    );
}
class Menu extends Component {

    state = {
        tamanho_escolhido: { id: 2, tamanho: 'Grande', preco: 36, isSelected: true, qntMaxSabores: 4 },
        lista_tamanhos: [
            { id: 0, tamanho: 'Pequena', preco: 20, isSelected: false, qntMaxSabores: 2 },
            { id: 1, tamanho: 'Média', preco: 28, isSelected: false, qntMaxSabores: 2 },
            { id: 2, tamanho: 'Grande', preco: 36, isSelected: true, qntMaxSabores: 4 },
            { id: 3, tamanho: 'Família', preco: 40, isSelected: false, qntMaxSabores: 4 },
        ],
        sabores_escolhidos: [],
        lista_sabores: [
            { id: 0, sabor: 'Atum', isSelected: false },
            { id: 1, sabor: 'Calabresa', isSelected: false },
            { id: 2, sabor: 'Portuguesa', isSelected: false },
            { id: 3, sabor: '4 Queijos', isSelected: false },
            { id: 4, sabor: 'Pepperoni', isSelected: false },
            { id: 5, sabor: 'Frango', isSelected: false },
            { id: 6, sabor: 'Muçarela', isSelected: false },
            { id: 7, sabor: 'Brigadeiro', isSelected: false },
            { id: 8, sabor: 'Marguerita', isSelected: false },
            { id: 9, sabor: 'Peito de Peru', isSelected: false },
            { id: 10, sabor: 'Romeu e Julieta', isSelected: false },
            { id: 11, sabor: 'Bacon', isSelected: false },
        ],
    }

    selecionaTamanho = async (idEscolhido) => {
        let maxSabores = this.state.lista_tamanhos[idEscolhido].qntMaxSabores;
        if (this.state.sabores_escolhidos.length > maxSabores) {
            console.log("Este tamanho só aceita " + maxSabores + "sabores. Diminua a quantidade de sabores para mudar o tamanho da pizza.");
            alert("Este tamanho só aceita " + maxSabores + ". Diminua a quantidade de sabores para mudar o tamanho da pizza.");
            return;
        }
        for (let i = 0; i < this.state.lista_tamanhos.length; i++) {
            if (this.state.lista_tamanhos[i].id != idEscolhido) {
                let lista_tamanhos = await [...this.state.lista_tamanhos];
                lista_tamanhos[i] = { ...lista_tamanhos[i], isSelected: false };
                this.setState({ lista_tamanhos });
            } else {
                let lista_tamanhos = await [...this.state.lista_tamanhos];
                let item = { ...lista_tamanhos[i] };
                item.isSelected = true;
                lista_tamanhos[i] = item;
                this.setState({ lista_tamanhos });
                this.setState({ tamanho_escolhido: this.state.lista_tamanhos[i] });
            }
        }
    }

    selecionaSabores = async (idEscolhido) => {
        let maxSabores = this.state.tamanho_escolhido.qntMaxSabores;
        let sabores_escolhidos = await [...this.state.sabores_escolhidos];
        let lista_sabores = await [...this.state.lista_sabores];
        let qntSabores = sabores_escolhidos.length;
        let item = { ...lista_sabores[idEscolhido] };

        if (lista_sabores[idEscolhido].isSelected) {
            lista_sabores[idEscolhido] = { ...lista_sabores[idEscolhido], isSelected: false };
            this.setState({ lista_sabores });
            let index = sabores_escolhidos.indexOf(lista_sabores[idEscolhido]);
            sabores_escolhidos.splice(index, 1);
            this.setState({ sabores_escolhidos });
            return;
        }
        if (qntSabores >= maxSabores) {
            console.log("Você não pode adicionar mais sabores.");
            alert("Você não pode adicionar mais sabores.");
        } else {
            item.isSelected = true;
            lista_sabores[idEscolhido] = item;
            this.setState({ lista_sabores });
            sabores_escolhidos.push(this.state.lista_sabores[idEscolhido]);
            this.setState({ sabores_escolhidos });
        }
    }


    validarPedido = (nomeUsuario) => {
        if (this.state.sabores_escolhidos.length > 0) {
            this.props.navigation.navigate('Finalizado', { 'nome': nomeUsuario, 'valor': this.state.tamanho_escolhido.preco })
        } else {
            console.log("Escolha algum sabor.");
            alert("Escolha algum sabor.");
        }
    }



    render() {
        const { navigation } = this.props;
        const nomeUsuario = navigation.getParam('nome');

        let opcoesTamanhos = [];
        this.state.lista_tamanhos.forEach(e => opcoesTamanhos.push(
            <OpcaoTamanho key={e.id} id={e.id} tamanho={e.tamanho} maxSabores={e.qntMaxSabores} isSelected={e.isSelected} callback={this.selecionaTamanho} />
        ));

        let opcoesSabores = [];
        this.state.lista_sabores.forEach(e => opcoesSabores.push(
            <OpcaoSabor key={e.id} id={e.id} sabor={e.sabor} isSelected={e.isSelected} callback={this.selecionaSabores} />
        ));


        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Olá {nomeUsuario}, bem vindo!</Text>
                <Text style={styles.titulo}>Monte sua pizza!</Text>

                <Text style={styles.secao}>Tamanho</Text>
                <View style={styles.secaoTamanho}>
                    {opcoesTamanhos}
                </View>

                <Text style={styles.secao}>Sabores</Text>
                <View style={styles.secaoSabores}>
                    {opcoesSabores[0]}
                    {opcoesSabores[1]}
                </View>
                <View style={styles.secaoSabores}>
                    {opcoesSabores[2]}
                    {opcoesSabores[3]}
                </View>
                <View style={styles.secaoSabores}>
                    {opcoesSabores[4]}
                    {opcoesSabores[5]}
                </View>
                <View style={styles.secaoSabores}>
                    {opcoesSabores[6]}
                    {opcoesSabores[7]}
                </View>
                <View style={styles.secaoSabores}>
                    {opcoesSabores[8]}
                    {opcoesSabores[9]}
                </View>
                <View style={styles.secaoSabores}>
                    {opcoesSabores[10]}
                    {opcoesSabores[11]}
                </View>


                <View style={{ marginVertical: 6, alignSelf: 'stretch', alignItems: 'center' }}>
                    <Text style={styles.texto}>Valor: {this.state.tamanho_escolhido.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
                </View>

                <View style={{ flexDirection: 'row', marginVertical: 16, alignSelf: 'stretch' }}>
                    <TouchableOpacity style={styles.buttonPedido} onPress={() => { this.props.navigation.navigate('Login') }}>
                        <Text style={styles.textButton}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonPedido} onPress={() => { this.validarPedido(nomeUsuario) }}>
                        <Text style={styles.textButton}>Finalizar Pedido</Text>
                    </TouchableOpacity>

                </View>

            </View>
        );

    }
};

//make this component available to the app
export default Menu;
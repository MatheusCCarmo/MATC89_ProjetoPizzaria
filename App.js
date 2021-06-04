import React, { Component } from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/components/Login';
import Menu from './src/components/Menu';
import CadastroRealizado from './src/components/CadastroRealizado';
import Cadastro from './src/components/Cadastro'; 

const MainNavigation = createStackNavigator({
  CadastroRealizado: {
    screen: CadastroRealizado,
    navigationOptions: {
      header: null
    }
  },
  
  Cadastro: {
    screen: Cadastro,
    navigationOptions: {
      header: null
    }
  },

  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },

  Menu: {
    screen: Menu,
    navigationOptions: {
      headerTitle: 'Menu',
    }
  },

  
})

export default createAppContainer(MainNavigation);
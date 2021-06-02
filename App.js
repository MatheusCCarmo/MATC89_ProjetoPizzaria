import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/components/Login';
import Menu from './src/components/Menu';
import Espera from './src/components/Espera';
import Cadastro from './src/components/Cadastro';

const MainNavigation = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: {
      headerTitle: 'Menu',
    }
  },

  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },

  Espera: {
    screen: Espera,
    navigationOptions: {
      header: null
    }
  },

  Cadastro: {
    screen: Cadastro,
    navigationOptions: {
      headerTitle: 'Cadastro',
    }
  }
})

export default createAppContainer(MainNavigation);
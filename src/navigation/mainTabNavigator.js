import React from "react"
import {Platform, Image} from "react-native"
import {createStackNavigator, createBottomTabNavigator} from "react-navigation"
import CryptoListScreen from "../screens/cryptoList"
import CryptoFavouriteScreen from "../screens/cryptoFavourite"
import Colors from '../utils/constants'

const CryptoListStack = createStackNavigator({Cryptos: CryptoListScreen});

CryptoListStack.navigationOptions = {
  tabBarLabel: "LIVE",
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
        {
          return (
            <Image
              source={ require('../utils/images/bitcoin.png') }
              style={{ width: 24, height: 24, }} />
          );
        }
      },
  tabBarOptions: {
  activeTintColor: Colors.primaryColor,
  inactiveTintColor: Colors.darkGreyColor,
  labelStyle: {
    fontSize: 10,
  },
  style: {
    backgroundColor: 'white',
  },
  }
}

const CryptoFavouriteStack = createStackNavigator({Favourites: CryptoFavouriteScreen});

CryptoFavouriteStack.navigationOptions = {
  tabBarLabel: "FAV",
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
        {
          return (
            <Image
              source={ require('../utils/images/heart.png') }
              style={{ width: 24, height: 24, }} />
          );
        }
      },
  tabBarOptions: {
  activeTintColor: Colors.primaryColor,
  inactiveTintColor: Colors.darkGreyColor,
  labelStyle: {
    fontSize: 10,
  },
  style: {
    backgroundColor: 'white',
  },
  }
}

export default createBottomTabNavigator({CryptoListStack, CryptoFavouriteStack});

import React from 'react';
import { StyleSheet, Text, View, Stack, Button, Group} from 'react-native';
import { Header } from 'react-native-elements';


import {createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { FontAwesome } from '@expo/vector-icons';
import Welcome from './screens/Welcome';
import CreateGroup from './screens/CreateGroup';
import homePage from './screens/homePage';
import Map from './screens/Map';
import Favorite from './screens/Favorite';
import Profil from './screens/Profil';
import GlobalGroup from './screens/GlobalGroup';
import List from './screens/List';
import Recipe from './screens/Recipe';
import GlobalList from './screens/GlobalList';
import RecipeHome from './screens/recipeHome';
import MesGroupes from './screens/MesGroupes'; //à supprimé apres creation du bouton d'acces à mes groupes dans GroupI 
import GroupI from './screens/Group';
import recipe from './reducers/recipeInfo';
import MesGroupesP12 from './screens/MesGroupesP12';
import {Provider} from 'react-redux';
import GroupPopUpPartage from'./screens/GroupePopUpPartage'

import {createStore, combineReducers}  from 'redux';
import GroupePopUpPartage from './screens/GroupePopUpPartage';

const store = createStore(combineReducers({recipe}));

var BottomNavigator = createBottomTabNavigator({
  Favorite: Favorite,
  GlobalGroup: GlobalGroup,
  Home: homePage,
  Map: Map,
  Profil: Profil, 
  List:List,
  GroupI: GroupI,
  MesGroupes:MesGroupes,
  MesGroupesP12:MesGroupesP12,
  GroupePopUpPartage:GroupePopUpPartage
},
// {
//   backBehavior: 'history', 
// }, 
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      var iconName;
      
      if (navigation.state.routeName == 'Favorite') {
        iconName = 'heart-o';
      } else if (navigation.state.routeName == 'GlobalGroup') {
        iconName = "users";
      }else if (navigation.state.routeName == 'Home') {
        iconName = 'home';
      }else if (navigation.state.routeName == 'Map') {
        iconName = 'map-o';
      }else if (navigation.state.routeName == 'Profil') {
          iconName = 'user';
      }
      return <FontAwesome name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#5d5c5c',
    inactiveTintColor: '#ece9e9',
    style: {
      backgroundColor: '#fbfafa',
    }
  }  
 
})

var StackNavigator = createStackNavigator({
  Welcome: Welcome,
  CreateGroup: CreateGroup,
  List: List,
  Recipe: Recipe,
  GlobalList: GlobalList,
  RecipeHome: RecipeHome,
  Retour: BottomNavigator,
  
},
{headerMode:"none"}
);

var Navigation = createAppContainer(StackNavigator);


 export default function App() {
  return (
    
  <Provider store={store}>
   <Navigation/>
   </Provider>
   
  );
}




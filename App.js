import React, { useState } from 'react';

import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Page_Accueil from './app/screens/Page_Accueil';
import Quizz from './app/screens/Quizz';

const {Navigator, Screen} = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Navigator>
          <Screen name="Page D'Accueil" component={Page_Accueil}/>
          <Screen name="Quizz" component={Quizz}/>
      </Navigator>
    </NavigationContainer>
  );
};


export default App;
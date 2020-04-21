import { createAppContainer, createSwitchNavigator} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

import * as firebase from 'firebase'


    var firebaseConfig = {
        apiKey: "AIzaSyD4tiWcrgIBj-Ci-vwuNhSpBISH1evcKx0",
        authDomain: "helpr-react-native.firebaseapp.com",
        databaseURL: "https://helpr-react-native.firebaseio.com",
        projectId: "helpr-react-native",
        storageBucket: "helpr-react-native.appspot.com",
        messagingSenderId: "1072966241146",
        appId: "1:1072966241146:web:414dc2dc821b6b72cda4c3",
        measurementId: "G-MNGV3WNTCT"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();


      const AppStack = createStackNavigator({
          Home: HomeScreen
      })

      const AuthStack = createStackNavigator({
          Login: LoginScreen,
          Register: RegisterScreen
      })

      export default createAppContainer(
          createSwitchNavigator(
              {
                  Loading: LoadingScreen,
                  App: AppStack,
                  Auth: AuthStack
              },

              {
                  initialRouteName: "Loading"
              }       
                
          )
      );
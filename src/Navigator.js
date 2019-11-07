import React from 'react'
import {
    Text,
} from 'react-native'
import {  createAppContainer } from 'react-navigation';
import {createStackNavigator,} from 'react-navigation-stack'
import Home     from './components/CounterApp';
import Settings from './components/DetailsScreen';
import Extras   from './components/ExtraScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

 
const Navigator = createStackNavigator(
    {
        Home: {
            screen:Home,
            navigationOptions:{
                title:"H0ME"
            }
        },
        Details: {
            screen:Settings,
            navigationOptions:{
                title:"Details",
                headerRight: () => (
                    <TouchableOpacity style={{alignItems:'center',justifyContent:'center',marginEnd:20,width:100,height:80,backgroundColor:'#fff',}} onPress={() => alert('This is a button!')}>
                        <Text>Button</Text>
                    </TouchableOpacity>
                  ),
            }
        },
        Extras:  {
            screen:Extras,
            navigationOptions:{
                title:"EXTRAS"
            }
        },
    }, 
    {
        initialRouteName: 'Home',
        defaultNavigationOptions:{
            headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#BDBDBD',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
        }
        // headerMode: 'none'
    }
);
 
export default createAppContainer(Navigator);
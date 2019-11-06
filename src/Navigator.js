import {  createAppContainer } from 'react-navigation';
import {createStackNavigator,} from 'react-navigation-stack'
import Home     from './components/CounterApp';
import Settings from './components/DetailsScreen';
import Extras   from './components/ExtraScreen';

 
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
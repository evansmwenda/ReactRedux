import {  createAppContainer } from 'react-navigation';
import {createStackNavigator,} from 'react-navigation-stack'
import Home from './components/CounterApp';
import Settings from './components/DetailsScreen';
 
const Navigator = createStackNavigator(
    {
        Home: Home,
        Settings: Settings,
    }, 
    {
        initialRouteName: 'Home',
        // headerMode: 'none'
    }
);
 
export default createAppContainer(Navigator);
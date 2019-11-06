import {  createAppContainer } from 'react-navigation';
import {createStackNavigator,} from 'react-navigation-stack'
import Home     from './components/CounterApp';
import Settings from './components/DetailsScreen';
import Extras   from './components/ExtraScreen';

 
const Navigator = createStackNavigator(
    {
        Home: Home,
        Details: Settings,
        Extras: Extras,
    }, 
    {
        initialRouteName: 'Home',
        // headerMode: 'none'
    }
);
 
export default createAppContainer(Navigator);
import { Navigator } from '../Navigator'
import { NavigationActions } from 'react-navigation'

const initialAction = { type: NavigationActions.Init }
const initialState = Navigator.router.getStateForAction(initialAction)

// const initialState = {
//     counter:0,//initial state of the variable counter
//   }
  
  export default function counterReducer(state=initialState,action) {
    //this is a reducer
    //takes previous state and an action as arguement
    // and returns a new state
    // switch(action.type){
    //   case 'INCREASE_VALUE':
    //     return {counter:state.counter+1}
    //   case 'DECREASE_VALUE':
    //       return {counter:state.counter-1}
    // }
    return Navigator.router.getStateForAction(action, state)
  }
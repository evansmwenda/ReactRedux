const initialState = {
    counter:0,//initial state of the variable counter
  }
  
  export default function counterReducer(state=initialState,action) {
    //this is a reducer
    //takes previous state and an action as arguement
    // and returns a new state
    switch(action.type){
      case 'INCREASE_VALUE':
        return {counter:state.counter+1}
      case 'DECREASE_VALUE':
          return {counter:state.counter-1}
    }
    return state
  }
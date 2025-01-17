import { useReducer, useState } from 'react';







const Counter = () => {

  const initialState={
    count: 0,
    numberToChangeBy: 1
  }

  function reducer(state, action){
    switch(action.type){
     case 'increment':
       return {
         ...state,
          count: (parseInt(state.count,10)+parseInt(state.numberToChangeBy,10))
        }
       case 'decrement':
         return {
            ...state,
            count: (parseInt(state.count,10)-parseInt(state.numberToChangeBy,10))
          }
        case 'numChange':
          return{
            ...state,
            numberToChangeBy: action.value
          }

    
    }
    return state;

  }












    const [state, dispatch] = useReducer(reducer, initialState);
    //const [numberToChangeBy, setNumberToChangeBy] = useState(1);
    return (<div className="App">
    <pre className="rainbow box text-center">Value {state.count}</pre>
    <div className="flex gap center">
        <button className="button-box" onClick={() => dispatch({type: 'increment'} )}><span className="huge">+</span>Increment by {state.numberToChangeBy}</button>
        <button className="button-box" onClick={() => dispatch({type: 'decrement'})}><span className="huge">-</span>Decrement by {state.numberToChangeBy}</button></div>
        <p className="flex gap center"><label className="button-box" htmlFor="number">Number to Increment/Decrement by </label><input className="input-box"  onChange={(e) => dispatch({type:'numChange', value: e.target.value})} type="number" value={state.numberToChangeBy} name="number" id="number" /></p>
    </div>);
}

export default Counter;
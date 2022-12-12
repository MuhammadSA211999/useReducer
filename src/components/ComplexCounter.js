import React from 'react';
import { useReducer } from 'react';
const initialState = {
    counter: 0,
    counter2: 0

}
const reducer = (state, action) => {
    switch (action.type) {
        case "increament1":
            return { ...state, counter: state.counter + action.count };
        case "decreament1":
            return { ...state, counter: state.counter - action.count }
        case "increament2":
            return { ...state, counter2: state.counter2 + action.count };
        case "decreament2":
            return { ...state, counter2: state.counter2 - action.count }
        default:
            return state
    }
}
const ComplexCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>
                <div>count-{count.counter}</div>
                <button onClick={() => dispatch({ type: "increament1", count: 1 })} type='button'>Increament</button>
                <button onClick={() => dispatch({ type: "decreament1", count: 1 })} type='button'>Decreament</button>
            </div>
            <div>
                <div>count2-{count.counter2}</div>
                <button onClick={() => dispatch({ type: "increament2", count: 2 })} type='button'>Increament</button>
                <button onClick={() => dispatch({ type: "decreament2", count: 2 })} type='button'>Decreament</button>
            </div>
        </div>
    );
};

export default ComplexCounter;
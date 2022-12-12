import React from 'react';
import { useReducer } from 'react';
const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case "increament":
            return state + 1;
        case "decreament":
            return state - 1
        default:
            return state
    }
}
const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>count-{count}</div>
            <button onClick={() => dispatch("increament")} type='button'>Increament</button>
            <button onClick={() => dispatch("decreament")} type='button'>Decreament</button>
        </div>
    );
};

export default Counter;
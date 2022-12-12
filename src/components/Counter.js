import React from 'react';
import { useReducer } from 'react';
const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case "increament":
            return state + 1;
        case "decreament":
            return state + 1
        default:
            return state
    }
}
const Counter = () => {
    useReducer(reducer, initialState)
    return (
        <div>
            <div>count-0</div>
            <button type='button'>Increament</button>
            <button type='button'>Decreament</button>
        </div>
    );
};

export default Counter;
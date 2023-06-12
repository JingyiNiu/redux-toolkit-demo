import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../components/custom/button';
import { decrement, increment } from '../store/counterSlice';

const Counter = () => {
    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <div>{count}</div>
            <Button onClick={() => dispatch(decrement())}>decrement</Button>
            <Button onClick={() => dispatch(increment())}>increment</Button>
        </>
    );
};

export default Counter;

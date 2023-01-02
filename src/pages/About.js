import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generateNumber } from '../REDUX/actionCreators/actionCreator';
import { SixToTen } from '../REDUX/actionTypes/actionTypes';

const About = () => {
    const oneToFive = [1,2,3,4,5,6,7];

    const dispatch = useDispatch();
    const state = useSelector((state) => state)

    return (
        <div>
            <h1>About section</h1>
            <button onClick={() => dispatch(generateNumber(oneToFive))}>1 to 5</button>
            <button onClick={() => dispatch({ type: SixToTen, payload: [6, 7, 8, 9, 10] })}>6 to 10</button>
            {
                state.cart.map((num, index) => <h2 key={index}>{num}</h2>)
            }
        </div>
    )
}

export default About
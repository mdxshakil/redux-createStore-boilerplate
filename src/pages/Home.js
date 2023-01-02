import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { generateNumber } from '../REDUX/actionCreators/actionCreator';

const Home = () => {
    const oneToFive = [1,2,3,4,5];
    const sixToTen = [6,7,8,9,10];

    const dispatch = useDispatch();
    const state = useSelector((state)=>state);
  return (
    <div>
        <h1>Home Section</h1>
        <button onClick={()=>dispatch(generateNumber(oneToFive))}>1-5</button>
        <button onClick={()=>dispatch(generateNumber(sixToTen))}>6-10</button>
        {
            state.cart.map((num,i)=><h3 key={i}>{num}</h3>)
        }
    </div>
  )
}

export default Home
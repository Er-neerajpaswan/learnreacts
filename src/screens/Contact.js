//Boilerplate code:

import React, { use, useContext } from 'react'; //Hooks , stateless App
import {store} from '../store/store';
import { incrementByAmount } from '../store/reducer/reducer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CountContext } from '../context/CountContext';
import UserCard from '../components/organs/UserCard/UserCard';

function Contact() {

    const value = useSelector((state) => state.value);
    const {count, setCount} = useContext(CountContext);

    const increaseCount = () => {
        setCount(count + 1);

    };

    return (
    <div>
        <UserCard/>
        <h1>value:{value}</h1>
        <h1>count from context:{count}</h1>
        <button onClick={increment}>increase count by 1</button>
    <button 
    onClick={() => {
    store.dispatch(incrementByAmount(5))
    console.log("state updated");
    }}>
        increase count by 5
    </button>;
    <Link to="/register">take me to register screen</Link>
    </div>
    );
}

export default Contact;

//Manufactureing firm-screens
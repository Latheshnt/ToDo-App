import React from 'react';
import {add, sub, mul, div} from './Calci';

function App(){
    return(
        <>
        <ul>
            <li>Calci: {add(10,10)}</li>
            <li>Calci: {sub(20,10)}</li>
            <li>Calci: {mul(10,10)}</li>
            <li>Calci: {div(10,3)}</li>
        </ul>
        </>
    )
}

export default App;
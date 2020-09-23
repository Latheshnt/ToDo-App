import React from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' ;

function ListItems(props){
    const items = props.items
    const listItem = items.map( item =>{
        return (
            <div className='list' id={item.key}>
                <p>
                    {item.text}     
                    <span>
                        <FontAwesomeIcon className='faicons' icon='trash' onClick={() => props.deleteItems(item.key)}/>
                    </span>
                </p>
             
            </div>
        )
    })
    return(
        <h2>{listItem}</h2>
    )
}

export default ListItems;

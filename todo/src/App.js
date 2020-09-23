import React, { Component } from 'react';
import './App.css';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);
export default class App extends Component {
    constructor(props){
        super(props)
        this.state  = {
            items: [],
            currentItems:{
                text:'',
                key:''
            }
        }
        this.handleinput = this.handleinput.bind(this);
        this.addItems = this.addItems.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    handleinput = e =>{
        this.setState({currentItems:{
            text: e.target.value,
            key: Date.now()
        }})
    };

    addItems = e =>{
        e.preventDefault()
        const newItem = this.state.currentItems;
        // console.log(newItem)
        if(newItem.text !==''){
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItems:{
                    text:'',
                    key: ''
                }
            })
        }
    }

    deleteItem(key){
        const filterItem = this.state.items.filter(item => item.key!==key);
        this.setState({
            items: filterItem
        })
    }

    

    render() {
        return (
            <div className='App'>
                <header>
                    <form id='to-do-form' onSubmit={this.addItems}>
                        <input type='text' placeholder='Enter text' onChange={this.handleinput}/>
                        <button type='submit'>Add</button>
                        <ListItems items = {this.state.items} deleteItems = {this.deleteItem}/>
                    </form>
                </header>
           
                
            </div>
        )
    }
}

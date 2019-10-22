import React, { Component } from 'react';
import './WalmartList.css';


class WalmartList extends Component {
    constructor (props) {
        super (props);
        this.itemsPerPage = 5; 
        this.itemList = [
            new Task(Math.floor(Math.random()*100), 'Task1' , false),
            new Task(Math.floor(Math.random()*100), 'Task2' , false),
            new Task(Math.floor(Math.random()*100), 'Task3' , false),
            new Task(Math.floor(Math.random()*100), 'Task4' , false),
            new Task(Math.floor(Math.random()*100), 'Task5' , false),
            new Task(Math.floor(Math.random()*100), 'Task6' , false),
            new Task(Math.floor(Math.random()*100), 'Task7' , false),
            new Task(Math.floor(Math.random()*100), 'Task8' , false),
            new Task(Math.floor(Math.random()*100), 'Task9' , false),
            new Task(Math.floor(Math.random()*100), 'Task10' , false),
            new Task(Math.floor(Math.random()*100), 'Task11' , false),
            new Task(Math.floor(Math.random()*100), 'Task12' , false),
            new Task(Math.floor(Math.random()*100), 'Task13' , false),
            new Task(Math.floor(Math.random()*100), 'Task14' , false),
            new Task(Math.floor(Math.random()*100), 'Task15' , false),
            new Task(Math.floor(Math.random()*100), 'Task16' , false),
            new Task(Math.floor(Math.random()*100), 'Task17' , false),
            new Task(Math.floor(Math.random()*100), 'Task18' , false),
            new Task(Math.floor(Math.random()*100), 'Task19' , false),
            new Task(Math.floor(Math.random()*100), 'Task20' , false)

        ] ;
        this.itemsToBeShown = Array.from(this.itemList.slice(0,this.itemsPerPage));
        this.state = { itemList : this.itemsToBeShown };
        this.markTaskCompleted = this.markTaskCompleted.bind(this);
        this.controlPagination = this.controlPagination.bind(this);
    }
    markTaskCompleted(task) {
        task.completed = !task.completed;
    }
    controlPagination(type){
        if(type === 'MORE'){
            this.itemsPerPage += 5;
        }else if(type=== 'LESS'){
            this.itemsPerPage -= 5;
        }
        this.itemsToBeShown = Array.from(this.itemList.slice(0,this.itemsPerPage));
        this.setState({ itemList : this.itemsToBeShown });
    }
    render () {
        return (
            <div className="WalmartList">
                <ul>
                {
                    this.state.itemList.map(task => (
                        <li> <input type="checkbox" onClick={() => this.markTaskCompleted(task)}></input> {task.details}</li>
                    ))
                }
                </ul>
            <br/>
                {
                    this.itemList.length === this.itemsToBeShown.length ?  <button onClick={()=> this.controlPagination('LESS')} >Show Less</button> : <button onClick={()=> this.controlPagination('MORE')} >Show More</button>
                }
            </div>
        );
    }
}

class Task {
    id =  0; 
    details= "";
    completed= false;

    constructor(id , details , completed){
        this.id = id;
        this.details = details;
        this.completed = completed
    }
}

export default WalmartList;
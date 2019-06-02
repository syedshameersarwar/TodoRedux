import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addTodoAsync,deleteTodoAsync,toggleTodoAsync} from '../actions/todos';
import List from './List';


class Todos extends Component{


    inputRef  = ref => this.input = ref;


    handleClick = e => {
        const {dispatch} = this.props;

        e.preventDefault();
        const name = this.input.value;
        
        dispatch(addTodoAsync(name, () => this.input.value = ''));
    }


    deleteHandler = todo => this.props.dispatch(deleteTodoAsync(todo));


    toggleHandler = todoID => this.props.dispatch(toggleTodoAsync(todoID));


    render(){
        const {todos} = this.props;

        return(
            <div>
                <h2> To Do's </h2>

                <input type = 'text' placeholder = 'Add Todo' 
                 ref = {this.inputRef} />

                 <button onClick = {this.handleClick}>
                     Add
                 </button>

                <List items = {todos} deleteHandler = {this.deleteHandler} 
                toggleHandler = {this.toggleHandler} />
             </div>
        ); 
    }

}


const mapStateToProps = ({todos}) => ({
    todos:todos
});

export default connect(mapStateToProps)(Todos);
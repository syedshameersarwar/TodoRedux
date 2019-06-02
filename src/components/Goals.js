import React,{Component} from 'react';
import {connect} from 'react-redux';
import List from './List';
import {addGoalAsync,deleteGoalAsync} from '../actions/goals';


class Goals extends Component {

    inputRef = ref => this.input = ref;


    handleClick = e => {
        const {dispatch} = this.props;

        e.preventDefault();
        const name = this.input.value;

        dispatch(addGoalAsync(name,() => this.input.value = ''));
    }


    deleteHandler = goal => this.props.dispatch(deleteGoalAsync(goal));


    render(){
        const {goals} = this.props;

        return(
            <div>
                <h2> Goal's </h2>

                <input type = 'text' placeholder = 'Add Goals' 
                 ref = {this.inputRef} />

                 <button onClick = {this.handleClick}>
                     Add
                 </button>

                <List items = {goals} deleteHandler = {this.deleteHandler} />
             </div>
        );
    }
}

const mapStateToProps = ({goals}) => ({
    goals:goals
});

export default connect(mapStateToProps)(Goals);
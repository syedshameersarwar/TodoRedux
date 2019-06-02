import React,{Component} from 'react';
import {connect} from 'react-redux';
import recieveDataAsync from '../actions/shared';
import Todos from './Todos.js';
import Goals from './Goals.js';

class App extends Component{

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(recieveDataAsync());
    }


    render(){
        const {loading} = this.props;

        if(loading)
            return <h2>Loading...</h2>
        
        return (
            <div>
                <Todos />
                <Goals />
            </div>
        );
    }
}


const mapStateToProps = ({loading}) => ({
    loading:loading
});


export default connect(mapStateToProps)(App);
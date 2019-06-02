import goals from './goals';
import todos from './todos';
import loading from './loading';
import {combineReducers} from 'redux';


export default combineReducers({
    goals,todos,loading
});
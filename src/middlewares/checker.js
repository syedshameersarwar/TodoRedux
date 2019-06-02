import {ADD_TODO} from '../types/todos';
import {ADD_GOAL} from '../types/goals'


const keyword = 'Bitcoin';

const checker = store => next => action => {

    if (action.type === ADD_TODO && 
            action.todo.name.includes(keyword))
        return alert('Not a good idea...');
    
    if (action.type === ADD_GOAL && 
            action.goal.name.includes(keyword))
        return alert('Not a good goal...');
    
    if(action.type === ADD_TODO && action.todo.Name === '')
        return alert('Enter todo.');
    
    if(action.type === ADD_GOAL && action.goal.Name === '')
        return alert('Enter goal.');

    return  next(action);
    
};

export default checker;
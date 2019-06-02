import {ADD_TODO,DELETE_TODO,TOGGLE_TODO} from '../types/todos';
import {RECIEVE_DATA} from '../types/shared';


const todos = (state = [],action) => {

    switch(action.type) {

        case ADD_TODO:
            return [...state,action.todo];

        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        
        case TOGGLE_TODO:
            return Object.assign([],state,state.map(todo => {
                if(todo.id === action.id)
                    return Object.assign({},todo,
                        {completed:!todo.completed});

                return todo;
            }));
        
        case RECIEVE_DATA:
            return action.todos;
        
        default:
            return state;
    }
};


export default todos;
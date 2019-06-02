import {ADD_GOAL,DELETE_GOAL} from '../types/goals';
import {RECIEVE_DATA} from '../types/shared';


const goals = (state = [],action) => {

    switch(action.type){

        case ADD_GOAL:
            return [...state,action.goal];
        
        case DELETE_GOAL:
            return state.filter(goal => goal.id !== action.id);
        
        case RECIEVE_DATA:
            return action.goals;
        
        default:
            return state;
    }
};

export default goals;
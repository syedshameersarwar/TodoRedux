import {ADD_GOAL,DELETE_GOAL} from '../types/goals';
import API from 'goals-todos-api';


const addGoalSync = goal => ({
    type:ADD_GOAL,
    goal
});


const deleteGoalSync = goalID => ({
    type:DELETE_GOAL,
    id:goalID
});


export const addGoalAsync = (goalName,callback) => {
    return dispatch => {
        return API.saveGoal(goalName)
                .then(goal => {
                    dispatch(addGoalSync(goal));
                    callback();
                })
                .catch(() => alert('Failed to add goal,Try again later.'));
    };
};


export const deleteGoalAsync = goal => {
    return dispatch => {
        dispatch(deleteGoalSync(goal.id)); //optimistic updating

        return API.deleteGoal(goal.id)
                .catch(() => {
                    dispatch(addGoalSync(goal));
                    alert('Failed to delete goal,Try again later.');
                });
    };
};
import {RECIEVE_DATA} from '../types/shared';
import API from 'goals-todos-api';


const recieveDataSync = (todos,goals) => ({
    type:RECIEVE_DATA,
    todos,
    goals
});


const recieveDataAsync = () => {
    return dispatch => Promise.all([API.fetchTodos(),API.fetchGoals()])
                        .then(([todos,goals]) => {
                            dispatch(recieveDataSync(todos,goals));
                        })
                        .catch(() => alert('Failed to fetch data'+ 
                                            'Try again later'));
}

export default recieveDataAsync;
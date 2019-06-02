import API from 'goals-todos-api';
import {ADD_TODO,DELETE_TODO,TOGGLE_TODO} from '../types/todos';

const addTodoSync = todo => ({
    type:ADD_TODO,
    todo
});


const deleteTodoSync = todoID => ({
    type:DELETE_TODO,
    id:todoID
});


const toggleTodoSync = todoID => ({
    type:TOGGLE_TODO,
    id:todoID
});



export const addTodoAsync = (todoName,callback) => {
    return dispatch => {
        return API.saveTodo(todoName)
                .then(todo => {
                    dispatch(addTodoSync(todo));
                    callback();
                })
                .catch(() => alert('Failed to add todo, Try again later.'));
    };
};


export const deleteTodoAsync = todo => {
    return dispatch => {
        dispatch(deleteTodoSync(todo.id)); //optimistic update

        return API.deleteTodo(todo.id)
                .catch(() => {
                    dispatch(addTodoSync(todo));
                    alert('Failed to delete todo,Try again later.');
                });
    };
};


export const toggleTodoAsync = todoID => {
    return dispatch => {
        dispatch(toggleTodoSync(todoID)); //optimistic update

        return API.saveTodoToggle(todoID)
                .catch(() => {
                    dispatch(toggleTodoSync(todoID));
                    alert('Failed to toggle todo,Try again later.');
                });
    };
};
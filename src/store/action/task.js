import {ADD_TASK, UPDATE_TASK, DELETE_TASK} from '../type';

export const addTasks = data => {
  return {
    type: ADD_TASK,
    addTask: data,
  };
};

export const updateTasks = data => {
  return {
    type: UPDATE_TASK,
    updateTask: data,
  };
};

export const deleteTasks = id => {
  return {
    type: DELETE_TASK,
    taskid: id,
  };
};

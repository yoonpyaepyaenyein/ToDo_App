import {ADD_TASK, UPDATE_TASK, DELETE_TASK} from '../type';

const initialState = {
  tasks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    //Add Task
    case ADD_TASK:
      let newData = action.addTask;

      let updateTasks;

      const newTask = {
        id: state.tasks.length + 1,
        title: newData.title,
        time: newData.time,
      };
      updateTasks = [...state.tasks, newTask];

      return {...state, tasks: updateTasks};

    //Update Task
    case UPDATE_TASK:
      const currentData = action.updateTask;
      // const currentTime = new Date().toLocaleString();

      let prodIndex = state.tasks.findIndex(item => item.id === currentData.id);

      const updateTask = [...state.tasks];
      updateTask[prodIndex] = currentData;

      return {
        ...state,
        tasks: updateTask,
        // currentTime,
      };

    //Delete Task
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(item => item.id !== action.taskid),
      };

    default:
      return state;
  }
};

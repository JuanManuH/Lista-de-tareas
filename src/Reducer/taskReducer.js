import { taskActionTypes } from "./actionsTypes";

export const initialTaskState = [];

export const taskReducer = (state = initialTaskState, action = {}) => {
  switch (action.type) {
    case taskActionTypes.createTask:
      const newTask = {
        id: action.payload.id,
        title: action.payload.title,
        priority: action.payload.priority,
        description: action.payload.description,
        completed: false,
        recycled: false,
      };
      return [...state, newTask];

    case taskActionTypes.completeTask:
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });

    case taskActionTypes.recycleTask:
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, recycled: !task.recycled };
        }
        return task;
      });

    case taskActionTypes.deleteTask:
      return state.filter((task) => {
        if (task.id !== action.payload) {
          return task;
        }
      });

    case taskActionTypes.recycleAll:
      return state.map((task) => {
        if (task.recycled === false) {
          return { ...task, recycled: !task.recycled };
        }
        return task;
      });

    case taskActionTypes.deleteAll:
      return state.filter((task) => {
        if (task.recycled === false) {
          return task;
        }
      });

    case taskActionTypes.editTask:
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            title: action.payload.title,
            priority: action.payload.priority,
            description: action.payload.description,
          };
        }
        return task;
      });

    default:
      return state;
  }
};

import { useContext } from "react";
import { taskActionTypes } from "../Reducer/actionsTypes";
import { TaskContext } from "../Context/TaskContext";

export const useActionDispatcher = () => {
  const { dispatch } = useContext(TaskContext);

  const createTask = (id, title, priority, description) => {
    const action = {
      type: taskActionTypes.createTask,
      payload: {
        id,
        title,
        priority,
        description,
      },
    };
    dispatch(action);
  };

  const completeTask = (id) => {
    const action = {
      type: taskActionTypes.completeTask,
      payload: id,
    };
    dispatch(action);
  };

  const recycleTask = (id) => {
    const action = {
      type: taskActionTypes.recycleTask,
      payload: id,
    };
    dispatch(action);
  };

  const deleteTask = (id) => {
    const action = {
      type: taskActionTypes.deleteTask,
      payload: id,
    };
    dispatch(action);
  };

  const recycleAll = () => {
    const action = {
      type: taskActionTypes.recycleAll,
    };
    dispatch(action);
  };

  const deleteAll = () => {
    const action = {
      type: taskActionTypes.deleteAll,
    };
    dispatch(action);
  };

  const editTask = (id, title, priority, description) => {
    const action = {
      type: taskActionTypes.editTask,
      payload: {
        id,
        title,
        priority,
        description,
      },
    };
    dispatch(action);
  };

  return {
    createTask,
    completeTask,
    recycleTask,
    deleteTask,
    recycleAll,
    deleteAll,
    editTask,
  };
};

import { useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState, taskReducer } from "../Reducer/taskReducer";

export const TaskProvider = ({ children }) => {
  const [taskState, dispatch] = useReducer(taskReducer, initialTaskState);

  return (
    <TaskContext.Provider value={{ taskState, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

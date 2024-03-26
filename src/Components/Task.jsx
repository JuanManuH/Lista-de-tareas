import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TaskContext } from "../Context/TaskContext";
import "../Styles/task.css";
import { useActionDispatcher } from "../Hooks/useActionDispatcher";
import { classNamePriority } from "../Helpers/priorityBadge";

export const Task = () => {
  const { id } = useParams();
  const { taskState } = useContext(TaskContext);
  const { completeTask, recycleTask } = useActionDispatcher();

  return (
    <>
      {taskState?.map((task) => {
        if (task.id == id)
          return (
            <div className="task-card" key={task.id}>
              <h4 className={classNamePriority(task.priority)}>
                {task.priority}
              </h4>
              <div className="btn-container-card">
                <button
                  className="pointerHover btn-card"
                  onClick={() => completeTask(task.id)}
                >
                  {task.completed ? "✔" : "❌"}
                </button>
                <button
                  className="pointerHover btn-card"
                  onClick={() => recycleTask(task.id)}
                >
                  {task.recycled ? (
                    <i className="bi bi-arrow-counterclockwise"></i>
                  ) : (
                    <i className="bi bi-trash-fill"></i>
                  )}
                </button>
              </div>

              <h1 className="title-card">{task.title}</h1>
              <h5 className="description-card">{task.description}</h5>
            </div>
          );
      })}
    </>
  );
};

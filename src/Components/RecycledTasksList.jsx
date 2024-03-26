import { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";
import { useActionDispatcher } from "../Hooks/useActionDispatcher";
import { NavLink } from "react-router-dom";
import { priorityBadge } from "../Helpers/priorityBadge";
import { PriorityFilter } from "./PriorityFilter";

export const RecycledTasksList = () => {
  const { taskState } = useContext(TaskContext);
  const { completeTask, recycleTask, deleteTask, deleteAll } =
    useActionDispatcher();

  const [priorityFilterState, setPriorityFilterState] = useState("");

  return (
    <>
      <table className="table table-striped container">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">
              <PriorityFilter setPriorityFilterState={setPriorityFilterState} />
            </th>
            <th scope="col" className="d-flex justify-content-between">
              <span className="align-self-end">Completed</span>
              <button className="btn btn-danger" onClick={deleteAll}>
                Delete All
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {priorityFilterState
            ? taskState?.map((task, index) => {
                if (task.recycled && task.priority == priorityFilterState)
                  return (
                    <tr key={index}>
                      <td>
                        <div className="td-hide-title">
                          <NavLink className="taskLink" to={`/task/${task.id}`}>
                            {task.title}
                          </NavLink>
                        </div>
                      </td>

                      <td>
                        <div className="td-hide-description">
                          <NavLink className="taskLink" to={`/task/${task.id}`}>
                            {task.description}
                          </NavLink>
                        </div>
                      </td>
                      <td>{priorityBadge(task.priority)}</td>
                      <td>
                        <div className="container d-flex justify-content-between">
                          <button
                            className="pointerHover complete-btn"
                            onClick={() => completeTask(task.id)}
                          >
                            {task.completed ? "✔" : "❌"}
                          </button>

                          <div>
                            <button
                              className="pointerHover complete-btn"
                              onClick={() => recycleTask(task.id)}
                            >
                              <i className="bi bi-arrow-counterclockwise"></i>
                            </button>
                            <button
                              className="pointerHover complete-btn"
                              onClick={() => deleteTask(task.id)}
                            >
                              <i className="bi bi-trash-fill"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
              })
            : taskState?.map((task, index) => {
                if (task.recycled)
                  return (
                    <tr key={index}>
                      <td>
                        <div className="td-hide-title">
                          <NavLink className="taskLink" to={`/task/${task.id}`}>
                            {task.title}
                          </NavLink>
                        </div>
                      </td>

                      <td>
                        <div className="td-hide-description">
                          <NavLink className="taskLink" to={`/task/${task.id}`}>
                            {task.description}
                          </NavLink>
                        </div>
                      </td>
                      <td>{priorityBadge(task.priority)}</td>
                      <td>
                        <div className="container d-flex justify-content-between">
                          <button
                            className="pointerHover complete-btn"
                            onClick={() => completeTask(task.id)}
                          >
                            {task.completed ? "✔" : "❌"}
                          </button>

                          <div>
                            <button
                              className="pointerHover complete-btn"
                              onClick={() => recycleTask(task.id)}
                            >
                              <i className="bi bi-arrow-counterclockwise"></i>
                            </button>
                            <button
                              className="pointerHover complete-btn"
                              onClick={() => deleteTask(task.id)}
                            >
                              <i className="bi bi-trash-fill"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
              })}
        </tbody>
      </table>
    </>
  );
};

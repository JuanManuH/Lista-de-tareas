import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../Context/TaskContext";
import { useActionDispatcher } from "../Hooks/useActionDispatcher";
import { NavLink } from "react-router-dom";
import { priorityBadge } from "../Helpers/priorityBadge";
import { PriorityFilter } from "./PriorityFilter";
import "../Styles/taskList.css";

export const TaskList = ({ setButtonAdd, handleEditForm }) => {
  const { taskState } = useContext(TaskContext);

  const { completeTask, recycleTask, recycleAll } = useActionDispatcher();

  const [priorityFilterState, setPriorityFilterState] = useState("");

  const handleEdit = ({ id, title, priority, description }) => {
    setButtonAdd(false);
    handleEditForm(id, title, priority, description);
  };

  return (
    <>
      <table className="table table-striped container task-table">
        <thead>
          <tr>
            <th className="title-head" scope="col">
              Title
            </th>
            <th className="title-description" scope="col">
              Description
            </th>
            <th scope="col">
              <PriorityFilter setPriorityFilterState={setPriorityFilterState} />
            </th>
            <th
              scope="col"
              // className="d-flex justify-content-between"
            >
              <div className="d-flex justify-content-between align-items-end">
                <span
                // className="align-self-end"
                >
                  Completed
                </span>
                <button className="btn btn-danger" onClick={recycleAll}>
                  Delete All
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {priorityFilterState
            ? taskState?.map((task, index) => {
                if (!task.recycled && task.priority == priorityFilterState)
                  return (
                    <tr key={index}>
                      <td className="title-container td-hide">
                        <button
                          className="pointerHover edit-btn"
                          onClick={() => handleEdit(task)}
                        >
                          <i className="bi bi-pencil-fill"></i>
                        </button>
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

                          <button
                            className="pointerHover complete-btn"
                            onClick={() => recycleTask(task.id)}
                          >
                            <i className="bi bi-trash-fill"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
              })
            : taskState?.map((task, index) => {
                if (!task.recycled)
                  return (
                    <tr key={index}>
                      <td className="title-container td-hide">
                        <button
                          className="pointerHover edit-btn"
                          onClick={() => handleEdit(task)}
                        >
                          <i className="bi bi-pencil-fill"></i>
                        </button>
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

                          <button
                            className="pointerHover complete-btn"
                            onClick={() => recycleTask(task.id)}
                          >
                            <i className="bi bi-trash-fill"></i>
                          </button>
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

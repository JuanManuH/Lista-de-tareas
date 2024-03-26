import "../Styles/TaskForm.css";
import React, { useContext, useEffect } from "react";
import { useForm } from "../Hooks/useForm";
import { useActionDispatcher } from "../Hooks/useActionDispatcher";

export const TaskForm = ({ setButtonAdd, buttonAdd, editedForm }) => {
  const { createTask, editTask } = useActionDispatcher();

  const initialForm = {
    title: "",
    priority: "Normal",
    description: "",
  };
  const { title, priority, description, onInputChange, resetForm, editForm } =
    useForm(initialForm, editedForm);

  useEffect(() => {
    editForm();
  }, [editedForm]);

  const sendForm = (e) => {
    e.preventDefault();
    if (buttonAdd) {
      const id = new Date().getTime();
      createTask(id, title, priority, description);
      resetForm();
      e.target.reset();
    } else {
      editTask(editedForm.id, title, priority, description);
      setButtonAdd(true);
      resetForm();
      e.target.reset();
    }
  };

  return (
    <form className="container mt-4" onSubmit={sendForm}>
      <div className="titleContainer">
        <div className="title form-floating">
          <input
            placeholder="Title"
            name="title"
            type="text"
            className="form-control"
            required
            value={title}
            onChange={onInputChange}
          />
          <label htmlFor="title" className="form-label">
            Title
          </label>
        </div>
        <div className="priority form-floating">
          <select
            name="priority"
            className="form-select"
            onChange={onInputChange}
            value={priority} // cambia la selected option al valor de priority
          >
            <option value="Normal">Normal</option>
            <option value="Important">Important</option>
            <option value="Urgent">Urgent</option>
          </select>
          <label htmlFor="priority">Priority</label>
        </div>
      </div>
      <div className="text-area-btn-container">
        <div className="my-3 form-floating">
          <input
            placeholder="Description"
            name="description"
            type="text"
            className="form-control input-description"
            required
            value={description}
            onChange={onInputChange}
          />
          <label htmlFor="description" className="form-label">
            Description
          </label>
        </div>
        <button type="submit" className="btn btn-secondary btn-addTask">
          {buttonAdd ? "Add" : "Edit"}
        </button>
      </div>
    </form>
  );
};

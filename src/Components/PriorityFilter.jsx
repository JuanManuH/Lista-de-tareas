import React, { useContext } from "react";
import { useForm } from "../Hooks/useForm";
import { TaskContext } from "../Context/TaskContext";

export const PriorityFilter = ({ setPriorityFilterState }) => {
  const { priorityFilter, onInputChange } = useForm({ priorityFilter: "" });
  const { dispatch } = useContext(TaskContext);

  const handleFilter = () => {
    setPriorityFilterState(priorityFilter);
  };

  return (
    <form>
      <div className="form-floating">
        <select
          name="priorityFilter"
          className="form-select"
          onChange={onInputChange}
          onClick={handleFilter}
          value={priorityFilter} // cambia la selected option al valor de priority
        >
          <option value="">All</option>
          <option value="Normal">Normal</option>
          <option value="Important">Important</option>
          <option value="Urgent">Urgent</option>
        </select>
        <label htmlFor="priority">Priority</label>
      </div>
    </form>
  );
};

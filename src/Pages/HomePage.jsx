import { useState } from "react";
import { TaskForm } from "../Components/TaskForm";
import { TaskList } from "../Components/TaskList";
// import { TaskContext } from "../Context/TaskContext";

export const HomePage = () => {
  const initialEditForm = {
    id: 0,
    title: "",
    priority: "Normal",
    description: "",
  };
  const [buttonAdd, setButtonAdd] = useState(true);
  const [editedForm, setEditedForm] = useState(initialEditForm);

  const handleEditForm = (id, title, priority, description) => {
    setEditedForm({
      id,
      title,
      priority,
      description,
    });
  };

  return (
    <>
      <TaskForm
        setButtonAdd={setButtonAdd}
        buttonAdd={buttonAdd}
        editedForm={editedForm}
      />
      <TaskList setButtonAdd={setButtonAdd} handleEditForm={handleEditForm} />
    </>
  );
};

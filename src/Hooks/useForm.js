import { useState } from "react";

export const useForm = (initialForm = {}, editedForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormState(initialForm);
  };

  const editForm = () => {
    setFormState(editedForm);
  };

  return { formState, ...formState, onInputChange, resetForm, editForm };
};

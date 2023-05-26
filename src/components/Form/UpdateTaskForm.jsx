import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateTaskForm({ task, onSubmit }) {

  const [updatedTask, setUpdatedTask] = useState(task);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowError(false)
    if (updatedTask.text !== '') {
      onSubmit(updatedTask);
      navigate('/');
      console.log(updatedTask)
    }
    else {
      setShowError(true)
    }

  };

  const handleInputChange = (e) => {
    setUpdatedTask({ ...updatedTask, text: e.target.value });
  };

  return (
    <div className="task-form-wrapper">
      <h2>Modifier la Tâche: {task.index}</h2>
      <form className="task-form"
        onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Modifier la tâche"
          value={updatedTask.text}
          onChange={handleInputChange}
        />
        {showError ? <div className='error-msg'>Une tâche ne peut pas être vide</div> : null }
        <button className="task-save-btn" type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default UpdateTaskForm;

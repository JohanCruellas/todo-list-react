import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateTaskForm({ task, onSubmit }) {

  const [updatedTask, setUpdatedTask] = useState(task);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(updatedTask);
    navigate('/');
    console.log(updatedTask)
    
  };

  const handleInputChange = (e) => {
    setUpdatedTask({...updatedTask,text: e.target.value});
    console.log(e.target.value)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Modifier la tâche"
          value={updatedTask.text}
          onChange={handleInputChange}
        />
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default UpdateTaskForm;

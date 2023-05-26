import React from 'react';
import AddTaskForm from '../components/Form/AddTaskForm';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addTask } from '../store/actions/taskActions.js';


function AddTaskPage() {
  const { counter, taskList } = useSelector((state) => state);
  const dispatch = useDispatch();
  const onAddTask = (item) => dispatch(addTask(item));
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <AddTaskForm onSubmit={onAddTask} />
      <button onClick={goBack}>Retour</button>
    </div>
  );
}
export default AddTaskPage;

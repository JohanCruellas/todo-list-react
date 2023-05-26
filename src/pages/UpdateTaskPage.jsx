import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import UpdateTaskForm from '../components/Form/UpdateTaskForm';
import { updateTask } from '../store/actions/taskActions';

function UpdateTaskPage() {
  const { taskList } = useSelector((state) => state);
  const dispatch = useDispatch();
  const onUpdateTask = (item) => dispatch(updateTask(item));
  const { state } = useLocation();
  const navigate = useNavigate();
let {taskIndex}= useParams();
  const task = taskList[taskIndex];
  
  

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Modifier la Tâche: {taskIndex}</h1>
      <UpdateTaskForm task={{...task,index:taskIndex}} onSubmit={onUpdateTask} />
      <button onClick={goBack}>Retour</button>
    </>
  );
}

export default UpdateTaskPage;

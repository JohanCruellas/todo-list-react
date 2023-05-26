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
  let { taskIndex } = useParams();
  const task = taskList[taskIndex];



  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className='page-wrapper'>
      <UpdateTaskForm task={{ ...task, index: taskIndex }} onSubmit={onUpdateTask} />
      <button className='back-btn' onClick={goBack}>Retour</button>
    </div>
  );
}

export default UpdateTaskPage;

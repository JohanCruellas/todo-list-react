import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../store/actions/taskActions.js';
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';


function Task({ task }) {
    const dispatch = useDispatch();

    const handleCheckboxChange = () => {
        const updatedTask = { ...task, isDone: !task.isDone };
        dispatch(updateTask(updatedTask));
    };

    const handleDeleteClick = () => {
        dispatch(deleteTask(task));
    };

    return (
        <div className='task-card'>
            <Link to={{ pathname: `/update/${task.index}`, state: task }}>
                {task.text}
            </Link>
            <div className='action-wrapper'>
                <input
                    className='task-checkbox'
                    type="checkbox"
                    checked={task.isDone}
                    onChange={handleCheckboxChange}
                />
                <button className='task-delete-btn' onClick={handleDeleteClick}>
                    <MdClose></MdClose>
                </button>
            </div>
        </div>
    );
}

export default Task;

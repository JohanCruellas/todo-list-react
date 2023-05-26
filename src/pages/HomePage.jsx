import React from 'react';
import { connect } from 'react-redux';
import Task from '../components/Task';

function HomePage({ taskList }) {
    return (
        <div className='task-list-wrapper'>
            {taskList.map((task, index) => (
                <Task task={{ ...task, index: index }} key={index}></Task>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        taskList: state.taskList,
    };
};

export default connect(mapStateToProps)(HomePage);

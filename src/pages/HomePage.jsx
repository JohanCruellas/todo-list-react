import React from 'react';
import { connect } from 'react-redux';
import Task from '../components/Task';
import { Link } from 'react-router-dom';

function HomePage({ taskList }) {
  return (
    <div>
      {taskList.map((task, index) => (
         <Link key={index} to={{ pathname: `/update/${index}`, state: task }}>
          <Task task={{ ...task, index: index }} key={index}></Task>
        </Link>
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

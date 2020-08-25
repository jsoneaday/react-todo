import React from 'react';
import './Task.scss'
import { TaskModel } from './models/TaskModel';

const Task = ({id, title, description}: TaskModel) => {

    return (
        <div className="task-item">
            <div>Task: {id}</div>
            <div>Title: {title}</div>
            <div>Desc: {description}</div>
        </div>
    );
}

export default Task;
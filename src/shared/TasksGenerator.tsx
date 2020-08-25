import React from "react";
import { TaskModel } from "./models/TaskModel";
import Task from "./Task";

interface TasksGeneratorProp {
    taskList: Array<TaskModel> | null;
}

const TasksGenerator = ({taskList}: TasksGeneratorProp) => {
    const getTaskList = () => {
        const currentTasks = [];
        console.log("tasks", taskList)
        if(taskList) {
            
            for(let t = 0; t < taskList.length; t++) {
                const currentTask = taskList[t];
                
                currentTasks.push(
                    <Task
                        key={currentTask.id}
                        id={currentTask.id}
                        title={currentTask.title}
                        description={currentTask.description} />
                )
            }
        }
        return currentTasks;
    }

    return <div className="task-container">{getTaskList()}</div>
}

export default TasksGenerator;
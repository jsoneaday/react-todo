import React, { useContext } from "react";
import { TasksRefreshedContext } from "../App";

const TasksRefreshedMsg = () => {
    const tasksRefreshed = useContext(TasksRefreshedContext);
    return <div>
        {tasksRefreshed}
    </div>
}

export default TasksRefreshedMsg;
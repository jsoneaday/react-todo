import React, { useEffect, useReducer } from "react";
import "./App.scss";
import { GetUser, GetTasks } from "./shared/Data";
import { TaskModel } from "./shared/models/TaskModel";
import TasksGenerator from "./shared/TasksGenerator";
import NewTaskCreator from "./shared/NewTaskCreator";
import TasksRefreshedMsg from "./shared/TasksRefreshedMsg";
import { useDispatch } from "react-redux";
import { UserType } from "./store/UserReducer";
import Greeting from "./shared/Greeting";

const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case "refreshTasks":
      return { ...state, refreshTasks: action.payload };
    case "taskList":
      return { ...state, taskList: action.payload };
    case "msg":
      return { ...state, msg: action.payload };
  }
};

export const TasksRefreshedContext = React.createContext("");

function App() {
  const reduxDispatcher = useDispatch();
  const [{ taskList, refreshTasks, msg }, dispatch] = useReducer(appReducer, {
    refreshTasks: 0,
    taskList: null,
    msg: "",
  });

  useEffect(() => {
    const taskResult: TaskModel[] = GetTasks();
    if (taskResult) {
      dispatch({ type: "taskList", payload: taskResult });
      if (taskResult.length > taskList?.length) {
        dispatch({
          type: "msg",
          payload: `Task ${taskResult[taskResult.length - 1].title} added.`,
        });
      }
    }
  }, [refreshTasks]);

  useEffect(() => {
    const userResult = GetUser(2);
    if (userResult) {
      reduxDispatcher({
        type: UserType,
        payload: userResult,
      });
    }
  }, []);

  const setRefreshTasks = (rand: number) => {
    dispatch({ type: "refreshTasks", payload: rand });
  };

  return (
    <TasksRefreshedContext.Provider value={msg}>
      <div className="App">
        <div className="app-body">
          <div className="app-body-top">
            <Greeting />
            <NewTaskCreator setRefreshTasks={setRefreshTasks} />
          </div>
          <div className="app-body-mid">
            <TasksRefreshedMsg />
          </div>
          <div className="app-body-bottom">
            <TasksGenerator taskList={taskList} />
          </div>
        </div>
      </div>
    </TasksRefreshedContext.Provider>
  );
}

export default App;

import React, { useState, FC } from "react";
import "./NewTaskCreator.scss";
import { AddTask } from "./Data";

interface NewTaskCreatorProps {
  setRefreshTasks: (id: number) => void
}

const NewTaskCreator: FC<NewTaskCreatorProps> = ({setRefreshTasks}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const onChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDesc(e.target.value);
    }

    const onClickAddTask = async (e:any) => {
        e.preventDefault();

        AddTask(title, desc);
        const refresh = Math.random();
        setRefreshTasks(refresh);
    };

    return (
        <form className="task-creator">
          <div className="task-creator-inputs">
            <div className="task-creator-left">
              <div className="task-creator-item-container">
                <label htmlFor="title">Title</label>
              </div>
              <div className="task-creator-item-container">
                <label htmlFor="desc">Description</label>
              </div>
            </div>
            <div className="task-creator-right">
              <div className="task-creator-item-container">
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={onChangeTitle}
                />
              </div>
              <div className="task-creator-item-container">
                <input type="text" id="desc" value={desc} onChange={onChangeDesc} />
              </div>
            </div>
          </div>
          <div>
            <button onClick={onClickAddTask}>Add Task</button>
          </div>
        </form>
      );
}

export default NewTaskCreator;
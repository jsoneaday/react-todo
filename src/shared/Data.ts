import { TaskModel } from "./models/TaskModel";
import { UserModel } from "./models/UserModel";

export let tasks = [    
    new TaskModel(1, "A", "This is task A"),
    new TaskModel(2, "B", "This is task B"),
    new TaskModel(3, "C", "This is task C"),    
    new TaskModel(4, "D", "This is task D"),  
]

export const users = [
    new UserModel(1, "dave"),
    new UserModel(2, "jon"),
    new UserModel(3, "linda"),
    new UserModel(4, "tim"),
    new UserModel(5, "may"),
    new UserModel(6, "tom"),
]

export const GetUser = (id: number) => {
    return users.find(usr => usr.id === id);
}

export const GetTasks = () => {
    return [...tasks];
}

export const AddTask = (title: string, desc: string) => {
    tasks.push(new TaskModel(tasks[tasks.length - 1].id + 1, title, desc));
}

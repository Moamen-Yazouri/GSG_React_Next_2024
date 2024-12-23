import { useState } from "react";
import { ITask } from "../../types/task";
import "./Add-Task-Form.css";
interface IProps {
    passTask: (task: ITask) => {}
}
const AddTask = (props: IProps) => {
    const INTIAL_TASK: ITask = {content: "", isAurgent: false, isDone: false, id: 0};
    const [task, setTask] = useState<ITask>(INTIAL_TASK);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const taskContent: string = e.currentTarget["taskContent"].value;
        const taskAurgent: boolean = e.currentTarget["taskAurgent"].checked;
        const newTask: ITask = {...task, content: taskContent, isAurgent: taskAurgent, isDone: false, id: Date.now()}
        setTask(newTask);
        props.passTask(newTask);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="taskContent">Tak Content: </label>
            <input type="text" placeholder="Text Content" id="taskContent"/>
            <br />
            <label htmlFor="taskAurgent">Is Aurgent: </label>
            <input type="checkbox"  id="taskAurgent"/>
            <button type="submit">Add task</button>
            <button type="reset">Clear</button>
        </form>
    )
}
export default AddTask;
import { useState } from "react";
import { ITask } from "../../types/task";
import "./Add-Task-Form.css";
interface IProps {
    passTask: (task: ITask) => void
}
const AddTask = (props: IProps) => {
    const INTIAL_TASK: ITask = {content: "", isAurgent: false, isDone: false, id: 0};
    const [task, setTask] = useState<ITask>(INTIAL_TASK);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const taskContent: string = e.currentTarget["taskContent"].value;
        const taskAurgent: boolean = e.currentTarget["taskAurgent"].checked;
        const newTask: ITask = {...task, content: taskContent, isAurgent: taskAurgent, isDone: false, id: Date.now()}
        if(taskContent) {
            setTask(newTask);
            props.passTask(newTask);
            e.currentTarget.reset();
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="content">
                <label htmlFor="taskContent">Task Name: </label>
                <input type="text" placeholder="Task Name" id="taskContent"/>
            </div>
            <div className="aurgent">
                <label htmlFor="taskAurgent">Is Aurgent: </label>
                <input type="checkbox"  id="taskAurgent"/>
            </div>
            <div className="buttons">
                <button type="submit">Add task</button>
                <button type="reset">Clear</button>
            </div>
        </form>
    )
}
export default AddTask;
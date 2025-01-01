import { useState } from "react";
import { ITask } from "../../types/task";
import "./Add-Task-Form.css";
interface IProps {
    passTask: (task: ITask) => void
}
const AddTask = (props: IProps) => {
    const [error, setError] = useState<string>("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const content: string = e.currentTarget["content"].value;
        const taskAurgent: boolean = e.currentTarget["taskAurgent"].checked;
        const newTask: ITask = {content: content, isUrgent: taskAurgent, isDone: false, id: Date.now()}
        if(content) {
            props.passTask(newTask);
            e.currentTarget.reset();
            setError("");
        }
        else {
            setError("please Enter Task's content!");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="content">
                <label htmlFor="taskContent">Task Name: </label>
                <input type="text" placeholder="Task Name" id="content"/>
            </div>
            {
                Boolean(error) && (
                    <p className="errors">{error}</p>
                )
            }
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
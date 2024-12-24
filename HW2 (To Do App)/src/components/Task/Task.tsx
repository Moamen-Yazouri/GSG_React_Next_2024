import "./Tasks.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
interface IProps {
    handlDoneChange: (change: number) => void;
    taskContent: string;
    isAurgent: boolean;
    taskId: number;
    onDelete: (id: number, aurgent: boolean) => void
}   
const Task = (props: IProps) => {
    const [done, setDone] = useState(false)
    const handleDelete = () => {
        props.onDelete(props.taskId, props.isAurgent);
    }
    const handleDone = (isDone: boolean) => {
        setDone(isDone);
        isDone ? props.handlDoneChange(+1) : props.handlDoneChange(-1); 
    }
    return (
            <div className="task">
                <input type="checkbox" onChange={e => handleDone(e.target.checked)} />
                <div className={done ? "content done" : "content"}>{props.taskContent}</div>
                {props.isAurgent && <div className="urgent">Urgent</div>}
                <button className="delete">
                    <FontAwesomeIcon
                    icon={faTrash}
                    className="delete-icon"
                    onClick={handleDelete}
                    />
                </button>
            </div>
        )
}
export default Task;
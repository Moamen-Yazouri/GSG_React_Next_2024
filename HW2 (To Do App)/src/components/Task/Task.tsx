import "./Tasks.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
interface IProps {
    handlDoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    taskContent: string;
    isAurgent: boolean;
    taskId: number;
    isDone: boolean;
    onDelete: (id: number) => void
}   
const Task = (props: IProps) => {
    const handleDelete = () => {
        props.onDelete(props.taskId);
    }
    // const handleDone = (isDone: boolean) => {
    //     setDone(isDone);
    //     isDone ? props.handlDoneChange(+1, props.taskId, isDone) : props.handlDoneChange(-1, props.taskId, isDone); 
    // }
    return (
            <div className="task">
                <input type="checkbox"  onChange={props.handlDoneChange} data-id={props.taskId}/>
                <div className={props.isDone ? "content done" : "content"}>{props.taskContent}</div>
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
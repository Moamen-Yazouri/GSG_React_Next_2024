import "./Tasks.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
interface IProps {
    handleDone: (done: boolean) => void;
    taskContent: string;
    isAurgent: boolean;
    taskId: number;
    completed: boolean;
    onDelete: (id: number, aurgent: boolean) => void
}   
const Task = (props: IProps) => {
    const handleDelete = () => {
        props.onDelete(props.taskId, props.isAurgent);
    }
    return (
            <div className="task">
                <input type="checkbox" onChange={e => props.handleDone(e.target.checked)} />
                <div className={props.completed ? "content done" : "content"}>{props.taskContent}</div>
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
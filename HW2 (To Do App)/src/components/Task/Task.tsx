import { ITask } from "../../types/task";

interface IProps {
    handleDone: (done: boolean, id: number) => void;
    taskContent: string;
    isAurgent: boolean;
    taskId: number
}   
const Task = (props: IProps) => {
    return (
            <div className="task">
                <input type="checkbox" onChange={e => props.handleDone(e.target.checked, props.taskId)} />
                <div className="content">{props.taskContent}</div>
                {props.isAurgent && <div>Urgent</div>}
            </div>
        )
}
export default Task;
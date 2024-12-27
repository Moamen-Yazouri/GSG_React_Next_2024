import { ITask } from '../../types/task';
import './Tasks-Data.css';
interface IProps {
    tasks: ITask[];
}
const TasksData = (props: IProps) => {
    const completed = props.tasks.filter(task => task.isDone).length;
    const urgents = props.tasks.filter(task => task.isUrgent).length;
    const allTasks = props.tasks.length;
    return (
        <div className="data">
            <div>Created Tasks: <span>{allTasks}</span></div>
            <div>Aurgent Tasks: <span>{urgents}</span></div>
            <div>Completed Tasks: <span>{completed}</span></div>
        </div>
    )
}
export default TasksData;
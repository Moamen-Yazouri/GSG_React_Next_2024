import './Tasks-Data.css';
interface IProps {
    created: number;
    aurgent: number;
    completed: number;
}
const TasksData = (props: IProps) => {
    return (
        <div className="data">
            <div>Created Tasks: {props.created}</div>
            <div>Aurgent Tasks: {props.aurgent}</div>
            <div>Completed Tasks: <span>{props.completed}</span></div>
        </div>
    )
}
export default TasksData;
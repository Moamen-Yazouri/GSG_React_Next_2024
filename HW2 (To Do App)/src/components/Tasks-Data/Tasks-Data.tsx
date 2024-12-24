import './Tasks-Data.css';
interface IProps {
    created: number;
    aurgent: number;
    completed: number;
}
const TasksData = (props: IProps) => {
    return (
        <div className="data">
            <div>Created Tasks: <span>{props.created}</span></div>
            <div>Aurgent Tasks: <span>{props.aurgent}</span></div>
            <div>Completed Tasks: <span>{props.completed}</span></div>
        </div>
    )
}
export default TasksData;
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
            <div>Completed Tasks: {props.completed}</div>
        </div>
    )
}
export default TasksData;
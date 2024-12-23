import { ITask } from "../../types/task";

interface IProps {
    tasksArray: ITask[];
    handleDone: (done: boolean, id: number) => void

}   
const Task = (props: IProps) => {
    return (
        props.tasksArray.map((task => {
            <div className="task" key={task.id}>
                <input type="checkbox" onChange={e => props.handleDone(e.target.checked, task.id)} />
                <div className="content">{task.content}</div>
                {task.isAurgent}? <div></div>
            </div>
            })
        )
    )
}
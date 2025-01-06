import { ITask } from "../types/task"

interface IState {
    tasks: ITask[];
}

type Action =
    | { type: "ADD_LOCAL_STORAGE"; payload: ITask[] }
    | { type: "ADD_TASK"; payload: ITask }
    | { type: "DELETE_TASK"; payload: number }
    | { type: "ADD_DONE"; payload: number };

const reducer = (state: IState, action: Action): IState => {
    switch(action.type) {

        case 'ADD_LOCAL_STORAGE': {
            if(state.tasks.length === 0) {
                return { ...state, tasks: [...action.payload] };
            }
                return state;
        }
        case 'ADD_TASK': {
            const newTask: ITask = action.payload;
            newTask.id =  Date.now();
            return {...state, tasks: newTask.isUrgent ? [newTask,...state.tasks] : [...state.tasks,newTask] };
        }
        case 'DELETE_TASK': {
            const taskId = Number(action.payload);
            return {...state, tasks: state.tasks.filter(item => !(item.id == taskId))}
        }
        case 'ADD_DONE': {            
            return{...state, tasks: state.tasks.map(item => item.id === Number(action.payload) ? {...item, isDone: !item.isDone}: item )};
        }
        default: return state;
    }

}
export default reducer;
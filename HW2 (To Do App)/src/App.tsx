import { useEffect, useReducer, useState } from 'react';
import './App.css'
import AddTask from './components/Add-Task-Form/Add-Task-Form'
import { ITask } from './types/task'
import TasksData from './components/Tasks-Data/Tasks-Data';
import Task from './components/Task/Task';
import returnDate from './utilities/Date';
import useLocalStorage from './hooks/useLocalStorage';
import reducer from './state/reducer';
const date: string = returnDate();
function App() {
  const [state, dispatch] = useReducer(reducer, {tasks:[]});
  const {storedData} = useLocalStorage(state.tasks, "tasks-list");
  useEffect(() => {
    const newTasks = storedData || [];
    dispatch({type: 'ADD_LOCAL_STORAGE', payload: storedData || []})
  }, [storedData])
  const receiveNewTask = (newTask: ITask) => {
    dispatch({type:'ADD_TASK', payload: newTask});
  }
  const changeCompletion = (e: React.ChangeEvent<HTMLInputElement>) => {
      const taskId = e.currentTarget.dataset["id"];
      dispatch({type: 'ADD_DONE', payload: Number(taskId)});
    }
    const deleteTask = (id: number) => {
      dispatch({type: 'DELETE_TASK', payload: id});
    }
  
  return (
    <div className="to-do-app">
      <h3>{date}</h3>
      <h1>To Do App</h1>
      <AddTask passTask={receiveNewTask}/>
      <TasksData tasks={state.tasks}/>
      <div className="tasks">
        {
          state.tasks.map(task => (
              <Task
              taskContent={task.content}
              isAurgent={task.isUrgent} 
              key={task.id} 
              taskId={task.id}
              onDelete={deleteTask}
              handlDoneChange={changeCompletion}
              isDone={task.isDone}
              />
            )
          )
        }
      </div>
    </div>
  )
}

export default App;

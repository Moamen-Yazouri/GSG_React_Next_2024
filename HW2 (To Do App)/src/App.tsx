import { useState } from 'react';
import './App.css'
import AddTask from './components/Add-Task-Form/Add-Task-Form'
import { ITask } from './types/task'
import TasksData from './components/Tasks-Data/Tasks-Data';
import Task from './components/Task/Task';
import returnMonthName from './utilities/Monthes';
const date = new Date();
const localeFormattedDate: string = date.toLocaleDateString('en-US');
const day = localeFormattedDate.split("/")[1];
const month: string = returnMonthName(date.getMonth());
function App() {
  const [created, setCreated] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [aurgents, setAurgent] = useState(0);
  const [tasksList, setTasksList] = useState<ITask[]>([]);
  const receiveNewTask = (newTask: ITask) => {
    setCreated(created + 1)
    if(newTask.isAurgent) {
      setAurgent(aurgents + 1); 
      setTasksList([newTask, ...tasksList]);
    }
    else {
      setTasksList([...tasksList, newTask])
    } 
  }
  const changeCompleted = (change: number, id: number, done: boolean) => {

      setCompleted(completed + change);
      const newList: ITask[] = tasksList.map(item => item.id == id ? {...item, isDone: done} : item);
      setTasksList(newList)
    }
    const deleteTask = (id: number, isAurgent: boolean) => {
      const newList = tasksList.filter(item => !(item.id == id));
      setTasksList(newList);
      if(isAurgent) {
        setAurgent(aurgents - 1);
      }
    }
  
  return (
    <div className="to-do-app">
      <h3>Date: {month}, {day}</h3>
      <h1>To Do App</h1>
      <AddTask passTask={receiveNewTask}/>
      <TasksData created={created} completed={completed} aurgent={aurgents}/>
      <div className="tasks">
        {
          tasksList.map(task => (
              <Task
              taskContent={task.content}
              isAurgent={task.isAurgent} 
              key={task.id} 
              taskId={task.id}
              onDelete={deleteTask}
              handlDoneChange={changeCompleted}
              />
            )
          )
        }
      </div>
    </div>
  )
}

export default App;

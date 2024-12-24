import { useState } from 'react';
import './App.css'
import AddTask from './components/Add-Task-Form/Add-Task-Form'
import { ITask } from './types/task'
import TasksData from './components/Tasks-Data/Tasks-Data';
import Task from './components/Task/Task';
import returnMonthName from './utilities/Monthes';
const date = new Date();
const day = date.getDay();
const month: string = returnMonthName(date.getMonth());
function App() {
  const [created, setCreated] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [aurgents, setAurgent] = useState(0);
  const [tasksList, setTasksList] = useState<ITask[]>([]);
  const [isDone, setDone] = useState(false);
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
  const handleDone = (done: boolean) => {
        if(done) {
          setDone(true);
          setCompleted(completed + 1)
        }
        else {
          setDone(false);
          setCompleted(completed - 1)
        }
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
              completed = {isDone}
              taskContent={task.content}
              isAurgent={task.isAurgent} 
              handleDone={handleDone} 
              key={task.id} 
              taskId={task.id}
              onDelete={deleteTask}
              />
            )
          )
        }
      </div>
    </div>
  )
}

export default App;

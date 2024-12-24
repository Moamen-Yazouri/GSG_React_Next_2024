import { useState } from 'react';
import './App.css'
import AddTask from './components/Add-Task-Form/Add-Task-Form'
import { ITask } from './types/task'
import TasksData from './components/Tasks-Data/Tasks-Data';
import Task from './components/Task/Task';

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
  const handleDone = (done: boolean, taskId: number) => {
    done ? setCompleted(completed + 1) : setCompleted(completed - 1);
  }
  return (
    <div className="to-do-app">
      <AddTask passTask={receiveNewTask}/>
      <TasksData created={created} completed={completed} aurgent={aurgents}/>
      {
        tasksList.map(task => (
            <Task 
            taskContent={task.content}
            isAurgent={task.isAurgent} 
            handleDone={handleDone} 
            key={task.id} 
            taskId={task.id}
            />
          )
        )
      }
    </div>
  )
}

export default App;

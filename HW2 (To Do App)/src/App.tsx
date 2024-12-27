import { useState } from 'react';
import './App.css'
import AddTask from './components/Add-Task-Form/Add-Task-Form'
import { ITask } from './types/task'
import TasksData from './components/Tasks-Data/Tasks-Data';
import Task from './components/Task/Task';
import returnDate from './utilities/Date';
const date: string = returnDate();
function App() {
  const [tasksList, setTasksList] = useState<ITask[]>([]);
  const receiveNewTask = (newTask: ITask) => {
    if(newTask.isUrgent) {
      setTasksList([newTask, ...tasksList]);
    }
    else {
      setTasksList([newTask, ...tasksList]);
    }
  }
  const changeCompletion = (e: React.ChangeEvent<HTMLInputElement>) => {
      const id = e.currentTarget.dataset["id"];
      const checked = e.currentTarget.checked;
      const newList: ITask[] = tasksList.map(item => item.id == Number(id) ? {...item, isDone: checked} : item);
      setTasksList(newList)
    }
    const deleteTask = (id: number) => {
      const newList = tasksList.filter(item => !(item.id == id));
      setTasksList(newList);
    }
  
  return (
    <div className="to-do-app">
      <h3>{date}</h3>
      <h1>To Do App</h1>
      <AddTask passTask={receiveNewTask}/>
      <TasksData tasks={tasksList}/>
      <div className="tasks">
        {
          tasksList.map(task => (
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

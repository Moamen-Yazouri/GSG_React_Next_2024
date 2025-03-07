import { ITask } from '@/types/@types'
import React from 'react'
import Task from '../Task/Task';
import { getTasks } from '@/services/fetchData.services';

const TasksList = async () => {
    const tasks = await getTasks();
    return (
        <div className='bg-transparent '>
            {
                tasks.map(task => (
                    <Task key={task.id} data={task}/>
                ))
            }
        </div>
    )
}

export default TasksList
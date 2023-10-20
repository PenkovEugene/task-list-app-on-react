import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm';
import TaskListContainer from './components/TaskListContainer';

interface Task {
  id: number
  title: string
  completed: boolean
}

const App: React.FC = () =>{
  const [tasks, setTasks] = useState<Task[]>([])
  const [showContainer, setShowContainer] = useState(false)

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    }
    setTasks([...tasks, newTask])
    setShowContainer(true)
  }

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
    if (updatedTasks.length === 0) {
      setShowContainer(false)
    }
  }

  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id?{ ...task, completed: !task.completed}: task)
      setTasks(updatedTasks)
  }

  const title1 = "Task"
  const title2 = "List"

  const letters1 = title1.split('').map((letter1, index) => (
    <span key={index} className='letter1'>
      {letter1}
    </span>
  ))
  
  const letters2 = title2.split('').map((letter2, index) => (
    <span key={index} className='letter2'>
      {letter2}
    </span>
  ))

  return (
    <div className='container mx-auto p-4'>  
      <h1 className='text-6xl mb-8 text-left text-gray-400 my-5 task-list-header'>{letters1} {letters2}</h1>
      <TaskForm onSubmit={addTask} />
      <TaskListContainer show={showContainer}>
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      </TaskListContainer>
    </div>
  )
}

export default App;

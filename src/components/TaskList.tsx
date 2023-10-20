import React from "react";
import TaskItem from './TaskItem'

interface Task {
  id: number
  title: string
  completed: boolean
}

interface TaskListProps {
  tasks: Task[]
  onDelete: (id: number) => void
  onToggle: (id: number) => void
}

const TaskList: React.FC<TaskListProps> = ({tasks, onDelete, onToggle}) => {
  return (
    <div className="">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </div>
  )
}

export default TaskList
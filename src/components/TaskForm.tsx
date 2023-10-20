import React, { useState } from "react";

interface TaskFormProps {
  onSubmit: (title: string) => void
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [taskTitle, setTaskTitle] = useState('')
  const maxChars = 25

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value
    if (inputText.length <= maxChars) {
      setTaskTitle(inputText)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (taskTitle.trim() !== '') {
      onSubmit(taskTitle)
      setTaskTitle('')
    }
  }

  const charsLeft = maxChars - taskTitle.length

  return (
    <form onSubmit={handleSubmit} className="mt-4 text-center">
      <input 
        type="text" 
        value={taskTitle}
        onChange={handleInputChange}
        placeholder="Add a new task..."
        className="py-2 px-4 border rounded w-full"
      />
      <div
        className="flex justify-end items-center mt-2"
      >
        <span className="mr-2 text-white backdrop-opacity-30 backdrop-invert bg-gray/300 rounded-lg px-3 py-1">Characters left: {charsLeft}</span>
      </div>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Add Task
        </button>
      
    </form>
  )
}

export default TaskForm
import React from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggle }) => {
  const maxLength = 50

  const buttonStyle: React.CSSProperties = {
    marginRight: 'auto',
    color: task.completed ? 'purple' : 'green'
  }

  const textContainerStyle: React.CSSProperties = {
    flex: 1,
    textAlign: 'center'
  }
  
  return (
    <div className='flex justify-between items-center p-4 my-2 bg-gray-100 rounded border-b'>
        <button
          onClick={() => onToggle(task.id)}
          style={buttonStyle}>
          {task.completed ? 'Completed' : 'Complete'}
        </button>
        <div className={`text-lg ${task.completed ? 'line-through' : ''}`} style={textContainerStyle}>
          {task.title.length > maxLength ? `${task.title.slice(0, maxLength)}...` : task.title}
        </div>
      <div className='flex items-center'>
        <button className='text-red-500 ml-auto' onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

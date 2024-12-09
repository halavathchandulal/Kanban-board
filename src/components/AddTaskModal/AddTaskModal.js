import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';
import './AddTaskModal.css';

const AddTaskModal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title.trim()) {
      dispatch(
        addTask({
          id: Date.now(),
          title,
          description,
        })
      );
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="add-task-modal">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTaskModal;

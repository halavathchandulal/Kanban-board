import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../../redux/tasksSlice';
import './EditTaskModal.css';

const EditTaskModal = ({ task, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editTask({ taskId: task.id, newDescription: description, newTitle: title }));
    onClose(); // Close the modal after saving
  };

  return (
    <div className="edit-task-modal">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditTaskModal;


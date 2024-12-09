import React from 'react';
import './TaskCard.css';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/tasksSlice';
// import EditTaskModal from '../EditTaskModal/EditTaskModal';


const TaskCard = ({ task, stage, onDrag, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask({ taskId: task.id, stage }));
  };

  return (
    <div className="task-card" draggable onDragStart={onDrag}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      
      {/* Edit Button */}
      <button onClick={() => onEdit(task)} className="edit-button">Edit</button>
      
      {/* Delete Button */}
      <button onClick={handleDelete} className="delete-button">Delete</button>
    </div>
  );
};

export default TaskCard;


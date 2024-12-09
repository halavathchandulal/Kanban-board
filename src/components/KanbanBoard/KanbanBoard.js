import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskCard from '../TaskCard/TaskCard';
import AddTaskModal from '../AddTaskModal/AddTaskModal';
import EditTaskModal from '../EditTaskModal/EditTaskModal';
import { moveTask, setTasks } from '../../redux/tasksSlice';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [selectedTask, setSelectedTask] = useState(null); // For the Edit Modal

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      dispatch(setTasks(JSON.parse(savedTasks))); // Load tasks from localStorage
    }
  }, [dispatch]);

  const handleDrag = (task, from) => (e) => {
    e.dataTransfer.setData('task', JSON.stringify({ task, from }));
  };

  const handleDrop = (to) => (e) => {
    const { task, from } = JSON.parse(e.dataTransfer.getData('task'));
    dispatch(moveTask({ from, to, task }));
  };

  const handleEditTask = (task) => {
    setSelectedTask(task); // Set the task to be edited in the state
  };

  const handleCloseModal = () => {
    setSelectedTask(null); // Close the modal when done editing
  };

  const filteredTasks = (tasks) =>
    search
      ? tasks.filter((task) =>
          task.title.toLowerCase().includes(search.toLowerCase())
        )
      : tasks;

  return (
    <div className="kanban-board">
      <input
        type="text"
        placeholder="Search tasks..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="columns">
        {['todo', 'inProgress', 'peerReview', 'done'].map((stage) => (
          <div
            key={stage}
            className="column"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop(stage)}
          >
            <h3>{stage.replace(/([a-z])([A-Z])/g, '$1 $2')}</h3>
            {filteredTasks(tasks[stage]).map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                stage={stage}
                onDrag={handleDrag(task, stage)}
                onEdit={handleEditTask} // Pass the edit handler to each TaskCard
              />
            ))}
          </div>
        ))}
      </div>
      <AddTaskModal />
      
      {/* EditTaskModal appears when a task is selected for editing */}
      {selectedTask && <EditTaskModal task={selectedTask} onClose={handleCloseModal} />}
    </div>
  );
};

export default KanbanBoard;


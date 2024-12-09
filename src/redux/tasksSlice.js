// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   tasks: {
//     todo: [],
//     inProgress: [],
//     peerReview: [],
//     done: [],
//   },
// };

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState,
//   reducers: {
//     setTasks: (state, action) => {
//       state.tasks = action.payload;
//     },
//     addTask: (state, action) => {
//       state.tasks.todo.push(action.payload);
//       localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Save tasks to localStorage
//     },
//     moveTask: (state, action) => {
//       const { from, to, task } = action.payload;
//       state.tasks[from] = state.tasks[from].filter((t) => t.id !== task.id);
//       state.tasks[to].push(task);
//       localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Update tasks in localStorage
//     },
//     editTask: (state, action) => {
//       const { taskId, newDescription, newTitle } = action.payload;
//       const task = Object.values(state.tasks).flat().find((task) => task.id === taskId);
//       if (task) {
//         task.title = newTitle;
//         task.description = newDescription;
//         localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Update tasks in localStorage
//       }
//     },
//     deleteTask: (state, action) => {
//       const { taskId, stage } = action.payload;
//       state.tasks[stage] = state.tasks[stage].filter((task) => task.id !== taskId);
//       localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Update tasks in localStorage
//     },
//   },
// });

// export const { setTasks, addTask, moveTask, editTask, deleteTask } = tasksSlice.actions;
// export default tasksSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: {
    todo: [],
    inProgress: [],
    peerReview: [],
    done: [],
  },
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.todo.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    moveTask: (state, action) => {
      const { from, to, task } = action.payload;
      state.tasks[from] = state.tasks[from].filter((t) => t.id !== task.id);
      state.tasks[to].push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    editTask: (state, action) => {
      const { taskId, newDescription, newTitle } = action.payload;
      const task = Object.values(state.tasks).flat().find((task) => task.id === taskId);
      if (task) {
        task.title = newTitle;
        task.description = newDescription;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
    deleteTask: (state, action) => {
      const { taskId, stage } = action.payload;
      state.tasks[stage] = state.tasks[stage].filter((task) => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
});

export const { setTasks, addTask, moveTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;

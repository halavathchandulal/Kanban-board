// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import KanbanBoard from './components/KanbanBoard/KanbanBoard';
// import './App.css';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div className="app">
//         <header className="app-header">
//           <h1>Kanban Board</h1>
//         </header>
//         <KanbanBoard />
//       </div>
//     </Provider>
//   );
// };

// export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <header className="app-header">
          <h1>Kanban Board</h1>
        </header>
        <KanbanBoard />
      </div>
    </Provider>
  );
};

export default App;


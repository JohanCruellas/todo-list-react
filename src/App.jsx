import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import store from './store/store.js';

import './App.css'
import Navigation from './components/navigation';
import AddTaskPage from './pages/AddTaskPage';
import UpdateTaskPage from './pages/UpdateTaskPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/update/:taskIndex" element={<UpdateTaskPage />} />
          <Route path="/add" element={<AddTaskPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;

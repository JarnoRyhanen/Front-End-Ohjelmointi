import { Outlet } from 'react-router-dom';
import './App.css'
import Todolist from './components/Todolist';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className='App'>
      <Topbar />
      <Outlet />
    </div>
  )
}

export default App

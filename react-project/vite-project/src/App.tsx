import { Outlet } from 'react-router-dom';
import './App.css'
import Topbar from './components/Topbar';



function App({ children }: any) {
  return (
 
      <div className='App'>
        <Topbar />
        {children}
        <Outlet />
      </div>

  )
}

export default App

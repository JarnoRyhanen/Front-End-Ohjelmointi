import './App.css'
import Todolist from './components/Todolist';
import Topbar from './components/Topbar';

function App() {
 // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Topbar />
      <Todolist />
    </div>
  )
}

export default App

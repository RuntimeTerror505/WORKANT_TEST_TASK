import Home from "./Pages/Home"
import { EmployeeProvider } from './context.tsx';

function App() {

  return (
    <EmployeeProvider>
      <div className='mainContainer'>
        <Home />
      </div>
    </EmployeeProvider>

  )
}

export default App

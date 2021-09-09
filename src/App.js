import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Dentists Appointment',
        day: 'September 12th at 10am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Grocery Shopping',
        day: 'September 10th at 5pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Breakdance Practice',
        day: ' September 13th at 11am',
        reminder: true,
    },
])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;

import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Learn React',
        day: 'June 30th',
        reminder: true,
    },
    {
        id: 2,
        text: 'Learn GO',
        day: 'May 30th',
        reminder: true,
    },
    {
        id: 3,
        text: 'Learn DS & Algorithm',
        day: 'June 30th',
        reminder: false,
    }
  ])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
    { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 
        'No Tasks to Display'}
    </div>
  );
}

export default App;

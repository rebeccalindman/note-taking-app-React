import './App.css'
import Footer from './components/Footer/Footer'
import Greetings from './components/Greetings/Greetings'
import Header from './components/Header/Header'

import ToDoItem from './components/ToDoItem'


function App() {
  const heading = "Hello World"

  return (
  <>
  < Header />
  < Greetings />
  < Greetings />
  < Greetings />
  < Footer />
  </>
  )
}

export default App /* det är dist-mappen som man vill deploya när man ska gå online */

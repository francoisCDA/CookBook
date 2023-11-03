// import {useSelector} from 'react-redux'
import Navbar from "./components/navigation/Navbar"
import { Outlet } from 'react-router-dom'


function App() {
  // const user = useSelector(state => state.auth.user)

  return (
<div className="App">
  <header>
    <Navbar />
  </header>
  <main className="container">
    <Outlet />
  </main>
</div>
  )
}

export default App

import {useSelector} from 'react-redux'

function App() {
  const user = useSelector(state => state.auth.user)

  return (
    <>
    <div className='row'>
      <Navbar />


    </div>

    </>
  )
}

export default App

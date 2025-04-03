import { useState } from 'react'
import Sidebar from './Components/Sidebar.jsx'
import Main from './Components/Main.jsx'

function App() {

  return (
    <>
    <div className='flex'>
     <Sidebar/>
      <Main/>

    </div>
    </>
  )
}

export default App

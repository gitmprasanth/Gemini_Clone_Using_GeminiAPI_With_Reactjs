import React from "react"
import Sidebar from "./Components/Sidebar"
import MainContent from "./Components/MainContent"

const App = () => {
  return (
    <>
      <div className="flex animate-fadeIn duration-1000">
        <Sidebar/>
        <MainContent/>
      </div>
    </>
  )
}

export default App
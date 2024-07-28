import { useState } from 'react'
import './index.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Landing from './Pages/Landing/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Header from './components/Header'
import Theme from './components/Theme'

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Theme/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SingIn'
import SignOut from './pages/SignOut'
import Header from './components/Header'
import Theme from './components/Theme'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Theme/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-out' element={<SignOut />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

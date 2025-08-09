import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header'
import Theme from './components/Theme'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import ListingPage from './pages/ListingPage'
import SaveListing from './pages/SaveListing'
import Search from './pages/Search'
import Message from './pages/Message'
import SocketConnection from './components/SocketConnection'


function App() {
  return (
    <>
      <SocketConnection />
      <BrowserRouter>
        <Header />
        {/* <Theme/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/listing/:id' element={<ListingPage />} />
          <Route path='/search?' element={<Search />} />

          {/* /---------Private Routes-----------/ */}
          <Route element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/create_post' element={<CreatePost />} />
            <Route path='/update_post/:id' element={<UpdatePost />} />
            <Route path='/saved_listing' element={<SaveListing />} />
            <Route path='/message' element={<Message />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

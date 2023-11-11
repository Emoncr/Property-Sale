import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Header from './components/Header'
import Theme from './components/Theme'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import ListingPage from './pages/ListingPage'
import Search from './pages/search'
import SaveListing from './pages/SaveListing'


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
        <Route path='/listing/:id' element={<ListingPage />} />
        <Route path='/search?' element={<Search />} />
        <Route path='/saved_listing' element={<SaveListing />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create_post' element={<CreatePost />} />
          <Route path='/update_post/:id' element={<UpdatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

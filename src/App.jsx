import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import TopNav from './components/top-nav/TopNav'
import SideNav from './components/side-nav/SideNav'

function App() {

  return (
    <HashRouter>
      <TopNav />
      <div className='flex items-start'>
        <SideNav />
        <div className='pt-[5rem] bg-primary-color w-[82%] px-[1.5rem] ml-auto'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  )
}

export default App

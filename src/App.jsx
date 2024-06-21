import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import TopNav from './components/top-nav/TopNav'
import SideNav from './components/side-nav/SideNav'
import Footer from './components/footer/Footer'
import { useState } from 'react'
import Profile from './components/profile/Profile'
import Wallet from './components/wallet/Wallet'
import Transaction from './components/transaction/Transaction'
import BetHistory from './components/bet-history/BetHistory'
import Settings from './components/settings/Settings'

function App() {

  const [currentModal, setCurrentModal] = useState('')

  return (
    <HashRouter>
      <TopNav setCurrentModal={setCurrentModal}/>
      <div className='flex items-start'>
        <SideNav />
        <div className='pt-[5rem] bg-primary-color w-[82%] ml-auto'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </div>
      {
        currentModal === 'login' &&
        <Login setCurrentModal={setCurrentModal} />
      }
      {
        currentModal ==='register' &&
        <Register setCurrentModal={setCurrentModal} />
      }
      {
        currentModal === 'profile' &&
        <Profile setCurrentModal={setCurrentModal} />
      }
      {
        currentModal === 'wallet' &&
        <Wallet setCurrentModal={setCurrentModal} />
      }
      {
        currentModal === 'transaction' &&
        <Transaction setCurrentModal={setCurrentModal} />
      }
      {
        currentModal === 'betHistory' &&
        <BetHistory setCurrentModal={setCurrentModal} />
      }
      {
        currentModal ==='settings' &&
        <Settings setCurrentModal={setCurrentModal} />
      }
    </HashRouter>
  )
}

export default App

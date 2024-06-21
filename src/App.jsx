import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Register from './components/register/Register'
import Login from './components/login/Login'
import TopNav from './components/top-nav/TopNav'
import SideNav from './components/side-nav/SideNav'
import Footer from './components/footer/Footer'
import { useState } from 'react'
import Profile from './components/profile/Profile'
import Wallet from './components/wallet/Wallet'
import Transaction from './components/transaction/Transaction'
import BetHistory from './components/bet-history/BetHistory'
import Settings from './components/settings/Settings'
import Deposit from './components/deposit/Deposit'
import Casual from './pages/casual/Casual'
import Shows from './pages/shows/Shows'
import Live from './pages/live/Live'
import BonusGames from './pages/bonus-games/BonusGames'

function App() {

  const [currentModal, setCurrentModal] = useState('')
  const baseUrl = "www.google.com"

  return (
    <HashRouter>
      <TopNav setCurrentModal={setCurrentModal}/>
      <div className='flex items-start'>
        <SideNav />
        <div className='pt-[5rem] bg-primary-color w-[82%] ml-auto'>
          <Routes>
            <Route path="/" element={<Home setCurrentModal={setCurrentModal}/>} />
            <Route path="/casual" element={<Casual baseUrl={baseUrl} setCurrentModal={setCurrentModal}/>} />
            <Route path="/shows" element={<Shows baseUrl={baseUrl} setCurrentModal={setCurrentModal}/>} />
            <Route path='/live' element={<Live baseUrl={baseUrl} setCurrentModal={setCurrentModal}/>} />
            <Route path="/bonus-games" element={<BonusGames baseUrl={baseUrl} setCurrentModal={setCurrentModal}/>} />
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
      {
        currentModal === 'deposit' &&
        <Deposit setCurrentModal={setCurrentModal} />
      }
    </HashRouter>
  )
}

export default App

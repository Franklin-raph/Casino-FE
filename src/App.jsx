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
import ProfilePic from './components/profile-pic/ProfilePic'
import Withdraw from './components/withdraw/Withdraw'
import JoinTelegram from './components/join-telegram/JoinTelegram'

function App() {

  const [currentModal, setCurrentModal] = useState('')
  const [desktopSidenav, setDesktopSideNav] = useState(true)
  const baseUrl = "https://heavyheat56.pythonanywhere.com"

  const [isOpen, setIsOpen] = useState(false);
  const [profileNav, setProfileNav] = useState(false)

  return (
    <HashRouter>
      <TopNav setProfileNav={setProfileNav} profileNav={profileNav} setIsOpen={setIsOpen} isOpen={isOpen} setCurrentModal={setCurrentModal} setDesktopSideNav={setDesktopSideNav} baseUrl={baseUrl} desktopSidenav={desktopSidenav}/>
      <div className='flex items-start'>
        <SideNav setIsOpen={setIsOpen} isOpen={isOpen} desktopSidenav={desktopSidenav} setCurrentModal={setCurrentModal}/>
        <div className={desktopSidenav ? 'pt-[5rem] bg-primary-color w-[82%] ml-auto mobile-view' : 'pt-[5rem] bg-primary-color w-[95%] ml-auto mobile-view'} >
          <Routes>
            <Route path="/" element={<Home setCurrentModal={setCurrentModal} setProfileNav={setProfileNav} setIsOpen={setIsOpen}/>} />
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
        <Login setCurrentModal={setCurrentModal} baseUrl={baseUrl}/>
      }
      {/* {
        currentModal === "join-telegram" &&
        <JoinTelegram setCurrentModal={setCurrentModal}/>
      } */}
      {
        currentModal ==='register' &&
        <Register setCurrentModal={setCurrentModal} baseUrl={baseUrl}/>
      }
      {
        currentModal === 'profile' &&
        <Profile setCurrentModal={setCurrentModal} baseUrl={baseUrl}/>
      }
      {
        currentModal === 'wallet' &&
        <Wallet setCurrentModal={setCurrentModal} baseUrl={baseUrl}/>
      }
      {
        currentModal === 'transaction' &&
        <Transaction setCurrentModal={setCurrentModal} baseUrl={baseUrl}/>
      }
      {
        currentModal === 'betHistory' &&
        <BetHistory setCurrentModal={setCurrentModal} baseUrl={baseUrl}/>
      }
      {
        currentModal ==='settings' &&
        <Settings setCurrentModal={setCurrentModal} baseUrl={baseUrl}/>
      }
      {
        currentModal === 'deposit' &&
        <Deposit setCurrentModal={setCurrentModal} baseUrl={baseUrl}/>
      }
      {
        currentModal === 'profilePic' &&
        <ProfilePic setCurrentModal={setCurrentModal} baseUrl={baseUrl}/>
      }
      {
        currentModal === 'withdraw' &&
        <Withdraw setCurrentModal={setCurrentModal} baseUrl={baseUrl}/>
      }
    </HashRouter>
  )
}

export default App

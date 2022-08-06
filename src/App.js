import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'
import HomeGallery from './components/home-container/gallery/HomeGallery'
import Profile from './components/home-container/profile/Profile'
import CreateProfile from './components/create-profile/CreateProfile'
import CreateLinks from './components/create-links/CreateLinks'
import Notifications from './components/notifications/Notifications'
import Web3Modal from 'web3modal'
const { ethers } = require('ethers')

function App() {
  const [currentAccount, setCurrentAccount] = useState('')

  const loadWeb3 = async () => {}

  const getContract = async () => {}

  const connectWallet = async () => {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)

    const signer = provider.getSigner()
    const address = await signer.getAddress()
    console.log('🚀 address', address)
    setCurrentAccount(address)
  }

  return (
    <Router>
      <div className="cl">
        <Navbar connectWallet={connectWallet} />
        <Route exact path="/" component={HomeGallery} />
        <Switch>
          <Route exact path="/create" component={CreateProfile} />
          <Route exact path="/create-links" component={CreateLinks} />
          <Route exact path="/notifications" component={Notifications} />
          <Route path="/profile/:profileId">
            <Profile />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App

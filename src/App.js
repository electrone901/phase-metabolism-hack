import React, { useState, useEffect } from 'react'
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
import VerifiedUserSharpIcon from '@material-ui/icons/VerifiedUserSharp'
import backgroundimgApp from '../src/images/phase-bg.png'

// FUNCTIONS
import { displayAll } from './old-Phase/displayAll'
import { follow } from './old-Phase/follow'

const { ethers } = require('ethers')

function App() {
  const [currentAccount, setCurrentAccount] = useState('')
  const [allProfiles, setAllProfiles] = useState([])
  const [selectedProfile, setSelectedProfile] = useState('')

  const [image, setImage] = useState('')
  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('')
  const [coverPhoto, setCoverPhoto] = useState('')

  const connectWallet = async () => {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)

    const signer = provider.getSigner()
    const address = await signer.getAddress()
    console.log('🚀 address', address)
    setCurrentAccount(address)
    localStorage.setItem('currentAccountLocalStorage', address)
  }

  const disconnectWallet = async () => {
    localStorage.removeItem('currentAccountLocalStorage')
    setCurrentAccount('')
  }

  useEffect(async () => {
    const getAddress = localStorage.getItem('currentAccountLocalStorage')
    setCurrentAccount(getAddress)
    const getAllProfiles = await displayAll()
    setAllProfiles(getAllProfiles)

    // To follow
    // const follower = '0x9ecFca6B5dBE01772177F1b4fB660a063D17a7De'
    // const following = '0xf4eA652F5B7b55f1493631Ea4aFAA63Fe0acc27C'
    // const t = await follow(follower, following)
    // console.log("what's  t", t)
    // const res = t.value.toString()
    // console.log('res', res)
  }, [])

  return (
    <Router>
      <div className="cl">
        <Navbar
          connectWallet={connectWallet}
          disconnectWallet={disconnectWallet}
          currentAccount={currentAccount}
        />

        <Route exact path="/">
          <HomeGallery
            allProfiles={allProfiles}
            setSelectedProfile={setSelectedProfile}
          />
        </Route>
        <Switch>
          <Route exact path="/notifications" component={Notifications} />

          <Route path="/create">
            <CreateProfile
              setCoverPhoto={setCoverPhoto}
              setImage={setImage}
              setUsername={setUsername}
              setBio={setBio}
              setCoverPhotoFunction={setCoverPhoto}
              currentAccount={currentAccount}
              image={image}
              username={username}
              bio={bio}
              coverPhoto={coverPhoto}
            />
          </Route>

          <Route path="/create-links">
            <CreateLinks
              currentAccount={currentAccount}
              image={image}
              username={username}
              bio={bio}
              coverPhoto={coverPhoto}
            />
          </Route>

          <Route path="/profile/details">
            <Profile
              selectedProfile={selectedProfile}
              currentAccount={currentAccount}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App

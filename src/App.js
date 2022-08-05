import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'
import HomeGallery from './components/home-container/gallery/HomeGallery'
import Profile from './components/home-container/profile/Profile'
import CreateProfile from './components/create-profile/CreateProfile'

function App() {
  // Add variables

  const loadWeb3 = async () => {}

  const getContract = async () => {}

  const connectWallet = async () => {}

  return (
    <Router>
      <div className="cl">
        <Navbar />
        <Route exact path="/" component={HomeGallery} />
        <Switch>
          <Route exact path="/create" component={CreateProfile} />
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

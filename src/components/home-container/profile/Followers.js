import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import {
  Container,
  Chip,
  Avatar,
  Button,
  Paper,
  Tabs,
  Tab,
  StylesProvider,
} from '@material-ui/core'
import './Profile.css'

import { displayFollowers } from '../../../Phase/displayFollowers'

function Followers({}) {
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    checkFollowers()
  }, [])

  const checkFollowers = async () => {
    //const followerAddress = currentAccount
    const accountToFollowAddress = '0x11760DB13aE3Aa5Bca17fC7D62172be2A2Ea9C11'

    const user1 = '0x9ecFca6B5dBE01772177F1b4fB660a063D17a7De'
    const user2 = '0x16f30F46e97252761C7FAb419B498Aa24032743c'
    const res = await displayFollowers(user2)
    console.log('Followers res',res)
    if (res !== 'No Followers!') setFollowers(res)
  }

  return (
    <div>
      <h1>Followers</h1>
      {followers.map((f, i) => (
        <Paper
          variant="outlined"
          key={i}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.9rem',
          }}
        >
          <Avatar />
          <div className="details">
            <p className="address">{f.name}</p>
            <p className="time">18hrs</p>
          </div>
          <Button className="phase-btn" variant="contained">
            Accept
          </Button>
        </Paper>
      ))}
    </div>
  )
}

export default Followers

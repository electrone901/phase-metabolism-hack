import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Container, Chip, Avatar, Button, Paper, Tabs, Tab, StylesProvider } from '@material-ui/core'
import './Profile.css'

import { displayFollowing } from "../../../Phase/displayFollowing";


function Following({  }) {
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    checkFollowing()
  }, [])

  const checkFollowing = async () => {
    //const followerAddress = currentAccount
    const accountToFollowAddress = '0x11760DB13aE3Aa5Bca17fC7D62172be2A2Ea9C11'

    const user1 = '0x9ecFca6B5dBE01772177F1b4fB660a063D17a7De'
    const user2 = '0x16f30F46e97252761C7FAb419B498Aa24032743c'
    const res = await displayFollowing(user1)
    // const res = await doesFollow(followerAddress, accountToFollowAddress)
    console.log('9999 checkFollow ~ res', res)
    if(res !== "No Followers!") setFollowings(res);
  }

  return (
    <div>
      <h1>Followers</h1>
      
      {followings.map((f, i) => (
        <Paper
        variant="outlined"
        key={i}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0.9rem',
        }}
      >
       
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <Avatar style={{ marginRight: '1rem' }} src={f.image} />
          <p className="address">
            {f.name}
          </p>
        </div>
        <Button className="phase-btn" variant="contained">
          Following
        </Button>
      </Paper>
      ))}
    </div>
  )
}

export default Following

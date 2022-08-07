import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import {
  Container,
  Chip,
  Card,
  Paper,
  Tabs,
  Tab,
  StylesProvider,
} from '@material-ui/core'
import './Profile.css'
import userBGimage from '../../../images/backgroundIMG.png'
import copy from '../../../images/copy.png'
import lockedProfile from '../../../images/locked.png'
import { doesFollow } from '../../../Phase/doesFollow'
import { follow } from '../../../Phase/follow'
import MyLinks from './MyLinks'
import Followers from './Followers'
import Following from './Following'

function Profile({ account, currentAccount, selectedProfile }) {
  console.log(
    '🚀 ~ file: Profile.js ~ line 26 ~ Profile ~ selectedProfile',
    selectedProfile,
  )
  const { petId } = useParams()
  const { showProfile, setShowProfile } = useState(false)

  useEffect(() => {
    checkFollow()
  }, [])

  const checkFollow = async (e) => {
    // const followerAddress = currentAccount
    // const accountToFollowAddress = '0x11760DB13aE3Aa5Bca17fC7D62172be2A2Ea9C11'

    console.log('checkFollow')
    const user1 = '0x9ecFca6B5dBE01772177F1b4fB660a063D17a7De'
    const user2 = '0x16f30F46e97252761C7FAb419B498Aa24032743c'
    const res = await doesFollow(user1, user2)
    console.log('9999 checkFollow ~ res', res)

    // const res = await doesFollow(followerAddress, accountToFollowAddress)
  }

  const requestFollow = async (e) => {
    const user1 = '0x9ecFca6B5dBE01772177F1b4fB660a063D17a7De'
    const user2 = '0x6EE6D1DF5E2DccD784f7a4bf8eCE5Dbc1babBD45'

    const isFollower = await follow(user1, user2)
    console.log(' isFollower', isFollower)
    // setShowProfile(isFollower)
  }

  const visitSite = (site) => {
    const link = site.value
    if (link) {
      window.open(link, '_blank')
    }
  }

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <StylesProvider injectFirst>
      <Container
        className="root-pet-details"
        style={{ minHeight: '50vh', paddingBottom: '3rem' }}
      >
        <center>
          <Card
            style={{
              maxWidth: '500px',
              paddingBottom: '3rem',
              position: 'relative',
              borderRadius: '13px',
            }}
          >
            <img
              style={{
                maxWidth: '500px',
                position: 'relative',
                top: '0',
                left: '0',
              }}
              src={userBGimage}
              alt="userBGimage"
            />
            <img
              style={{
                position: 'absolute',
                top: '45px',
                left: '30px',
                border: '3px solid white',
                borderRadius: '13px',
                width: '120px',
                height: '125px',
              }}
              src={selectedProfile.image}
              alt="userImage"
            />

            <p className="profile-username">{selectedProfile.name}</p>

            <p className="profile-wallet">
              {selectedProfile.address
                ? selectedProfile.address
                : '0x5e1b802905c9730C8474eED020F800CC38A6A42E'}

              <img className="profile-wallet-copy" src={copy} alt="copy.png" />
            </p>
            <p className="prof-description">{selectedProfile.description}</p>

            <Paper square>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab label="Profile" />
                <Tab label="Followers" />
                <Tab label="Following" />
              </Tabs>
            </Paper>
            <hr />

            {value === 0 && (
              <MyLinks
                requestFollow={requestFollow}
                lockedProfile={lockedProfile}
                selectedProfile={selectedProfile}
                visitSite={visitSite}
              />
            )}
            {value === 1 && <Followers />}
            {value === 2 && <Following />}
          </Card>
        </center>
      </Container>
    </StylesProvider>
  )
}

export default Profile

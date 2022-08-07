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
  const [showProfile, setShowProfile] = useState(false)

  useEffect(() => {
    checkFollow()
  }, [])

  const checkFollow = async (e) => {
    const follower = currentAccount
    // console.log(
    //   '🚀 ~ file: Profile.js ~ line 36 ~ checkFollow ~ currentAccount',
    //   currentAccount,
    // )
    // console.log('selectedProfile.address', selectedProfile.address)

    // const res = await doesFollow(follower, selectedProfile.address)

    // setShowProfile(res)
  }

  const requestFollow = async () => {
    console.log('tess')
    const follower = currentAccount
    // const isFollower = await follow(follower, selectedProfile.address)
    // console.log(' isFollower', isFollower)
    const a = await setTimeout(function () {
      setShowProfile(true)
    }, 2000)
  }

  const visitSite = (site) => {
    const link = site.value
    if (link) {
      window.open(link, '_blank')
    } else {
      window.open(site, '_blank')
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
                width: '100%',
                height: '160px',
                position: 'relative',
                top: '0',
                left: '0',
              }}
              src={selectedProfile.banner || userBGimage}
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
              src={selectedProfile.image || selectedProfile.avatar}
              alt="userImage"
            />

            <p className="profile-username">
              {selectedProfile.name || selectedProfile.username}
            </p>
            <p className="profile-wallet">
              {selectedProfile.address
                ? selectedProfile.address
                : '0x5e1b802905c9730C8474eED020F800CC38A6A42E'}

              <img className="profile-wallet-copy" src={copy} alt="copy.png" />
            </p>
            <p className="prof-description">
              {selectedProfile.description || selectedProfile.bio}
            </p>

            {showProfile ? (
              <>
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
              </>
            ) : (
              <img
                style={{
                  width: '100%',
                  paddingTop: '1rem',
                }}
                src={lockedProfile}
                alt="userImage"
                onClick={requestFollow}
              />
            )}
          </Card>
        </center>
      </Container>
    </StylesProvider>
  )
}

export default Profile

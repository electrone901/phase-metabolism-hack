import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Container, Chip, Card, StylesProvider } from '@material-ui/core'
import './Profile.css'
import userBGimage from '../../../images/backgroundIMG.png'
import ENS from '../../../images/ENS.png'
import Twitter from '../../../images/twitter.png'
import Instagram from '../../../images/instagram.png'
import Website from '../../../images/website.png'
import Banner from '../../../images/website.png'
import GitHub from '../../../images/GitHub.png'
import copy from '../../../images/copy.png'
import lockedProfile from '../../../images/locked.png'
const icons = {
  ENS: ENS,
  Twitter: Twitter,
  Instagram: Instagram,
  Website: Website,
  Banner: Banner,
  GitHub: GitHub,
}

function Profile({ account, currentAccount, selectedProfile }) {
  const { petId } = useParams()
  const { isUserLocked, setIsUserLocked } = useState(false)

  useEffect(() => {}, [])

  const requestFollow = (e) => {
    e.preventDefault()
    console.log('requestFollow')
  }

  const visitSite = (site) => {
    const link = site.value
    if (link) {
      window.open(link, '_blank')
    }
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
              0x5e1b802905c9730C8474eED020F800CC38A6A42E
              <img className="profile-wallet-copy" src={copy} alt="copy.png" />
            </p>
            <p className="prof-description">{selectedProfile.description}</p>
            <br />
            <hr />

            {isUserLocked ? (
              <img
                src={lockedProfile}
                className="profile-locked"
                alt="lockedProfile"
                onClick={requestFollow}
              />
            ) : (
              <div className="profile-root">
                {selectedProfile?.attributes ? (
                  selectedProfile.attributes.map((link, index) => (
                    <Chip
                      key={index}
                      className="profile-chip"
                      avatar={
                        <img src={icons[link.trait_type]} alt={link.value} />
                      }
                      onClick={() => visitSite(link)}
                      label={link.value ? link.value : selectedProfile.name}
                      variant="outlined"
                    />
                  ))
                ) : (
                  <p>No Links available</p>
                )}
              </div>
            )}
          </Card>
        </center>
      </Container>
    </StylesProvider>
  )
}

export default Profile

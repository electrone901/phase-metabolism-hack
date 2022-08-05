import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import {
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Grid,
  Container,
  Typography,
  Button,
  Chip,
  Card,
  StylesProvider,
} from '@material-ui/core'
import './Profile.css'
import userBGimage from '../../../images/userBGimage.png'
import userImage from '../../../images/userImage.png'
import ENS from '../../../images/ENS.png'
import twitter from '../../../images/twitter.png'
import instagram from '../../../images/instagram.png'
import website from '../../../images/website.png'
import copy from '../../../images/copy.png'
import lockedProfile from '../../../images/locked.png'

function Profile({ account, contractData }) {
  const { petId } = useParams()
  const { isUserLocked, setIsUserLocked } = useState('')

  // Add state variables

  useEffect(() => {
    if (petId) {
      getMetadata()
      getImage()
    }
  }, [petId, contractData])

  const requestFollow = (e) => {
    e.preventDefault()
    console.log('requestFollow')
  }

  const getImage = async () => {}
  const getMetadata = async () => {}

  const mintNFT = async (petId) => {}

  const handleChange = (event) => {}

  const handleSubmit = (event) => {}

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
              }}
              src={userImage}
              alt="userImage"
            />

            <p className="profile-username">losingmyego</p>

            <p className="profile-wallet">
              0x5e1b802905c9730C8474eED020F800CC38A6A42E
              <img className="profile-wallet-copy" src={copy} alt="copy.png" />
            </p>
            <p className="prof-description">
              LOSINGMYEGO is an experimental artist + developer on a journey to
              explore the unknown, strange, terrific force that drives society.
            </p>
            <br />
            <hr />

            {!isUserLocked ? (
              <img
                src={lockedProfile}
                className="profile-locked"
                alt="lockedProfile"
                onClick={requestFollow}
              />
            ) : (
              <div className="profile-root">
                <Chip
                  className="profile-chip"
                  avatar={<img src={ENS} alt="ENS" />}
                  label="losingmyego.eth"
                  variant="outlined"
                />

                <Chip
                  className="profile-chip"
                  avatar={<img src={twitter} alt="instagram" />}
                  label="@losingmyego"
                  variant="outlined"
                />

                <Chip
                  className="profile-chip"
                  avatar={<img src={instagram} alt="instagram" />}
                  label="@losingmyego"
                  variant="outlined"
                />

                <Chip
                  className="profile-chip"
                  avatar={<img src={website} alt="website" />}
                  label="Portfolio"
                  variant="outlined"
                />

                <Chip
                  className="profile-chip"
                  avatar={<img src={website} alt="website" />}
                  label="Github"
                  variant="outlined"
                />

                <Chip
                  className="profile-chip"
                  avatar={<img src={website} alt="website" />}
                  label="Github"
                  variant="outlined"
                />

                <Chip
                  className="profile-chip"
                  avatar={<img src={website} alt="website" />}
                  label="Github"
                  variant="outlined"
                />
              </div>
            )}
          </Card>
        </center>
      </Container>
    </StylesProvider>
  )
}

export default Profile

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link, withRouter } from 'react-router-dom'
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
import './CreateProfile.css'
import imgPlaceHolder from '../../images/imgPlaceHolder.png'

function CreateProfile() {
  const { petId } = useParams()
  const { isUserLocked, setIsUserLocked } = useState('')
  // Add variables

  const requestFollow = (e) => {
    e.preventDefault()
    console.log('requestFollow')
  }
  const handleImage = (event) => {}

  const handleSubmit = async (e) => {}

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
              padding: '2rem',
              paddingBottom: '3rem',
              borderRadius: '13px',
              textAlign: 'start',
            }}
          >
            <div className="">
              <Button className="whiteLink" component={Link} to="/">
                Appearance
              </Button>

              <Button
                className="whiteLink-no-active"
                component={Link}
                to="/create-links"
              >
                Links
              </Button>
            </div>

            <br />
            <hr style={{ border: '1px solid #ccc' }} />
            <br />

            <img
              style={{
                maxWidth: '500px',
                top: '0',
                left: '0',
              }}
              src={imgPlaceHolder}
              alt="userBGimage"
            />
            <Button className="whiteLink" variant="contained">
              + Upload
            </Button>
            <br />

            <br />
            <p>
              <label htmlFor="fname">Username</label>
            </p>
            <input
              type="text"
              id="fname"
              name="Username"
              placeholder="Your user name.."
              className="create-profile-input"
            ></input>

            <p>
              <label htmlFor="w3review">Bio</label>
            </p>
            <textarea
              className="create-profile-input"
              type="text"
              id="bio"
              name="bio"
              rows="4"
              cols="50"
            ></textarea>
            <p style={{ textAlign: 'right', fontSize: '11px' }}>
              <label htmlFor="w3review">0/120</label>
            </p>

            <br />
            <p style={{ textAlign: 'left', paddingBottom: '11px' }}>
              <label htmlFor="w3review">Cover photo</label>
            </p>

            <Button className="whiteLink" variant="contained">
              + Upload
            </Button>

            <br />
            <br />
            <p
              style={{
                textAlign: 'left',
                paddingBottom: '11px',
                fontSize: '11px',
              }}
            >
              <label htmlFor="w3review">
                Upload a cover photo. Max size 20MB.
              </label>
            </p>

            <br />
            <hr style={{ border: '1px solid #ccc' }} />
            <br />
            <center>
              <Button className="whiteLink">Nevermind</Button>
              <Button className="phase-btn" variant="contained">
                Save
              </Button>
            </center>
          </Card>
        </center>
      </Container>
    </StylesProvider>
  )
}

export default CreateProfile

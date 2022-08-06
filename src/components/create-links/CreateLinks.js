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
import './CreateLinks.css'
import imgPlaceHolder from '../../images/imgPlaceHolder.png'

function CreateLinks() {
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
            <h3>LINKS</h3>
            <div className="">
              <Button className="whiteLink-no-active" component={Link} to="/">
                Appearance
              </Button>

              <Button className="whiteLink" component={Link} to="/">
                Links
              </Button>
            </div>

            <br />
            <hr style={{ border: '1px solid #ccc' }} />

            <br />
            <p>
              <label htmlFor="fname">Twitter</label>
            </p>
            <input
              type="text"
              id="fname"
              name="Username"
              placeholder="@"
              className="create-profile-input"
            ></input>

            <br />
            <p>
              <label htmlFor="fname">Instagram</label>
            </p>
            <input
              type="text"
              id="fname"
              name="Username"
              placeholder="@"
              className="create-profile-input"
            ></input>
            <br />
            <br />

            <br />
            <p>
              <label htmlFor="fname">Description</label>
            </p>
            <input
              type="text"
              id="fname"
              name="Description"
              placeholder=""
              className="add-link-input"
            ></input>
            <p>
              <label htmlFor="fname">URL</label>
            </p>
            <input
              type="text"
              id="fname"
              name="URL"
              placeholder=""
              className="add-link-input"
            ></input>

            <br />
            <br />
            <Button className="whiteLink" variant="contained">
              + Add new link
            </Button>

            <br />
            <br />
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

export default CreateLinks

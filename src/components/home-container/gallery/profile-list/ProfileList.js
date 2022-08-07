import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './ProfileList.css'
import {
  Typography,
  Button,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core'

import { apiKey } from '../../../../APIKEYS'
import CircularStatic from '../../../commons/CircularProgressWithLabel'
import { displayAll } from '../../../../Phase/displayAll'

function ProfileList({ account, contractData, setSelectedProfile }) {
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const loaddata = async () => {
      try {
        setLoading(true)
        const getAllProfiles = await displayAll()
        setProfiles(getAllProfiles)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    loaddata()
  }, [])

  const details = (profile) => {
    localStorage.removeItem('selectedProfile')
    localStorage.setItem('selectedProfile', profile)
    setSelectedProfile(profile)
    history.push('/profile/details')
  }

  return (
    <div style={{ minHeight: '60vh' }}>
      {loading ? (
        <CircularStatic />
      ) : (
        <div>
          <Grid container spacing={24}>
            {profiles.length ? (
              profiles.map((profile, index) => (
                <Grid item md={3} spacing={1} className="swap-card">
                  <Card sx={{ maxWidth: 200 }} onClick={() => details(profile)}>
                    <CardMedia
                      component="img"
                      height="194"
                      image={profile.image}
                      alt="Profile"
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="card-header-swap"
                      >
                        {profile.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <h2>No Profiles Yet...</h2>
            )}
          </Grid>
        </div>
      )}
    </div>
  )
}

export default ProfileList

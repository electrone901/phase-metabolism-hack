import React, { useEffect, useState } from 'react'
import ProfileList from './profile-list/ProfileList'

import logo from '../../../images/logo-large.png'
import { Grid, Container, Card } from '@material-ui/core'
import './HomeGallery.css'

function HomeGallery({ setSelectedProfile }) {
  return (
    <div
      style={{
        minHeight: '70vh',
        paddingBottom: '3rem',
        paddingTop: '2.5rem',
      }}
    >
      <Container>
        {/* Home Header */}
        <Container>
          <div className="root">
            <Grid container spacing={3}>
            <Grid item xs={5} className="outer">
                <img src={logo} className="logo-hero" alt="logo-hero" />
              </Grid>
              <Grid item xs={7}>
                <p className="home-text-intro">
                Connection develops in phases. Click profiles to see who people are on the outside, and follow them to learn more.
                </p>
              </Grid>
            </Grid>
          </div>
        </Container>

        {/* search */}
        <form className="search-form">
          <div className="pseudo-search">
            <input
              type="text"
              placeholder="Search for people, etc"
              autofocus
              required
            />
            <span className="search-clear">Clear</span>
            <span className="search-icon">🔍</span>
          </div>
        </form>

        <br />
        {/* Profiles */}
        <Card className="">
          <ProfileList setSelectedProfile={setSelectedProfile} />
        </Card>
      </Container>
    </div>
  )
}

export default HomeGallery

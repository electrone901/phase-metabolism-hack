import React, { useEffect, useState } from 'react'
import ProfileList from './profile-list/ProfileList'
import logo from '../../../images/logo.jpg'
import { Grid, Container, Card } from '@material-ui/core'
import './HomeGallery.css'

function HomeGallery() {
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
                <img src={logo} className="logo" alt="" />
                <p className="home-title">Phase</p>
              </Grid>
              <Grid item xs={7}>
                <p className="home-text-intro">
                  We don't make mistakes we just have happy little accidents. I
                  like to beat the brush. We wash our brush with odorless
                  thinner. You don't want to kill all your dark areas they are
                  very important. We'll put some happy little leaves here and
                  there.
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
          <ProfileList />
        </Card>
      </Container>
    </div>
  )
}

export default HomeGallery

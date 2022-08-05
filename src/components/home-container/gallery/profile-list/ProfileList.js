import React, { useState, useEffect } from 'react'
import './ProfileList.css'
import {
  Typography,
  Button,
  IconButton,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from '@material-ui/core'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import { Link } from 'react-router-dom'
import { apiKey } from '../../../../APIKEYS'
import CircularStatic from '../../../commons/CircularProgressWithLabel'

function ProfileList({ account, contractData }) {
  const [loading, setLoading] = useState(false)
  const [swapsData, setSwapsData] = useState([])

  useEffect(() => {
    const loadSwapList = async () => {
      try {
        setLoading(true)
        let cids = await fetch('https://api.nft.storage', {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        })
        cids = await cids.json()
        console.log(' cids', cids)
        const temp = []
        for (let cid of cids.value) {
          if (cid?.cid) {
            let data = await fetch(
              `https://ipfs.io/ipfs/${cid.cid}/metadata.json`,
            )
            data = await data.json()
            let dataSplit = data.description.split(',')
            data.description = dataSplit[0]
            data.userAccount = dataSplit[1]

            const getImage = (ipfsURL) => {
              if (!ipfsURL) return
              ipfsURL = ipfsURL.split('://')
              return 'https://ipfs.io/ipfs/' + ipfsURL[1]
            }
            data.image = await getImage(data.image)
            data.cid = cid.cid
            data.created = cid.created
            temp.push(data)
          }
        }
        setSwapsData(temp)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    loadSwapList()
  }, [])

  return (
    <div style={{ minHeight: '60vh' }}>
      {loading ? (
        <CircularStatic />
      ) : (
        <div>
          <Grid container spacing={24}>
            {swapsData.length ? (
              swapsData.map((swap, index) => (
                <Grid item md={3} spacing={1} className="swap-card">
                  <Card
                    sx={{ maxWidth: 200 }}
                    component={Link}
                    to={`/profile/${swap.cid}`}
                  >
                    <CardMedia
                      component="img"
                      height="194"
                      image={swap.image}
                      alt="Profile"
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="card-header-swap"
                      >
                        {swap.description}
                      </Typography>
                    </CardContent>
                    {/* <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <Button
                        variant="contained"
                        size="small"

                        // className="swap-msg-btn"
                      >
                        View
                      </Button>
                    </CardActions> */}
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

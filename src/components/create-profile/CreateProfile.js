import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button, Card, StylesProvider } from '@material-ui/core'
import './CreateProfile.css'
import { apiKey } from '../../APIKEYS'
import Rectangle from '../../images/Rectangle 77.png'
import { NFTStorage, File } from 'nft.storage'
import axios from 'axios'

function CreateProfile({
  setImage,
  setUsername,
  setBio,
  setCoverPhoto,
  image,
  username,
  bio,
  coverPhoto,
}) {
  const [imageName, setImageName] = useState('')
  const [imageType, setImageType] = useState('')

  const saveToNFTStorage = async (imgToSave) => {
    console.log('?? imgToSave', imgToSave)
    try {
      const client = new NFTStorage({ token: apiKey })
      const metadata = await client.store({
        name: 'username',
        description: 'description',
        image: new File([imgToSave], 'imageName', { type: 'image/*' }),
      })
      if (metadata) {
        let urlPartStorage = metadata.data.image.pathname
        urlPartStorage = urlPartStorage.substring(2)
        const imgUrl = `https://cloudflare-ipfs.com/ipfs/${urlPartStorage}`
        console.log('Result imgUrl', imgUrl)
        setImage(imgUrl)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleImage = async (event) => {
    setImageName(event.target.files[0].name)
    setImageType(event.target.files[0].type)
    const updataData = new FormData()
    updataData.append('file', event.target.files[0])
    const res = await axios.post(
      'https://api.pinata.cloud/pinning/pinFileToIPFS',
      updataData,
      {
        maxContentLength: 'Infinity',
        headers: {
          'Content-Type': 'multipart/form-data',
          pinata_api_key: '309d3c624b4ce20cea2b',
          pinata_secret_api_key:
            'a743aec5905097d38724b5daab66f9c206b0b3ef2d01ecccbe79cd2f0e15d026',
        },
      },
    )
    setImage('https://gateway.pinata.cloud/ipfs/' + res.data.IpfsHash)
  }

  const handleCoverPhoto = async (event) => {
    const updataData = new FormData()
    updataData.append('file', event.target.files[0])
    const res = await axios.post(
      'https://api.pinata.cloud/pinning/pinFileToIPFS',
      updataData,
      {
        maxContentLength: 'Infinity',
        headers: {
          'Content-Type': 'multipart/form-data',
          pinata_api_key: '309d3c624b4ce20cea2b',
          pinata_secret_api_key:
            'a743aec5905097d38724b5daab66f9c206b0b3ef2d01ecccbe79cd2f0e15d026',
        },
      },
    )
    setCoverPhoto('https://gateway.pinata.cloud/ipfs/' + res.data.IpfsHash)
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
              padding: '2rem',
              paddingBottom: '3rem',
              borderRadius: '13px',
              textAlign: 'start',
            }}
          >
            <div className="">
              <Button className="whiteLink" component={Link} to="/create">
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
                width: '150px',
                top: '0',
                left: '0',
              }}
              src={image ? image : Rectangle}
              alt="userBGimage"
            />

            <label htmlFor="formFileImage5">+ Upload</label>
            <input
              type="file"
              id="formFileImage5"
              onChange={handleImage}
              defaultValue={image}
              style={{ display: 'none' }}
              required
            />

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
              defaultValue={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
            <p style={{ textAlign: 'right', fontSize: '11px' }}>
              <label htmlFor="w3review">0/120</label>
            </p>

            <br />

            <p style={{ textAlign: 'left', paddingBottom: '11px' }}>
              <label htmlFor="w3review">Cover photo</label>
            </p>
            <input
              type="file"
              id="formFile"
              onChange={handleCoverPhoto}
              defaultValue=""
              required
            />
            <br />

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
              <Button className="whiteLink" component={Link} to="/">
                Nevermind
              </Button>
              <Button
                className="phase-btn"
                variant="contained"
                component={Link}
                to="/create-links"
              >
                Next
              </Button>
            </center>
          </Card>
        </center>
      </Container>
    </StylesProvider>
  )
}

export default CreateProfile

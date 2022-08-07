const { phase } = require('./utils/init.js')
const { ethers } = require('ethers')
const { request, gql } = require('graphql-request')

// // Returns promise that resolves to metadata object
// async function displayPhase(address) {

//     try {

//         let profile_address = await phase.phase(address)

//         //  Require profile_address == zero address
//         if (profile_address == ethers.constants.AddressZero) {
//             return {
//                 name : address,
//                 image : 'https://i.imgur.com/VvOpmh3.png' // Defailt avatar
//             }
//         }

//         // Set array items to variables
//         let [username, avatar, bio, banner] = await phase.viewProfile(address)

//         let links = await phase.viewLinks(address)

//         // Build metadata
//         let metadata = {
//             name : username,
//             image : avatar,
//             description : bio,
//             address : address
//         }

//         // Set banner as top attribute
//         let attributes = [ { "trait_type": "Banner", "value": banner } ]

//         // Set links as attributes
//         let title, url
//         links.forEach(link => {
//             [title, url] = link
//             attributes.push({ "trait_type": title, "value": url })
//         })

//         // Add attributes to metadata
//         metadata.attributes = attributes

//         return metadata

//     } catch (error) {
//         console.log(error)
//     }
    
// }

async function display (address) {

    let profile_address = await phase.phase(address)

    if (profile_address === ethers.constants.AddressZero) {
        return "Profile Doesn't Exist"
    }
    
    const profiles = `
    query MyQuery {
        token(token: {address: "${profile_address}", tokenId: "1"}, network: {chain: RINKEBY}) {
        token {
            metadata
        }
        }
    }
    
    
    `


    var response

    await request('https://api.zora.co/graphql', profiles).then(data => {
        response = data 
    })

    return response.token.token.metadata
    
}

//display('0x6EE6D1DF5E2DccD784f7a4bf8eCE5Dbc1babBD45')

exports.displayPhase = display
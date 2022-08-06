const { phase, signer } = require('./utils/init.js')
const { ethers } = require('ethers')

const { abi } = require('./utils/Phase.json')

async function doesFollow(follower, following) {

    let profile_address = await phase.phase(following)

    if (profile_address === ethers.constants.AddressZero) {
        return "User doesn't have profile"
    }

    const profile = new ethers.Contract(profile_address, abi, signer)

    let balance = await profile.balanceOf(follower)

    return balance > 0
}

exports.doesFollow = doesFollow
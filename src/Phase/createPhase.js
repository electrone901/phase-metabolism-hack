const { phase } = require('./utils/init.js')
const { ethers } = require('ethers')

/// @param links e.g. [ [ 'Twitter', 'https://twitter.com/enndsz' ],[ 'GitHub', 'https://github.com/ryansea' ] ]
async function createPhase(address, username, avatar, banner, bio, links) {
  try {
    // Get address of phase for user (should be zero address)
    let profile_address = await phase.phase(address)
    console.log('SHOULD BE THE CONTRACT profile_address', profile_address)

    //  Require profile_address == zero address
    if (profile_address !== ethers.constants.AddressZero) {
      return 'Phase Already Made!'
    }

    // Create profile
    let tx = await phase.createProfile(
      address,
      username,
      avatar,
      banner,
      bio,
      links,
    )

    return tx
  } catch (error) {
    console.log(error)
  }
}

exports.createPhase = createPhase

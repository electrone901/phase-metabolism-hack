const { phase } = require('./utils/init.js')
const { displayPhase } = require('./displayPhase.js')

// Displays all people following address
async function displayFollowers(address) {
  let totalTokens = await phase.phaseID(address)
  console.log('displayFollowers totalTokens', totalTokens)

  if (totalTokens == 1) {
    return 'No Followers!'
  }

  let followers = []

  let follower, metadata
  for (let i = 1; i < totalTokens; i++) {
    follower = await phase.ownerOf(address, i)

    metadata = await displayPhase(follower)

    followers.push(metadata)
  }

  console.log(' followers array', followers)

  return followers
}

exports.displayFollowers = displayFollowers

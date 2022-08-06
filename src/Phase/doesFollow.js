const { phase } = require('./utils/init.js')

async function doesFollow(follower, profile_username) {

    try {
        let profile_address = await phase.usernames(profile_username)
    } catch {
        return "Please enter follower ADDRESS, and profile USERNAME"
    }
    

    let follows =  await phase.isFollowing(follower, profile_address)

    return follows
}

exports.doesFollow = doesFollow
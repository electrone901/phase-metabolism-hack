const { phase } = require('./utils/init')
const { ethers } = require('ethers')

async function hasPhase(address) {
    let phase_address = await phase.phase(address)

    let answer = phase_address !== ethers.constants.AddressZero

    console.log(answer)
}

exports.hasPhase = hasPhase
const { phase } = require('./utils/init')
const { ethers } = require('ethers')

async function hasPhase(address) {
  let phase_address = await phase.phase(address)
  console.log('phase_address', phase_address)

  let answer = phase_address !== ethers.constants.AddressZero

  console.log(answer)
  return answer
}

exports.hasPhase = hasPhase

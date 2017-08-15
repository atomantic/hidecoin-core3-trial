'use strict'

// cryptocurrency constants

module.exports = {
  ADDRESS_GROUP_ID: Buffer.from([40]),
  
  INITIAL_REWARD: 1000000000,
  REDUCE_REWARD_EVERY: 259200,
  REDUCE_REWARD_FACTOR: 0.75,
  
  BLOCK_HEADER_LENGTH: 85,
  BASE_BLOCK_HEADER_LENGTH: 117,
  
  MIN_CONFIRMATIONS: 30,
  MIN_FEE: 10000,
  MIN_FEE_PER_BYTE: 30
}
const MINE_RATE = 1000;
const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
    timestamp: 1,
    lastHash: '-----',
    hash: 'hash-one',
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: []
};

const STARTING_BALANCE = 1000;

const REWARD_INPUT = { address: '*authorized-reward*' };

const MINING_REWARD = 50;
const DB = 'mongodb://localhost/blockchain';
const SESSION_SECRET = 'dKxfdQqlGwIM172lCoOB78kwwulRrV7qSezov38jlkPU6LG2xQyXh2DoFDD8';
const REDIS_DEVELOPMENT_URL = 'redis://127.0.0.1:6379';
const REDIS_LIVE_URL = 'redis://h:p80a937c1d0de87a73a01df9817b5fa9571bb24d21246f5df35ef487e10d76592@ec2-54-174-169-143.compute-1.amazonaws.com:24589';
const ENVIRONMENT = 'development';
const DEFAULT_PORT = 3000;
const ROOT_NODE_ADDRESS = `http://localhost:${DEFAULT_PORT}`;

module.exports = {
    ROOT_NODE_ADDRESS,
    DEFAULT_PORT,
    ENVIRONMENT,
    REDIS_DEVELOPMENT_URL,
    REDIS_LIVE_URL,
    DB,
    SESSION_SECRET,
    GENESIS_DATA,
    MINE_RATE,
    STARTING_BALANCE,
    REWARD_INPUT,
    MINING_REWARD
};

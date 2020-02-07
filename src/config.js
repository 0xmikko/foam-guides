/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

export const BACKEND_ADDR = 'http://localhost:8080';

const Network = 'RINKEBY'

const NetworkConfig = {
    'KOVAN': {
        FeedFactoryContractAddress: '0x3A1a3EfeDf5C3932Bac1b637EA8Ac2D904C58480',
        NetworkID: 42,
        NetworkName: "kovan",
        Etherscan: "https://kovan.etherscan.io",
        GraphQL_Endpoint: 'https://api.thegraph.com/subgraphs/name/erasureprotocol/kovan-v130',
    },
    'RINKEBY': {
        FeedFactoryContractAddress: '0x4b81D52e3c196B1D6D445bd99d356A86Eb98e86E',
        NetworkID: 4,
        NetworkName: "rinkeby",
        Etherscan: "https://rinkeby.etherscan.io",
        GraphQL_Endpoint: 'https://api.thegraph.com/subgraphs/name/erasureprotocol/rinkeby-v130',
    }
}

const nc = NetworkConfig[Network]

export const FEED_FACTORY_CONTRACT_ADDRESS = nc.FeedFactoryContractAddress
export const NETWORK_ID= nc.NetworkID
export const NETWORK_NAME = nc.NetworkName
export const ETHERSCAN_URL = nc.Etherscan
export const GRAPHQL_ENDPOINT = nc.GraphQL_Endpoint

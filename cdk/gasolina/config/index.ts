export const CONFIG: {
    [account: string]: {
        projectName: string
        environment: string
        gasolinaRepo: string
        appVersion: string
        availableChainNames: string
        signerType: string
        kmsNumOfSigners?: number
        extraContextRequestUrl?: string
    }
} = {
    // EDIT: aws account number
    '824247070589': {
        gasolinaRepo: 'us-east1-docker.pkg.dev/lz-docker/gasolina/gasolina',
        appVersion: '1.1.27', // EDIT: version and tag of the gasolina image
        projectName: 'layerzero-gasolina', // EDIT: project_name e.g. foobar-gasolina
        environment: 'mainnet', // EDIT: environment e.g. mainnet/testnet
        availableChainNames: 'abstract,animechain,ape,aptos,arbitrum,astar,aurora,avalanche,base,bb1,bera,bitlayer,blast,bob,botanix,bsc,canto,celo,codex,concrete,conflux,coredao,cronosevm,cronoszkevm,cyber,degen,dexalot,dfk,dos,edu,ethereum,etherlink,fantom,flare,flow,fraxtal,fuse,glue,gnosis,goat,gravity,gunz,harmony,hedera,hemi,hyperliquid,initia,ink,iota,islander,joc,katana,kava,klaytn,lens,lightlink,lisk,manta,mantle,merlin,meter,metis,mode,moonbeam,moonriver,morph,movement,mp1,nibiru,opbnb,optimism,orderly,peaq,plume,plumephoenix,polygon,rarible,real,rootstock,scroll,sei,shimmer,solana,somnia,soneium,sonic,sophon,story,subtensorevm,superposition,swell,tac,taiko,telos,tomo,ton,tron,unichain,worldchain,xai,xchain,xdc,xlayer,xpla,zircuit,zkconsensys,zkpolygon,zksync,zora',
        signerType: 'KMS', // EDIT: MNEMONIC or KMS
        kmsNumOfSigners: 1, // EDIT: only required if signerType is KMS
        // extraContextRequestUrl: undefined // EDIT: optional
    },
}

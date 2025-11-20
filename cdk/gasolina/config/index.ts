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
        appVersion: '1.1.43', // EDIT: version and tag of the gasolina image
        projectName: 'layerzero-gasolina', // EDIT: project_name e.g. foobar-gasolina
        environment: 'mainnet', // EDIT: environment e.g. mainnet/testnet
        availableChainNames: 'abstract,animechain,ape,apexfusionnexus,aptos,arbitrum,astar,aurora,avalanche,base,bb1,bera,bitlayer,blast,bob,botanix,bsc,camp,canto,celo,codex,concrete,conflux,coredao,cronosevm,cronoszkevm,cyber,degen,dexalot,dfk,doma,dos,edu,ethereal,ethereum,etherlink,fantom,flare,flow,fraxtal,fuse,glue,gnosis,goat,gravity,gunz,harmony,hedera,hemi,hyperliquid,initia,injectiveevm,ink,iota,islander,joc,katana,kava,klaytn,lens,lightlink,lisk,manta,mantle,merlin,meter,metis,mode,monad,moonbeam,moonriver,morph,movement,mp1,nexera,nibiru,og,opbnb,openledger,optimism,orderly,peaq,plasma,plume,plumephoenix,polygon,rarible,real,rootstock,scroll,sei,shimmer,silicon,solana,somnia,soneium,sonic,sophon,stable,story,subtensorevm,sui,superposition,swell,tac,taiko,telos,tomo,ton,tron,unichain,worldchain,xai,xchain,xdc,xlayer,xpla,zama,zircuit,zkconsensys,zkpolygon,zksync,zkverify,zora',
        signerType: 'KMS', // EDIT: MNEMONIC or KMS
        kmsNumOfSigners: 1, // EDIT: only required if signerType is KMS
        // extraContextRequestUrl: undefined // EDIT: optional
    },
}
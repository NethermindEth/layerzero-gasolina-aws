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
        appVersion: '1.1.17', // EDIT: version and tag of the gasolina image
        projectName: 'layerzero-gasolina', // EDIT: project_name e.g. foobar-gasolina
        environment: 'mainnet', // EDIT: environment e.g. mainnet/testnet
        availableChainNames: 'abstract,ape,aptos,arbitrum,astar,aurora,avalanche,base,bb1,bera,bitlayer,blast,bob,bsc,canto,celo,codex,conflux,concrete,coredao,cronosevm,cronoszkevm,cyber,degen,dexalot,dfk,dm2verse,dos,ebi,edu,ethereum,etherlink,fantom,flare,flow,fraxtal,fuse,glue,gnosis,goat,gravity,harmony,hemi,hyperliquid,joc,ink,iota,islander,kava,klaytn,lightlink,manta,mantle,masa,merlin,meter,metis,mode,moonbeam,moonriver,morph,mp1,nibiru,opbnb,optimism,orderly,peaq,plume,polygon,rarible,real,rootstock,scroll,sei,shimmer,solana,soneium,sonic,sophon,story,superposition,swell,taiko,telos,tomo,ton,tron,unichain,worldchain,xai,xchain,xlayer,xpla,zircuit,zkconsensys,zkpolygon,zksync,zora',
        signerType: 'KMS', // EDIT: MNEMONIC or KMS
        kmsNumOfSigners: 1, // EDIT: only required if signerType is KMS
        // extraContextRequestUrl: undefined // EDIT: optional
    },
}

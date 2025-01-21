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
        appVersion: '1.1.12', // EDIT: version and tag of the gasolina image
        projectName: 'layerzero-gasolina', // EDIT: project_name e.g. foobar-gasolina
        environment: 'mainnet', // EDIT: environment e.g. mainnet/testnet
        availableChainNames: 'abstract,ape,arbitrum,astar,aurora,avalanche,base,bb1,bitlayer,blast,bob,bsc,canto,celo,codex,conflux,coredao,cyber,degen,dexalot,dfk,dm2verse,dos,ebi,edu,ethereum,etherlink,fantom,flare,flow,fraxtal,fuse,glue,gnosis,gravity,harmony,hemi,ink,iota,islander,kava,klaytn,lightlink,manta,mantle,masa,merlin,meter,metis,mode,moonbeam,moonriver,morph,mp1,opbnb,optimism,orderly,peaq,plume,polygon,rarible,real,rootstock,scroll,sei,shimmer,soneium,sonic,sophon,superposition,swell,taiko,telos,tomo,tron,worldchain,xai,xchain,xlayer,xpla,zircuit,zkconsensys,zkpolygon,zksync,zora',
        signerType: 'KMS', // EDIT: MNEMONIC or KMS
        kmsNumOfSigners: 1, // EDIT: only required if signerType is KMS
        // extraContextRequestUrl: undefined // EDIT: optional
    },
}

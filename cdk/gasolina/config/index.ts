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
        appVersion: '1.1.51', // EDIT: version and tag of the gasolina image
        projectName: 'layerzero-gasolina', // EDIT: project_name e.g. foobar-gasolina
        environment: 'mainnet', // EDIT: environment e.g. mainnet/testnet
        availableChainNames: 'abstract,animechain,ape,apexfusionnexus,aptos,arbitrum,astar,aurora,avalanche,base,bera,bitlayer,blast,bob,botanix,bsc,camp,canto,celo,citrea,chiliz,codex,conflux,coredao,cronosevm,cronoszkevm,cyber,degen,dexalot,dfk,doma,dos,edu,ethereal,ethereum,etherlink,fantom,flare,flow,fraxtal,fuse,gatelayer,glue,gnosis,goat,gravity,gunz,harmony,hedera,hemi,horizen,hyperliquid,initia,injectiveevm,ink,iota,iotal1,irys,islander,joc,katana,kava,kite,klaytn,lens,lightlink,lisk,manta,mantle,megaeth,merlin,meter,metis,mode,monad,moonbeam,moonriver,morph,movement,mp1,nexera,nibiru,og,opbnb,openledger,optimism,orderly,peaq,pharos,plasma,plumephoenix,polygon,rarible,redbelly,rise,rootstock,sagaevm,scroll,sei,shimmer,silicon,solana,somnia,soneium,sonic,sophon,stable,starknet,story,subtensorevm,sui,superposition,swell,tac,taiko,telos,tempo,tomo,ton,tron,unichain,worldchain,xai,xchain,xdc,xlayer,xpla,zama,zircuit,zkconsensys,zkpolygon,zksync,zkverify,zora',
        signerType: 'KMS', // EDIT: MNEMONIC or KMS
        kmsNumOfSigners: 1, // EDIT: only required if signerType is KMS
        // extraContextRequestUrl: undefined // EDIT: optional
    },
}

import * as fs from 'fs'
import * as path from 'path'
import * as dotenv from 'dotenv';

type EnvVariableConfig = {
    envVarName: string;
    anchorString: string;
};

const replaceEnvVariables = (configs: EnvVariableConfig[]) => {
    const providersPath = path.join(__dirname, '../../cdk/gasolina/config/providers/mainnet/providers.json');

    try {
        let providersContent = fs.readFileSync(providersPath, 'utf8');

        configs.forEach(({ envVarName, anchorString }) => {
            const envVar = process.env[envVarName];
            if (!envVar) {
                throw new Error(`${envVarName} environment variable is not set`);
            }
            providersContent = providersContent.replace(new RegExp(`\\\${${anchorString}}`, 'g'), envVar);
            console.log(`Successfully replaced ${envVarName} placeholder in providers.json`);
        });

        fs.writeFileSync(providersPath, providersContent);
    } catch (error) {
        console.error('Error updating providers.json:', error);
        throw error;
    }
};

dotenv.config();

// Usage
replaceEnvVariables([
    { envVarName: 'INFURA_API_KEY', anchorString: 'infura_api_key' },
    { envVarName: 'ALCHEMY_API_KEY', anchorString: 'alchemy_api_key' },
    { envVarName: 'BERA_RPC_JWT', anchorString: 'bera_rpc_jwt' },
    { envVarName: 'TON_API_KEY', anchorString: 'ton_api_key' }
]);

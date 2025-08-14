import * as fs from 'fs'
import * as path from 'path'

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

const rollbackEnvVariables = (configs: EnvVariableConfig[]) => {
    const providersPath = path.join(__dirname, '../../cdk/gasolina/config/providers/mainnet/providers.json');

    try {
        let providersContent = fs.readFileSync(providersPath, 'utf8');

        configs.forEach(({ envVarName, anchorString }) => {
            const envVar = process.env[envVarName];
            if (!envVar) {
                console.warn(`${envVarName} environment variable is not set, skipping rollback`);
                return;
            }
            providersContent = providersContent.replace(
                new RegExp(envVar, 'g'), 
                `\${${anchorString}}`
            );
            console.log(`Successfully rolled back ${envVarName} in providers.json`);
        });

        fs.writeFileSync(providersPath, providersContent);
    } catch (error) {
        console.error('Error rolling back providers.json:', error);
        throw error;
    }
};

const configs = [
    { envVarName: 'INFURA_API_KEY', anchorString: 'INFURA_API_KEY' },
    { envVarName: 'ALCHEMY_API_KEY', anchorString: 'ALCHEMY_API_KEY' },
    { envVarName: 'TON_API_KEY', anchorString: 'TON_API_KEY' },
    { envVarName: 'MOVEMENT_BEARER_TOKEN', anchorString: 'MOVEMENT_BEARER_TOKEN' },
    { envVarName: 'LENS_TOKEN', anchorString: 'LENS_TOKEN' },
    { envVarName: 'ERPC_AUTH_TOKEN', anchorString: 'ERPC_AUTH_TOKEN' },
    { envVarName: 'SHINAMI_BEARER_TOKEN', anchorString: 'SHINAMI_BEARER_TOKEN' }
];

// Get command line argument
const action = process.argv[2];

if (!action) {
    console.error('Please provide an action: replace or rollback');
    process.exit(1);
}

switch (action.toLowerCase()) {
    case 'replace':
        replaceEnvVariables(configs);
        break;
    case 'rollback':
        rollbackEnvVariables(configs);
        break;
    default:
        console.error('Invalid action. Use either "replace" or "rollback"');
        process.exit(1);
}

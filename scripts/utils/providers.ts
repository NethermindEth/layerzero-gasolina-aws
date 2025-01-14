import * as fs from 'fs'
import * as path from 'path'

type ApiKeyConfig = {
    apiKeyName: string;
    envVarName: string;
    anchorString: string;
};

const replaceApiKeys = (configs: ApiKeyConfig[]) => {
    const providersPath = path.join(__dirname, '../../cdk/gasolina/config/providers/mainnet/providers.json');

    try {
        let providersContent = fs.readFileSync(providersPath, 'utf8');

        configs.forEach(({ apiKeyName, envVarName, anchorString }) => {
            const apiKey = process.env[envVarName];
            if (!apiKey) {
                throw new Error(`${envVarName} environment variable is not set`);
            }
            providersContent = providersContent.replace(new RegExp(`\\\${${anchorString}}`, 'g'), apiKey);
            console.log(`Successfully replaced ${apiKeyName} placeholder in providers.json`);
        });

        fs.writeFileSync(providersPath, providersContent);
    } catch (error) {
        console.error('Error updating providers.json:', error);
        throw error;
    }
};

// Usage
replaceApiKeys([
    { apiKeyName: 'Infura API Key', envVarName: 'INFURA_API_KEY', anchorString: 'infura_api_key' },
    { apiKeyName: 'Alchemy API Key', envVarName: 'ALCHEMY_API_KEY', anchorString: 'alchemy_api_key' }
]);

import { Stack, StackProps, Tags } from 'aws-cdk-lib'
import * as ec2 from 'aws-cdk-lib/aws-ec2'
import * as ecs from 'aws-cdk-lib/aws-ecs'
import { Construct } from 'constructs'

export interface WalletDefinition {
    name: string
    byChainType: {
        [chainType: string]: {
            address: string
            secretName: string
        }
    }
}

export class LZCdkStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props)
        
        // Add ProjectCode tag to all resources in this stack
        Tags.of(this).add('ProjectCode', 'LYZ-LNO-01')
    }

    protected createVpc(
        id: string = 'TheVPC',
        cidr: string = '10.0.0.0/16',
    ): ec2.Vpc {
        return new ec2.Vpc(this, id, { cidr })
    }

    protected createFargateEcsCluster(
        vpc: ec2.Vpc,
        id: string = 'ECSCluster',
        containerInsights: boolean = true,
    ): ecs.Cluster {
        return new ecs.Cluster(this, id, {
            vpc,
            enableFargateCapacityProviders: true,
            containerInsights,
        })
    }
}

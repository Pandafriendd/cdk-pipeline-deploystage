import { CdkWorkshopStack } from './cdk-pipeline-resource-stack';
import { Stage, Construct, StageProps } from '@aws-cdk/core';

export class WorkshopPipelineStage extends Stage {
    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props);

        new CdkWorkshopStack(this, 'ResourceStack');
    }
}
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';


export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // defines an AWS Lambda resource
    const handler = new lambda.Function(this, 'MyFunc', {
      code: lambda.Code.fromInline('boom'),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_12_X,
    });
  }
}

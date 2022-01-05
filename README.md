# Satisfactory Server AWS
Automated Satisfactory Dedicated Server management on AWS

## Intro
FICSIT Incorporated has provided you with this tool (cost deducted from your existing balance) to assist you with Project Assembly.  This tool can help you collaborate with friends on your factory projects.

This project uses [AWS CDK](https://aws.amazon.com/cdk/) to provision everying you need to host a [Satisfactory Dedicated Server](https://satisfactory.fandom.com/wiki/Dedicated_servers) on AWS.  It includes the following:
 - VPC/Network configuration
 - Ec2 Instance provisioning
 - Automatic shutdown behavior when not in use (saves $$)
 - Automatic game file backup to s3
 - A Lambda browser endpoint to start the server back up

### Costs
If you play on the server 2 hours per day, this setup will cost around $5/month on AWS.

Since the server automatically shuts down when not in use, you only pay when the server is up and you (or your friends) are actively playing on it.

S3 and Lambda usage costs are free tier eligable.

### Disclaimers
This is a free and open source project and there are no guarantees that it will work or always continue working.  If you use it, you are responsible for maintaining your setup and monitoring and paying for your AWS bill.  It is a great project for learning a little AWS and CDK, but it is not so great if you wish to have a hands-off experience managing your game server.

## Requirements

- [AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
- [Git](https://git-scm.com/downloads)
- [AWS Command Line Interface (cli)](https://aws.amazon.com/cli/)
- [NodeJs](https://nodejs.org/en/download/)

## Quick Start
This assumes you have all requirements and have [configured aws cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)

1. [Clone this project](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
2. `npm install`
3. `npx cdk boostrap <aws account number>/<aws region>` (replace account number and region)
4. `cp .config.sample.ts .config.ts` (see [Configuration](#configuration) for customization)
5. `npx cdk deploy`
6. Wait for the CloudFormation stack to finish. It may take a few minutes for the server to download/install everything after the stack is finished.
7. Use the Ec2 instance public IP address to connect to your server in Satisfactory Server Manager (see [DNS / IP management](#dns-and-ip-management))
8. Start a new game or upload a save

## Installation

### Creating an AWS Account

### Installing and configuring aws cli

### Installing node

## Configuration



Copy the given `config.sample.ts` file to `config.ts` file. Fill the fields with appropriate values. Explanation for each field is given in file itself.

## Deploying

## Additional Notes

### DNS and IP management

### Contributing
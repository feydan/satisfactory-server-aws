# satisfactory-tools
Tools for automating Satisfactory server management on AWS

## Intro
FICSIT Incorporated has provided you with this tool (cost deducted from your existing balance) to assist you with Project Assembly.  This tool can help you collaborate with friends on your factory projects.

This project uses [AWS CDK](https://aws.amazon.com/cdk/) to provision everying you need to host a [Satisfactory Dedicated Server](https://satisfactory.fandom.com/wiki/Dedicated_servers) on AWS.  It includes the following:
 - VPC/Network configuration
 - Ec2 Instance provisioning
 - Automatic shutdown behavior when not in use (saves $$)
 - Automatic game file backup to s3
 - A Lambda browser endpoint to start the server back up

### Costs
If you play on the server 2 hours per day, this setup will cost around $5/month.

Since the server automatically shuts down when not in use, you only pay when the server is up and you (or your friends) are actively playing on it.

S3 and Lambda usage costs are free tier eligable.

### Disclaimers
This is a free and open source project and there are no guarantees that it will work or always continue working.  If you use it, you are responsible for maintaining your setup and monitoring and paying for your AWS bill.  It is a great project for learning a little AWS and CDK, but it is not so great if you wish to have a hands-off experience managing your game server.

## Requirements

## Quick Start

## Installation

### Creating an AWS Account

### Installing and configuring aws cli

### Installing node

## Configuration



Copy the given `config.sample.ts` file to `config.ts` file. Fill the fields with appropriate values. Explanation for each field is given in file itself.

## Deploying

## Additional Notes

### DNS / IP management

### Contributing
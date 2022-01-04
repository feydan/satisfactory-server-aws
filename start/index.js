import { EC2Client, StartInstancesCommand } from "@aws-sdk/client-ec2";
import * as http from 'http';

const port = process.env.PORT

console.log(process.env.INSTANCE_ID)

const instanceId = process.env.INSTANCE_ID
const client = new EC2Client()
const command = new StartInstancesCommand({InstanceIds: [instanceId]});

const server = http.createServer(function (req, res) {
  client.send(command)
    .then(ares => {
      const instances = ares.StartingInstances
      console.log(Date.now(), instances)
      res.writeHead(200, { 'Content-Type': 'application/json' });

      const cleanedRes = instances.map(i => ({CurrentState: i.CurrentState, PreviousState: i.PreviousState}))
      res.end(JSON.stringify(cleanedRes))
    })
    .catch(err => {
      console.dir(Date.now(), err)
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end('Error - yell at Dan')
    })
})

server.listen(port)
console.log('Started server on port: ' + port)
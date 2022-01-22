# How to setup a discord bot to start your satisfactory server remotely

# Requirements

You will need:

* A discord account
* A discord server that you manage (meaning you can add apps and bots to it)
* A machine with internet access (or whatever access needed to start your satisfactory server remotely) where your bot will be running
* NodeJS 16.6+ installed on that machine

# Stage 1 : Setup the discord app and the code 

* Copy the code contained in this folder on your machine and install it by running `npm install`
* Get yourself a discord application with a bot and add the bot to your Discord server. I suggest you follow the very good instructions here: https://discordjs.guide/preparations/setting-up-a-bot-application.html
* Copy the important information (Bot Token, App Client Id and GuildId) in the `config.json` file
* Create your custom code to start your Satisfactory server in the `commands/ficsit.js` file (You will need to modify this file so it calls Lambda or any other service you wish to use to start your bot)

# Stage 2 : Deploy your code

* From the machine where your bot will run, deploy your commands with `node deploy-commands.js` (This registers the commands with your bot application so they can be used). This need to be done everytime you add a new command
* From the machine where your bot will run, start your bot with `node index.js` (This will login the bot in your server and he will be available to respond to commands and NEED to be running for your bot to stay online)
* Test out your commands : `/ping`, `/user` and `/server` are example commands included to test that your bot work with the most basic of commands.
* The `/ficsit` command is to be used to start your Satisfactory server.

# Optional : If you want to run your bot as a linux service
* Modify the `discord-bot.service` with your appropriate PATHS, USER and GROUP and copy it to `/etc/systemd/system/discord-bot.service`
* Add `#!/usr/bin/env node` as the very first line of the `index.js` file
* Make the `index.js` file executable by running `chmod +x index.js`
* Use `sudo systemctl daemon-reload` followed by `sudo systemctl enable discord-bot.service` followed by `sudo systemctl start discord-bot.service` to register/enable/start your discord bot service
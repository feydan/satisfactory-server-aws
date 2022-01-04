#!/bin/sh

# install steamcmd: https://developer.valvesoftware.com/wiki/SteamCMD?__cf_chl_jschl_tk__=pmd_WNQPOiK18.h0rf16RCYrARI2s8_84hUMwT.7N1xHYcs-1635248050-0-gqNtZGzNAiWjcnBszQiR#Linux.2FmacOS)
sudo useradd -m steam

sudo add-apt-repository multiverse
sudo dpkg --add-architecture i386
sudo apt update


sudo apt install lib32gcc1 steamcmd

# install satisfactory: https://satisfactory.fandom.com/wiki/Dedicated_servers
steamcmd +login anonymous +app_update 1690800 -beta experimental validate +quit

# enable as server so it stays up: https://satisfactory.fandom.com/wiki/Dedicated_servers/Running_as_a_Service


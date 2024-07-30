const fs = require('fs');
const Discord = require('discord.js');
const { Client, Intents, GatewayIntentBits, ActivityType, Status } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, 'config', '.env') });

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

async function updateStorageStatus() {
    try {
        const headers = {
            'Authorization': 'Bearer ' + process.env.ULTRA_TOKEN
        };
        let response = await axios.get(process.env.ULTRA_URL, { headers });
        let used = response.data.service_stats_info.used_storage_value;
        let total = response.data.service_stats_info.total_storage_value;

        await client.user.setPresence({
            activities: [{ name: `Storage: ${used}GB / ${total}GB`, type: ActivityType.Playing }],
            status: 'online',
        });
    } catch (error) {
        console.error('Error fetching storage information:', error);
    }
}

client.once('ready', async () => {
    console.log('Skeet Skeet');
    await updateStorageStatus();
    setInterval(updateStorageStatus, 3600000);
});

client.login(process.env.TOKEN);
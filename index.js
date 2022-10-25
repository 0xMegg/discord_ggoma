// // Require the necessary discord.js classes
// const { Client, GatewayIntentBits } = require('discord.js');
// const dotenv = require('dotenv').config();

// // Create a new client instance
// const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// // When the client is ready, run this code (only once)
// client.once('ready', () => {
//     console.log('Ready!');
// });

// // Login to Discord with your client's token
// client.login(process.env.TOKEN);

// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === "al") {
    const messages = ["It's Megg!!!", "메그라고!!!"];
    await interaction.reply(
      messages[Math.floor(Math.random() * messages.length)]
    );
  } else if (commandName === "user") {
    await interaction.reply("메그라고!!!");
  }
});
// Login to Discord with your client's token
client.login(token);

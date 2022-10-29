const { SlashCommandBuilder } = require("discord.js");

const pingCommandBuilder = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with Pong!");

module.exports = pingCommandBuilder;

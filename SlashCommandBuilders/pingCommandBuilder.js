const { SlashCommandBuilder } = require("discord.js");

const pingCommandBuilder = [
  new SlashCommandBuilder()
    .setName("megg_rsp")
    .setDescription("Rock Scissors Paper!")
    .addIntegerOption((option) =>
      option
        .setName("choice")
        .setDescription("choice your hand")
        .setRequired(true)
        .addChoices(
          { name: "Rock", value: 1 },
          { name: "Scissors", value: 2 },
          { name: "Paper", value: 3 }
        )
    ),
  new SlashCommandBuilder()
    .setName("megg_coinflip")
    .setDescription("Guess a side!")
    .addIntegerOption((option) =>
      option
        .setName("choice")
        .setDescription("choice a side!")
        .setRequired(true)
        .addChoices(
          { name: "Front", value: 1 },
          { name: "Back", value: 2 }
        )
    ),
  new SlashCommandBuilder()
    .setName("megg_ccc")
    .setDescription("Charm Charm Charming Megg")
    .addIntegerOption((option) =>
      option
        .setName("choice")
        .setDescription("choice your direction")
        .setRequired(true)
        .addChoices(
          { name: "upper", value: 1 },
          { name: "lower", value: 2 },
          { name: "left", value: 3 },
          { name: "right", value: 4}
        )
    ),
];

module.exports = pingCommandBuilder;

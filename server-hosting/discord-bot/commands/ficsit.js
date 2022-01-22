const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ficsit')
		.setDescription('Start the satisfactory server!'),
	async execute(interaction) {
		await interaction.reply("Sending message to start Satisfactory Server!");
		///////// Your code to start the Satisfactory Server here ////////
	},
};




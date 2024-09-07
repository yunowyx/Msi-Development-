const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("davet")
        .setDescription("Botun davet linklerini gösterir."),

    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setTitle("Msi Development - İstatistik!")
            .setDescription(`> **Merhaba bütün sosyal linklerimizi alttaki butonlara basarak görebilirsiniz.**`)
            .setImage("https://media.discordapp.net/attachments/1277948940141985793/1277949060967567451/MsiDEV-BannerTasarm.png?ex=66dd86cf&is=66dc354f&hm=bbf303856fa738e48179e15c10b8dcc6701623dcd2edc7bbb9a77d52abdaa8a5&format=webp&quality=lossless&width=1066&height=600&")
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Davet Et")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://discord.com/oauth2/authorize?client_id=1281944681160249395&permissions=8&integration_type=0&scope=bot"),
                new ButtonBuilder()
                    .setLabel("Destek Sunucusu")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://discord.gg/msidev"),
                new ButtonBuilder()
                    .setLabel("Oy Ver")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://discord.com/channels/1275557243466678343/1275950967245901908")

            )
        interaction.reply({ embeds: [embed], components: [row] })

    },
};

const { ActivityType, Events } = require("discord.js")
module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        let activities = [`Msi Development`, `${client.user.username}` , `Msi Development`], i = 0;
        setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Listening }), 22000);
    }
};
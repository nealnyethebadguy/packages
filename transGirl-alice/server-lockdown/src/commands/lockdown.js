module.exports = {
    name: 'lockdown',
    description: 'USE INCASE OF EMERGENCIES',
    execute(message, args, Discord, client ,version) {
        const fs = require("fs")
        if (args[0] == "unlock") {
            let channelsPerms = new Map (JSON.parse(fs.readFileSync("lockdown"))) //load permissions from file system
            message.guild.channels.cache.array().forEach(channel=>{
                channel.overwritePermissions(channelsPerms.get(channel.id)) // set permissions to previous settings
            })
            message.reply("Unlocked server")
            fs.unlinkSync("lockdown");
        } else {
            if(fs.existsSync("lockdown")) return;
            let t = new Map() // init map
            message.guild.channels.cache.array().forEach(channel=>{ // for each channel 
                t.set(channel.id, channel.permissionOverwrites) // store permissions in map
                channel.updateOverwrite(message.mentions.roles.first(), {SEND_MESSAGES: false}) // set the send message permission to false
            })
            message.reply("Server has been lock down")
            fs.writeFileSync("lockdown", JSON.stringify([...t])); // store permissions on filesystem
        }
    },
}

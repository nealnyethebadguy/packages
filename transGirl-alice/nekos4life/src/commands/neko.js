module.exports = {
    name: 'neko',
    description: ':smirk_face:',
    execute(message, args, Discord, client ,version) {
		const fetch = require("node-fetch");
let sfw;
switch(args[0]) {
case 'smug':
case 'baka':
case 'tickle':
case 'slap':
case 'poke':
case 'pat':
case 'neko':
case 'ngif':
case 'meow':
case 'lizard':
case 'kiss':
case 'hug':
case 'fox_girl':
case 'feed':
case 'cuddle':
case 'kemonomimi':
case 'holo':
case 'woof':
case 'wallpaper':
case 'goose':
case 'gecg':
case 'avatar':
case 'waifu':
case '8ball':
	sfw=true;
	break;
case 'help':
    message.reply("8ball smug baka tickle slap poke pat neko ngif meow lizard kiss hug fox_girl feed cuddle kemonomimi holo woof wallpaper goose gecg avatar waifu")
    return;
default:
	sfw=false;
}
if (!sfw) {
    message.reply("Oops, either the command isn't sfw or it isn't a real command")
    return;
}
        //fetch
        fetch(`https://nekos.life/api/v2/img/${args[0]}`)
            .then(response => response.json()) //json
            .then(response => {
                if (response.url != "") message.reply(response.url).catch(e=> {
                    message.reply(`Command failed to run, did you mess up? \n error log \`\`\`\n ${e}\n\`\`\``);
                });
            }).catch(e => {
                message.reply(`Command failed to run, did you mess up? \n error log \`\`\`\n ${e}\n\`\`\``)
            })
    },
};

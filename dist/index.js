"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const messages_1 = require("./messages");
const loop_1 = require("./utils/loop");
const client = new discord_js_1.Client();
client.login(process.env.BOT_TOKEN);
client.once("ready", () => console.log("Astra is Running!"));
client.on("message", (message) => {
    if (message.content.includes("!callout")) {
        const [, user] = message.content.split(" ");
        message.channel.send(`${user}, you're a scrub`);
    }
    if (message.content.includes("!spam")) {
        const [, ...messageToSpam] = message.content.split(" ");
        if (messageToSpam.length === 0) {
            loop_1.loop(5, () => message.channel.send("spamming"));
            return;
        }
        loop_1.loop(5, () => message.channel.send(messageToSpam.join(" ")));
    }
    if (message.content.includes("!randomnumber")) {
        return message.channel.send(Math.floor(Math.random() * 10) + 1);
    }
    if (message.content.includes("!randommessage")) {
        const randIndex = Math.floor(Math.random() * messages_1.randomMessages.length);
        const randMessage = messages_1.randomMessages[randIndex];
        return message.channel.send(randMessage);
    }
});

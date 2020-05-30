const { Client } = require("discord.js");
require("dotenv-extended").load();

const client = new Client({ disableMentions: "none" });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") msg.channel.send("Pong!");

  if (msg.content === "everyone")
    msg.channel.send("@everyone , Salut a tous !");

  if (msg.content === "noteveryone")
    msg.channel.send("@everyone (noteveryone), Salut a tous !", {
      disableMentions: "everyone",
    });
});

client.login(process.env.TOKEN_DISCORD);

const { Client } = require("discord.js");
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

client.login("NzE2MjQ4MTQ0MDM5NjQxMDk4.XtJD2g.h_8-1yMK8aN0bLl0BdiUgFhck3M");

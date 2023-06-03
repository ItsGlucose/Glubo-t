const mineflayer = require("mineflayer");
const moment = require("moment");
const readline = require("readline");
  const reconnectDelay = 5000; // 5 seconds delay

const username = "test";
const serverIP = "play.paradise-city.ir";
const serverPort = 25565;
const version = "1.19.3";
const physicsEnabled = true;

let bot;

function createBot() {
  bot = mineflayer.createBot({
    host: serverIP,
    port: serverPort,
    username: username,
    version: version,
    physicsEnabled: physicsEnabled,
  });

  bot.on("kicked", (reason) => {
    console.log(`Kicked from server: ${reason}`);
    console.log("Reconnecting...");
    setTimeout(createBot, reconnectDelay); // Reconnect after delay
  });

  bot.on("error", (err) => {
    console.log(`An error occurred: ${err}`);
    console.log("Reconnecting...");
    setTimeout(createBot, reconnectDelay); // Reconnect after delay
  });

  bot.on("messagestr", (msg) => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${msg}`);

    if (msg.includes("Login with /login")) {
      const loginMessage = "/login test";
      bot.chat(loginMessage);
    }
    if (msg.includes("Glu mikhahad be shoma teleport")) {
      bot.chat("/tpyes");
    }
    if (msg.includes("Glu mikhahad be locationesh")) {
      bot.chat("/tpyes");
    }
    if (msg.includes("MiNaToOo mikhahad be shoma teleport")) {
      bot.chat("/tpyes");
    }
    if (msg.includes("Pain mikhahad be shoma teleport")) {
      bot.chat("/tpyes");
    }
    if (msg.includes("moz_13 mikhahad be shoma teleport")) {
      bot.chat("/tpyes");
    }
    if (msg.includes("AltLoSiFFeR mikhahad be shoma teleport")) {
      bot.chat("/tpyes");
    }
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sendChatMessage(message) {
  bot.chat(message);
}

rl.on("line", (input) => {
  sendChatMessage(input);
});

createBot();
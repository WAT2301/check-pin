const { Client, MessageEmbed } = require('discord.js');
const client = new Client();


require('dotenv').config();
const config = {
  token: process.env.TOKEN
};
var mineflayer = require('mineflayer')

// var options = {
//   ip: "2y2c.org",
//   username: "KenPro147",
//   ver: "1.12.2"
// };
let ip = "2y2c.org"

let username = "WAT"

let ver = "1.12.2" 

const fs = require('fs');
// function genRandomInt (integer) {
//   return Math.floor(Math.random()*integer)

// }
function genRandomInt (min, max) {
  return Math.floor(Math.random()*max) + min
}
function createBot () {
  var a = genRandomInt(1, 9)
  var b = genRandomInt(1, 9)
  var c = genRandomInt(1, 9)
  var d = genRandomInt(1, 9)

  var bot = mineflayer.createBot({
    host: ip ,
    username: username,
    version: ver
  })

  bot.on('windowOpen', (window)=> {
    window.requiresConfirmation = false;
//     bot.clickWindow(z, 0, 0)
//     bot.clickWindow(x, 0, 0)
//     bot.clickWindow(v, 0, 0)
//     bot.clickWindow(f, 0, 0);
    bot.clickWindow(a, 0, 0)
    bot.clickWindow(b, 0, 0)
    bot.clickWindow(c, 0, 0)
    bot.clickWindow(d, 0, 0);

    setTimeout(() => {bot.chat('/2y2c')}, 15 * 1000)
    setTimeout(() => { bot.clickWindow(10, 0, 0) }, 20 * 1000)
  }) 
  process.setMaxListeners(0);

  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)



  bot.on('login', async () => {
    let channel = client.channels.cache.get(`854712390817808404`)
    console.log(`nice ${username}`);
    bot.once('spawn', () => { 
        channel.send(`EZ PIN ${a} ${b} ${c} ${d} (ingame: ${username})`)
      })
    })
  bot.on('message', message => {
      let channel = client.channels.cache.get(`854712390817808404`)
      if (!channel) return;
      const cn = new MessageEmbed()
          .setDescription(`${message}`)
      channel.send(cn)

  })
  bot.on('kicked', function() {
    let channel = client.channels.cache.get(`854712390817808404`)
      if (!channel) return;
      const cn3 = new MessageEmbed()
              .setColor('F90000')
              .setDescription(`Bot đã bị disconnect khỏi ${ip}`)
          channel.send(cn3);
      setTimeout(createBot, 180000)
    })      
//    bot.on('end', function () {
//      console.log('ended')
//      setTimeout(createBot, 200000)
//      })

  
// fs.writeFile('./data.txt',
//    `Pin 1: ${z}\nPin 2: ${x}\nPin 3: ${v}\nPin 4: ${f}`
// ,()=>{
//   console.log('Successfully saved');
// }) 

// const myConsole = new console.Console(fs.createWriteStream('./output.txt'));
// myConsole.log(`${a} ${c} ${d} ${e}\n`);
// console.log('Saved')
}

createBot()


client.login(config.token);

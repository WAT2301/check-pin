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
function genRandomInt (integer) {
  return Math.floor(Math.random()*integer)

}
function createBot () {
  let a  = genRandomInt(10)
  let b = genRandomInt(10)
  let c = genRandomInt(10)
  let d = genRandomInt(10)
  function reverseTheNumber(temp) {
    var ans = 0;
    while (temp > 0) {
        var rem = temp % 10;
        ans = ans * 10 + rem;
        temp = parseInt(temp / 10);
    }
    return ans;
  }

  function convert0To5(a)
  {
    if (a == 0)
    return 1;

    else {
      var temp = 0;

      while (a > 0) {
          var digit = a % 10;


          if (digit == 0)
              digit = 5;

          temp = temp * 10 + digit;
          a = parseInt(a / 10);
      }


      return reverseTheNumber(temp);
  }
  }
  function convert0To4(b)
  {
    if (b == 0)
    return 1;

    else {
      var temp = 0;

      while (b > 0) {
          var digit = b % 10;


          if (digit == 0)
              digit = 5;

          temp = temp * 10 + digit;
          b = parseInt(b / 10);
      }


      return reverseTheNumber(temp);
    }
  }
  function convert0To3(c)
  {
    if (c == 0)
    return 1;

    else {
      var temp = 0;

      while (c > 0) {
          var digit = c % 10;

        
          if (digit == 0)
              digit = 5;

          temp = temp * 10 + digit;
          c = parseInt(c / 10);
      }


      return reverseTheNumber(temp);
    }
  }
  function convert0To2(d)
  {
    if (d == 0)
    return 1;

    else {
      var temp = 0;

      while (d > 0) {
          var digit = d % 10;

        
          if (digit == 0)
              digit = 5;

          temp = temp * 10 + digit;
          d = parseInt(d / 10);
      }


      return reverseTheNumber(temp);
    }
  }
  let z = convert0To5(a);
  let x = convert0To4(b);
  let v = convert0To3(c);
  let f = convert0To2(d);

  var bot = mineflayer.createBot({
    host: ip ,
    username: username,
    version: ver
  })

  bot.on('windowOpen', (window)=> {
    window.requiresConfirmation = false;
    bot.clickWindow(z, 0, 0)
    bot.clickWindow(x, 0, 0)
    bot.clickWindow(v, 0, 0)
    bot.clickWindow(f, 0, 0);

    setTimeout(() => {bot.chat('/2y2c')}, 15 * 1000)
    setTimeout(() => { bot.clickWindow(10, 0, 0) }, 20 * 1000)
  }) 
  process.setMaxListeners(0);

  console.log(z)
  console.log(x)
  console.log(v)
  console.log(f)



  bot.on('login', async () => {
    let channel = client.channels.cache.get(`854712390817808404`)
    console.log(`nice ${username}`);
    bot.once('spawn', () => { 
        channel.send(`EZ PIN ${z} ${x} ${v} ${f} (ingame: ${username})`)
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
      setTimeout(createBot, 240000)
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

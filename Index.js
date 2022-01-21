var mineflayer = require('mineflayer')
let ip = "2y2c.org"
let username = "WAT"
let ver = "1.12.2" 

function genRandomInt (integer) {
  return Math.floor(Math.random()*integer)

}
let a  = genRandomInt(10)
let b = genRandomInt(10)
let c = genRandomInt(10)
let d = genRandomInt(10)

var bot = mineflayer.createBot({
  host: ip ,
  username: username,
  version: ver
 })
bot.on('windowOpen', (window)=> {
  window.requiresConfirmation = false;
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

bot.on ('login' , async () =>{
  console.log( 'nice ' + username)
})

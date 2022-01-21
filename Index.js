var mineflayer = require('mineflayer')
let ip = "2y2c.org"
let username = "WAT"
let ver = "1.12.2" 

function reverseTheNumber(temp) {
  var ans = 0;
  while (temp > 0) {
      var rem = temp % 10;
      ans = ans * 10 + rem;
      temp = parseInt(temp / 10);
  }
  return ans;
}
function genRandomInt (integer) {
    return Math.floor(Math.random()*integer)

}
var b = genRandomInt(10)
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
var a = convert0To4(b)
console.log(a)
function reverseTheNumber(temp) {
  var ans = 0;
  while (temp > 0) {
      var rem = temp % 10;
      ans = ans * 10 + rem;
      temp = parseInt(temp / 10);
  }
  return ans;
}
function genRandomInt (integer) {
    return Math.floor(Math.random()*integer)

}
var b = genRandomInt(10)
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
var e = convert0To4(b)
console.log(e)
function reverseTheNumber(temp) {
  var ans = 0;
  while (temp > 0) {
      var rem = temp % 10;
      ans = ans * 10 + rem;
      temp = parseInt(temp / 10);
  }
  return ans;
}
function genRandomInt (integer) {
    return Math.floor(Math.random()*integer)

}
var b = genRandomInt(10)
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
var c = convert0To4(b)
console.log(c)
function reverseTheNumber(temp) {
  var ans = 0;
  while (temp > 0) {
      var rem = temp % 10;
      ans = ans * 10 + rem;
      temp = parseInt(temp / 10);
  }
  return ans;
}
function genRandomInt (integer) {
    return Math.floor(Math.random()*integer)

}
var b = genRandomInt(10)
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
var d = convert0To4(b)
console.log(d)


var bot = mineflayer.createBot({
  host: ip ,
  username: username,
  version: ver
 })
bot.on('windowOpen', (window)=> {
  window.requiresConfirmation = false;
  bot.clickWindow(a, 0, 0)
  bot.clickWindow(c, 0, 0)
  bot.clickWindow(d, 0, 0)
  bot.clickWindow(e, 0, 0);

  setTimeout(() => {bot.chat('/2y2c')}, 15 * 1000)
  setTimeout(() => { bot.clickWindow(10, 0, 0) }, 20 * 1000)
}) 
process.setMaxListeners(0);

bot.on ('login' , async () =>{
  console.log( 'nice ' + username)
})
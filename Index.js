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
var a = genRandomInt(10)
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
var a = convert0To5(a)
console.log(a)

var c = genRandomInt(10)
function convert0To4(c)
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
var c = convert0To4(c)
console.log(c)

var d = genRandomInt(10)
function convert0To3(d)
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
var d = convert0To3(d)
console.log(d)

var e = genRandomInt(10)
function convert0To2(e)
{
   if (e == 0)
  return 1;

  else {
    var temp = 0;

    while (e > 0) {
        var digit = e % 10;


        if (digit == 0)
            digit = 5;

        temp = temp * 10 + digit;
        e = parseInt(e / 10);
    }


    return reverseTheNumber(temp);
  }
}
var e = convert0To2(e)
console.log(e)


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

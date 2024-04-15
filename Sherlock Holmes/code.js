// Fixed code
let bankBalance = 100000

function steal(amountToSteal) {
  cameraOn = true
  if (amount < bankBalance) {
    bankBalance -= amountToSteal
    alert(
      'Du er kriminel og du har lige stjålet ' +
        amountToSteal +
        ' og det må man ikke!!!!'
    )
  } else {
    alert('Amount er større end balance')
    return
  }
  return amountToSteal
}

let stolenAmount = steal(1250)

// Original code

var balance = 10500
var cameraOn = true
function steal(balance, amount) {
  cameraOn = false
  if (amount < balance) {
    balance = balance - amount
  }
  return amount
  cameraOn = true
}
var amount = steal(balance, 1250)
alert(
  'Du er kriminel og du har lige stjålet ' + amount + ' og det må man ikke!!!!'
)

/*  Issues with original code:
    Reuses variable names
    Uses var without reasons. Should be let.
    Why even turn off the cameras? Not very secure for a bank.
    unreachable code, due to returning.
    Alert message is always shown, even if you did not steal anything.
    Balance does not change
*/

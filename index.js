function scuberGreetingForFeet(rideLength){
    if (rideLength <= 400){
        return 'This one is on me!'
    } else if (rideLength > 400 && rideLength <= 2000) {
        return 'That will be twenty bucks.'
    } else if (rideLength > 2000 && rideLength <= 2500) {
        return 'I will gladly take your thirty bucks.'
    } else {
        return 'No can do.'
    }

}

function ternaryCheckCity(city){
    if (city === 'NYC') {
        return 'Ok, sounds good.'
    } else {
        return 'No go.'
    }
}

function switchOnCharmFromTip(tip){
    switch (tip) {
        case 'generous':
            return 'Thank you so much.'
        case 'not as generous':
            return 'Thank you.'
        default:
            return 'Bye.'
    }
}

console.log(scuberGreetingForFeet(199))
console.log(scuberGreetingForFeet(1500))
console.log(scuberGreetingForFeet(2500))
console.log(scuberGreetingForFeet(2501))

console.log(ternaryCheckCity('NYC'))
console.log(ternaryCheckCity('Pittsburgh')) 

console.log(switchOnCharmFromTip('generous')) 
console.log(switchOnCharmFromTip('not as generous'))
console.log(switchOnCharmFromTip('thanks for everything'))
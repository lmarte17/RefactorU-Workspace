// make a constructor for breakfast cereals
// name=> string
// sweetness => number
// crunchFactor => number
// mascot => string


// ES5

// var cereal = [
//   {
//     name: '',
//     sweetness: '',
//     crunchFactor: '',
//     mascot: ''
//   }
// ]
//
// var addCereal = function(name, sweetness, crunchFactor, mascot) {
//       this.name = cereal.name;
//       this.sweetness = cereal.sweetness;
//       this.crunchFactor = cereal.crunchFactor;
//       this.mascot = cereal.mascot;
// }

// ES6

// class Cereal {
//   constructor(name, sweetness, crunchFactor, mascot) {
//     this.name = name;
//     this.sweetness = sweetness;
//     this.crunchFactor = crunchFactor;
//     this.mascot = mascot;
//     this.servings = 4;
//   }
//   pour() {
//     if(this.servings <= 0) {
//       console.log("No more cereal!");
//       return;
//     }
//     this.servings--;
//     if ( this.servings == 1) {
//       console.log("You're almost out!");
//     } else if (this.servings === 0){
//       console.log("Emplty!");
//     }
//     console.log("crunch! crunch!");
//   }
//   buyNewBox() {
//     this.serving = 4;
//   }
// }
//
// console.log(Cereal);
//
// var frostedFlakes = new Cereal('Frosted Flakes', 10, 5, 'Tony');
//
// console.log(Cereal);

// ----------------------------------------------------------------------


// burglar constructor

var Burglar = function(name) {
    this.name = name;
    this.dead = false;
    this.stuff = ['dagger', 'cloak of thievery', 'lockpick', 'sandwich', '37.85 gold'];
}


var bill = new Burglar('Bill');


var alice = new Burglar('Alice');

// adding method to burglar class

Burglar.prototype.burgle = function(victim) {
    if (victim.stuff.length != 0) {
        this.stuff.push(victim.stuff.pop());
        console.log(this.name + " just jacked yo " + this.stuff.join(', '));
        console.log(victim.name + ' now has ' + victim.stuff.join(', '));
        console.log('=========================');
    } else {
        victim.dead = true;
        console.log('Hasta la vista ' + victim.name);
        console.log('=========================');
    }
}

var cityOfThieves = []

for (var i = 1; i <= 10; i++) {
    cityOfThieves.push(new Burglar('Thief #' + i));
}


function randomBurgle() {
    var burglar = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
    var victim = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]

    if (burglar != victim) {
        burglar.burgle(victim);
    }
}

var burgleInterval = setInterval(function() {
    cityOfThieves = cityOfThieves.filter(function(thief) {
        return !thief.dead;
    });

    if (cityOfThieves.length > 1) {
        randomBurgle()
    } else {
        console.log(cityOfThieves[0].name + " says: If you smeeeeellll what the Rock IS Cookin'");
        clearInterval(burgleInterval); // stops method from executing
    }
}, 100);

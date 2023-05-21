// let animals = [
//     {category: "cat",
//     name: "Tom",
//     age: 6,
//     color: "grey",
//     },
//     {category: "dog",
//         name: "Rex",
//         age: 7,
//         color: "black",
//     },
//     {category:"turtle",
//         name: "Alex",
//         age: 5,
//         color: "green",
//     },
//     {category: "cat",
//         name: "Simba",
//         age: 3,
//         color: "red",
//     },
//     {category: "dog",
//         name: "Jack",
//         age: 6,
//         color: "white",
//     },
//     {category:"turtle",
//         name: "Linda",
//         age: 1,
//         color: "dark-green",
//     }
// ];
// console.log(animals[0].name);
// console.log(animals[0].age);
// console.log(animals[1].name + ': ' + animals[1].age);
// console.log(animals[3].category)

// function isAgeEven (age) {
//     if (age%2 == 0) {
//         console.log('Вік парний')
//     } else {
//         console.log('Вік непарний')
//     }
// }
// animals[0].age = animals[0].age*3;
// isAgeEven(animals[0].age)
// animals[1].age = animals[1].age*3;
// isAgeEven(animals[1].age)

// animals[2].name = "Leonardo";
// animals[5].name = "Donatello";
// console.log(animals[2].category + ": " + animals[2].name)
// console.log(animals[5].category + ": " + animals[5].name)


// let friends = [
//     {name: "Lisa", 
//         lastName: "Minci",
//         age: 27,
//         phoneNumber: "5436726395",
//         favoriteNumber: 7,
//     },
//     {name: "Luca", 
//         lastName: "Mattew",
//         age: 17,
//         phoneNumber: "2180401568",
//         favoriteNumber: 14,
//     },
//     {name: "Jake", 
//         lastName: "Spilberg",
//         age: 20,
//         phoneNumber: "1267421944",
//         favoriteNumber: 1,
//     },
//     {name: "Dove", 
//         lastName: "Cameron",
//         age: 25,
//         phoneNumber: "87847921649",
//         favoriteNumber: 89,
//     },
//     {name: "Steve", 
//         lastName: "Smith",
//         age: 16,
//         phoneNumber: "10910783210",
//         favoriteNumber: 9,
//     },
// ]

// console.log(friends[0].name + "_" + friends[0].lastName + "(" + friends[0].age + ")")

// console.log("Привіт! Мене звати " + friends[2].name + " " + friends[2].lastName + ". Мені " + friends[0].age + " років. Мій номер телефону: " + friends[2].phoneNumber + ". Моє улюблене число: " + friends[2].favoriteNumber + ".")

// const firstNum = parseInt(friends[3].phoneNumber.slice(-1)) + parseInt(friends[3].phoneNumber.charAt(0))
// console.log(firstNum)

// if (friends[0].favoriteNumber%2 == 0) {
//     console.log("Число парне");
//     if (friends[0].favoriteNumber%4 == 0) {
//         console.log("Число ділиться на 4")
//     } else {
//         console.log("Число не ділиться на 4")
//     }
// } else{
//     console.log("Число непарне");
//     friends[0].favoriteNumber = friends[0].favoriteNumber * 2
//     console.log(friends[0].favoriteNumber)
// }

// function ageRise (age) {
//     if (age%2 == 0) {
//         age += 1
//         console.log(age)
//     } else {
//         age += 2
//         console.log(age)
//     }
// }

// ageRise(friends[0].age);
// ageRise(friends[1].age);
// ageRise(friends[2].age);
// ageRise(friends[3].age);
// ageRise(friends[4].age);

// friends[0].sex = "female"
// friends[1].sex = "male"
// friends[2].sex = "male"
// friends[3].sex = "female"
// friends[4].sex = "male"

// console.log(friends)

// let num = prompt("Number:") 
// let r = Math.floor(Math.random()*10);
// i = 5
// while (num != r){
//     num = prompt("try again")
//     i--
//     if (i<0) {
//         alert ("you lose")
//         break
//     }
// }
// alert("you won!")

function onTV(){
    console.log("TV on")
}

onTV()
function offTV(){
    console.log("TV off")
}
offTV()
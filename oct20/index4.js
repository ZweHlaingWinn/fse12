const animals = [
    {name: 'EEE', type: 'cat'},
    {name: 'FFF', type: 'fish'},
    {name: 'BBB', type: 'rabbit'},
    {name: 'ZZZ', type: 'cat'},
    {name: 'CCC', type: 'dog'},
    {name: 'DDD', type: 'dog'},
    {name: 'AAA', type: 'rabbit'}
  ]

//   let result = []

//   for (let index = 0; index < animals.length; index++) {
//             if (animals[index].type === "rabbit") {
//                 result.push(animals[index].name);
//             }
//   }

//   let result = animals.filter(function (animal) {
//       return animal.type === 'rabbit'
//   })

let result = animals.filter(animal => animal['type'] === 'rabbit')

  console.log(result);
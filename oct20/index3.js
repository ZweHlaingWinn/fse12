const animals = [
    {name: 'EEE', type: 'cat'},
    {name: 'FFF', type: 'fish'},
    {name: 'BBB', type: 'rabbit'},
    {name: 'ZZZ', type: 'cat'},
    {name: 'CCC', type: 'dog'},
    {name: 'DDD', type: 'dog'},
    {name: 'AAA', type: 'rabbit'}
  ]


  // let result = []

  // for (let index = 0; index < animals.length; index++) {
  //   result.push(animals[index].type);    
  // }

  // let result = animals.map(function (animal) {
  //   return animal.name
  // })


  //arrow mhr auto return pyn tl

  let result = animals.map(animal => animal.type)


  console.log(result);
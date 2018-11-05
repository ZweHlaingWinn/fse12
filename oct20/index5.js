const orders = [
    {amount: 120},
    {amount: 20},
    {amount: 80},
    {amount: 302}
  ]


//   let result= 0

//   for (let index = 0; index < orders.length; index++) {
//       result += orders[index].amount;
//   }

//   let result = orders.reduce(function (sumTotal, order) {
//       console.log(sumTotal, order);
//       return sumTotal += order.amount
//   },0)


  let result = orders.reduce((sumTotal, order) => sumTotal += order.amount, 0)

  console.log(result);
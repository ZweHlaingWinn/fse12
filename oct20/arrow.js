const marksMap = new Map([['kyaw', 40],['aung', 60],['sai', 80],['mya', 90]])

marksMap.forEach(function (val, key) {
    console.log(`${key}: ${val}`);
})


marksMap.forEach((val, key) =>  console.log(`${key}: ${val}`));
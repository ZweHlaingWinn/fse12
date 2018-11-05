function sayHello(name){
    const greet = `Hello ${name}`;
    const say = function(){console.log(greet);}
    return say;
}
const aungGreet = sayHello("asda");

aungGreet();
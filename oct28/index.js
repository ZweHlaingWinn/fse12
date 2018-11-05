
function person(name, age) {
    this.name = name
    this.age = age
    
}

this.getName = function () {
    return this.name
}
let aung= new person('aung' , 21)
let ei= new person('ei', 32)

aung.getName()
ei.getName()
    String.prototype.say = String.prototype.say || function (repeat) {
        let sum = " "
        for (let index = 0; index < repeat; index++) {
            sum += this        
        }
        return sum
    }
const crypto = require ('crypto')

const secret = "!@#123asd"

const hash = crypto.createHmac('sha256', secret).update("AAA").digest('hex')

console.log(hash)
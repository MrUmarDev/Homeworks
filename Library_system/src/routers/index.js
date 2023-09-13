const register = require('./registiration.router')
const books = require('./books.router')
const author = require('./author.router')
module.exports = [
    register, 
    books, 
    author,
    
]
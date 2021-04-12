const EventEmitter = require('events')


//create class

class MyEmitter extends EventEmitter{}

//INIT OBJECT

const myEmitter = new MyEmitter();
//event listener

myEmitter.on('add', () => console.log(2*2))
//ONCE call in the first time
//OFF don't call event
//ON call whole event


//init event
myEmitter.emit('add')
myEmitter.emit('add')
myEmitter.emit('add')
myEmitter.emit('add')
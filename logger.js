const EventEmitter = require('events')
const uuid = require('uuid')

class myEmitter extends EventEmitter{
    log(msg){
        this.emit('action', {id:uuid.v4(),msg});
    }
}

module.exports = myEmitter

const EventEmitter = require('events');   // EventEmitter is a class
// if you want to make somthing custom you need to extend the class  
// or if you just simply need an event emit and listen , then just go for instace 

const customEmitter = new EventEmitter() // so we have instance of our class "object"
// there are many methods on that object , we will focus on " on >> listen fo and event" 
// & emit >> to emit an event



//customEmitter.emit('response');     // None of the methods will fire if emit was here
customEmitter.on('response',(name, id)=>{      // we can acess the emited arguments as parameters on our callback function 
    console.log(`data recieved user ${name} with id: ${id}`);
})



//customEmitter.emit('response');     // only first method will fire if emit was here



// you can make as many methods we want for same event
customEmitter.on('response',()=>{
    console.log(`some other logic here `)
})


// the order matters
//customEmitter.emit('response');     // the above two methods will fire

customEmitter.emit('response','john',34);  // you can pass arguments with the event

// so genrally we need to setup listening to event before we emit it 



// server Example

const http =require('http');

// const server = http.createServer((req,res) => {
//     res.end('Welcome');
//     return;
// })

// using Event Emitter API

const server = http.createServer()
// emits reques event

// subscribe to it / listen for it / respont to it
server.on('request', (req,res) => {     // event name is request from Docs
    res.end('welcome');
    return;
})

server.listen(5000);
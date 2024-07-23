var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() {             //绑定事件some_event到触发器上，定义事件触发所运行的函数
    console.log('监听器2，some_event 事件触发'); 
}); 
event.on('some_event', function() {             //绑定事件some_event到触发器上，定义事件触发所运行的函数
    console.log('监听器1，some_event 事件触发'); 
}); 

console.log("test");                            //event.on参数为事件名和一个回调函数，回调函数非阻塞异步运行，同时向下运行函数   

setTimeout(function() {
    event.emit('some_event');                   //触发事件
}, 1000); 
var events = require("events");
var EventEmitter = new events.EventEmitter();
var connectHandler = function connected(){          //任务处理程序...2
    console.log("进行处理");
    EventEmitter.emit("data_received");             //触发data_received事件
}

EventEmitter.on("connection",connectHandler);       //监听器绑定监听任务处理程序为connection事件

EventEmitter.on("data_received",function(){         //监听器绑定监听数据接收为data_received事件...3
    console.log("数据接收成功");
});

EventEmitter.emit("connection");                    //触发connection事件...1

console.log("运行完毕");
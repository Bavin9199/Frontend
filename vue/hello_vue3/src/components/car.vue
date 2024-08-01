<template>
    <div class="cat">
        <h2> 一辆{{car.brand}}车,价值{{ car.price }}钱</h2>
        <button @click="changePrice">修改汽车价格</button>
        <h2>游戏列表：</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{g.name}}</li>    
        </ul>
        <button @click="changeFirstName">修改第一个游戏名</button>
        <hr>
        <h2>年龄：{{ obj.a.b.c }}</h2>
        <button @click="changeHS">修改</button>
        <h2>当前求和为{{ sum }}</h2>
        <button @click="changeSum">求和</button>
        <br>
        <button @click="changeCar">修改汽车</button>
        <br>
        <h2>姓名：{{ person.name }} 年龄：{{ age }}</h2>       
        <button @click="changeName">修改名字</button>
    </div>
    

    
</template>

<script lang="ts" setup name="car">
     import { reactive , ref , toRefs , toRef} from 'vue';

    //数据
    let car = ref({brand:'奔驰', price:100})    //Proxy(Object)   代理对象    reactive包裹后变成响应式对象
    let games = reactive([                           //:key  表示循环时的唯一标识量   ：表示将g.id当作解析式进行解析 
        {id:'abc01',name:'ys'},
        {id:'abc03',name:'cstjx'}
    ])
    let obj = reactive({
        a:{
            b:{
                c:666
            }
        }
    })
    let sum = ref(0)
    let person = reactive({name:"张三",age:19})
    let {name, age} = toRefs(person)            //toRefs可以将person中的值转换为ref响应式数据赋值给name和age,修改数据的时候需要加上 .value
    let nl = toRef(person,'age')                //toRefs将name转换为person.name    toRef,toRefs 解构并让数据具有响应式的能力，解构后数据nl/age/person.name可以直接使用

    //方法
    function changePrice(){
        car.value.price += 10                  //ref转换响应式普通变量和对象   修改要注意加上.value    car.value.price   game.value[0].name                                            
    }                                          //ref定义响应式对象   refImpl{value:Proxt(Object)}   ref定义响应式数据，底层由reactive实现
    function changeFirstName(){
        games[0].name="原神"
    }
    function changeHS(){
        obj.a.b.c = 999
    }
    function changeSum(){
        sum.value += 1
    } 
    function changeCar(){                   //car为ref响应式对象    car.value可以直接修改对象的值
        car.value = {brand:"奥迪",price:15}
        //若为reactive响应式对象，以上方式无效，可写为   Object.assign(car,{brand:"奥迪"，price:1})  进行整体替换
    }
    function changeName(){                                
        name.value += "~"                   
        age.value += 1
    }

    
</script>

<style scoped>

</style>
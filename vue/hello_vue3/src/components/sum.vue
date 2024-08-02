<template>
    <div class="person">
        <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button>
        
        <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>

        <h2>情况三：监视【reactive】定义的【对象类型】数据</h2>
        <h2>品牌：{{ car.brand }}</h2>
        <h2>价格：{{ car.price }}</h2>
        <button @click="changeBrand">修改品牌</button>
        <button @click="changePrice">修改价格</button>
        <button @click="changeCar">修改整个车</button>

        <h2>情况四：监视【ref】，【reactive】定义的【对象类型】中的某个属性</h2>
        <h2>姓名：{{ man.name }}</h2>
        <h2>年龄：{{ man.age }}</h2>
        <h2>汽车：{{ man.car.c1 }}、{{ man.car.c2 }}</h2>
        <button @click="changeManName">修改姓名</button>
        <button @click="changeManAge">修改年龄</button>
        <button @click="changeCar1">修改第一辆车</button>
        <button @click="changeCar2">修改第二辆车</button>
        <button @click="changeCarAll">修改所有车</button>

        <h2>情况五：监视上述多个数据</h2>
    </div>

</template>

<script lang="ts" setup name="sum">
    import {ref , reactive , watch} from 'vue'

    //数据
    let sum = ref(0)
    let person = ref({name:"张三", age:18})
    let car = reactive({brand:"奔驰",price:20})
    let man = reactive({
        name:"张三",
        age:18,
        car:{
            c1:'奔驰',
            c2:'宝马'
        }
    })
    
  
    //方法
    function changeSum(){
        sum.value += 1
    }
    
    function changeName(){
        person.value.name += "~"
    }
    function changeAge(){
        person.value.age += 1
    }
    function changePerson(){
        person.value = {name:"李四",age:90}
    }

    function changeBrand(){
        car.brand += "~" 
    }
    function changePrice(){
        car.price += 1
    }
    function changeCar(){
        Object.assign(car,{brand:"宝马",price:15})
    }

    function changeManName(){
        man.name += '~'
    }
    function changeManAge(){
        man.age += 1
    }
    function changeCar1(){
        man.car.c1 = "奥迪"
    }
    function changeCar2(){
        man.car.c2 = "大众"
    }
    function changeCarAll(){
        man.car = {c1:"雅典", c2:"爱玛"}    //man.car是内部属性，不是整个对象，可以修改
    }

    //监视(对象为 ref, reactive, 函数返回值, 上述内容数组)
    //情况一：监视【ref】定义的【基本类型】数据：watch(监视对象，回调函数)   
    const stopWatch = watch(sum,(newValue,oldValue)=>{               //watch方法有返回值，调用该值会停止监视
        console.log('sum变化了',newValue,oldValue)
        if( newValue >= 10){
            stopWatch()            //当newValue大于等于10时，调用stopWatch停止监视
        } 
    })     
    
    //情况二：监视【ref】定义的【对象类型】数据:         //watch监视的是整个对象的地址值。若想监视对象内部属性的变化，需要手动开启深度监视deep(任意属性改变)。immediate（初始化时监视）
    //watch(监视对象，回调函数，配置对象(deep,immediate,...))
    watch(person,(newValue,oldValue)=>{              //oldValue和newValue都是对象的地址值，只改变内部属性时，监视返回的oldValue和newValue是相同的，因为是同一对象               
        console.log('person变化了',newValue,oldValue) 
    },{deep:true,immediate:true})

    //情况三：监视【reactive】定义的【对象类型】数据,默认开启深度监视，内部任意属性变化都可监视到（隐式创建深层监听），监视返回的oldValue和newValue是相同的，因为是同一对象   
    watch(car,(newValue,oldValue)=>{
        console.log('person变化了',newValue,oldValue)
    })

    //情况四：监视【ref】，【reactive】定义的对象类型中的某个【属性】。     建议：监视对象属性写函数式，关注内部属性需手动开启深度监视。
    watch(()=>{return man.name},(newValue,oldValue)=>{      //若该属性不是对象类型，需要写成函数返回值的形式；
        console.log('person.name变化了',newValue,oldValue)
    })

    watch(man.car,(newValue,oldValue)=>{                    //若该对象内部属性仍为对象类型，可直接写，但是无法监视整个对象的变化
        console.log('person.name变化了',newValue,oldValue)
    })

    watch(()=>man.car,(newValue,oldValue)=>{                //建议写为函数返回值的形式，但是无法监视对象内部的属性变化（加上deep:true即可监视内部属性）
        console.log('person.name变化了',newValue,oldValue)
    },{deep:true})

    //情况五：监视上述多个【属性】
    watch([()=>man.name,()=>man.car.c1],(newValue,oldValue)=>{
        console.log('数组变化了',newValue,oldValue)
    })

</script>

<style scoped>
</style>
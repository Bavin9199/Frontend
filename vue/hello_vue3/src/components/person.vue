<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName()">修改名字</button>
        <button @click="changeAge()">修改年龄</button>
        <button @click="showPhone()">显示联系方式</button>
    </div>
</template>

<script lang="ts" setup name="person">    //setup语法糖  组件name为person  script合并
    import {ref} from 'vue'

    //数据 
    let name = ref('张三')            //ref包裹，创建基本类型响应式数据
    let age = ref(18)
    let phone = '13888888888'
            
    //方法
    function changeName(){
        name.value = 'zhang-san'     //响应式数据用.value进行函数表示
    }

    function changeAge(){
        age.value += 1
    }

    function showPhone(){
        alert(phone)
    }
</script>

<style>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px; 
    }
    button{
        margin: 0 10px
    }
</style>
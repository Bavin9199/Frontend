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
    //数据
    let name = '张三'
    let age = 18
    let phone = '13888888888'
            
    //方法
    function changeName(){
        name = 'zhang-san'
    }

    function changeAge(){
        age += 1
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
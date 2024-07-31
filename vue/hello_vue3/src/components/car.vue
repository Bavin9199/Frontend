<template>
    <div class="cat">
        <h2> 一辆{{car.brand}}车,价值{{ car.price }}钱</h2>
        <button @click="changePrice()">修改汽车价格</button>
        <h2>游戏列表：</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{g.name}}</li>
        </ul>
        <button @click="changeFirstName()">修改第一个游戏名</button>
    </div>
</template>

<script lang="ts" setup name="car">
     import { reactive } from 'vue';

    //数据
    let car = reactive({brand:'奔驰', price:100})    //Proxy(Object)   代理对象    reactive包裹后变成响应式对象
    let games = reactive([
        {id:'abc01',name:'ys'},
        {id:'abc03',name:'cstjx'}
    ])

    //方法
    function changePrice(){
        car.price += 10;
    }
    function changeFirstName(){
        games[0].name="原神";
    }
</script>

<style scoped>

</style>
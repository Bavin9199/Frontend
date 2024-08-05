<template>
    <div class="app">
        <review a="hah" b="buhah" :list="personList"/>
    </div>
</template>

<script lang="ts" setup name="App">
    import review from './components/review.vue';
    import { reactive } from 'vue';
    import { type persons } from '@/types';

    let personList = reactive<persons>([
        {id:'001',name:'张三',age:60},
        {id:'001',name:'李四',age:18},
        {id:'001',name:'王五',age:5}
    ])

</script>

<style>
    .app{
        background-color: red;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
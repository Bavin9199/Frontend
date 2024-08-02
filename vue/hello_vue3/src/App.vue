<template>
    <div class="app">
        <sum/>
    </div>
</template>

<script>
    import sum from './components/sum.vue'
    
    export default{
        name:'App',
        components:{sum}
    }
</script>

<style>
    .app{
        background-color: red;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
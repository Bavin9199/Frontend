<template>
    <div class="app">
        <h1>hello</h1>
        <car/>
    </div>
</template>

<script>
    import car from './components/car.vue'
    
    export default{
        name:'App',
        components:{car}
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
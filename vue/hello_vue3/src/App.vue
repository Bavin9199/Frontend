<template>
    <div class="app">
        <h1>hello</h1>
        <person/>
    </div>
</template>

<script>
    import person from './components/person.vue'
    
    export default{
        name:'App',
        components:{person}
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
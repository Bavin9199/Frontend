<template>
    <h1 ref="title">水控装置</h1>
    <button @click="showTitle">点我显示标题</button>
    <h2>当水温达到60℃或水位达到80cm时，报警</h2>
    <h2>当前水温：{{ temp }}℃</h2>
    <h2>当前水位：{{ height }}cm</h2>
    <button @click="changeTemp">点我水温+10</button>
    <button @click="changeHeight">点我水位+10</button>
</template>

<script lang="ts" setup name="water">
    import {ref, watch, watchEffect, defineExpose} from 'vue'     //watchEffect主动监视全部数据
        
    //数据
    let temp = ref(10)
    let height = ref(0)
    let title = ref()              //创建title容器存储ref标记的内容。上级App.vue中可以同时设置命名相同的ref容器，互不冲突。

    //方法
    function changeTemp(){
        temp.value += 10
    }
    function changeHeight(){
        height.value += 10
    }
    function showTitle(){
        console.log(title.value)
    }

    //监视
    watch([temp,height],(value,oldvalue)=>{          //value获取新值
        //从value中获取最新的水温和水位
        let [newTemp, newHeight] = value
        console.log(value,oldvalue)
        if(newTemp == 60){
            console.log("水温预警")
        }
        if(newHeight == 80){
            console.log("水位预警")
        }
    })

   watchEffect(()=>{                                    //立即运行，监视ref和reactive全部数据变化，不需要明确指出监视的数据
        if(temp.value == 60){
            console.log("水温预警")
        }
        if(height.value == 80){
            console.log("水位预警")
        }
   })

   defineExpose({temp, height, title})

   //下方style中的scoped表示CSS的局部样式，不同文件同一类名样式不会冲突
</script>

<style scoped>

</style>
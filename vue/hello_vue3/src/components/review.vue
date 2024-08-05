<template>
    <div>
        <ul>
            <li v-for="p in list" :key="p.id">{{ p.name }} -- {{ p.age }}</li>
        </ul>
    </div>

</template>

<script lang="ts" setup name="review">
    import {type personInter, type persons, type Persons} from '@/types'                //定义person接口personInter,引入时需要在import中写成{type personInter}
    import { defineProps, withDefaults } from 'vue'

    //接收a和list
    //defineProps(['a','list'])            从父向子传递a数据defineProps

    //接收a，同时将props保存起来 
    //let x = defineProps(['a','b'])       defineProps有返回值，包含所有接受的东西 
    //console.log(x.a)                    //输出hah*/
    
    //只接受list
    //defineProps(['list'])

    //接收list + 限制类型                   必须接收符合persons类型的list
    //defineProps<{list:persons}>()
    
    //接收list + 限制类型 + 限制必要性 + 指定默认值     list后加上?，表示是否传递都不报错;withDefault指定默认值
    withDefaults(defineProps<{list?:persons}>(),{
        list:()=>[{id:'001',name:'张三',age:60}]
    })
    
    let person:personInter = {id:'001',name:'张三',age:60}  //person继承接口personInter,需要符合满足接口中定义的具体属性(person:personInter)

    let personList:Array<personInter> = [                   //定义一个personList对象,是一个Array列表实现【接口】,<>中填写范式表示数组中的对象类型（为person接口，满足各个具体属性）
        {id:'001',name:'张三',age:60},
        {id:'001',name:'李四',age:18},
        {id:'001',name:'王五',age:5}
    ]

    let personlist:persons = [                              //先定义type类型persons,是一个Array列表。export暴露后直接应用实现【自定义类型】
        {id:'001',name:'张三',age:60},
        {id:'001',name:'李四',age:18},
        {id:'001',name:'王五',age:5}
    ]

    let Personlist:Persons = [                              //先定义type类型Persons,是一个personInter接口数组。export暴露后直接应用实现【自定义类型】
        {id:'001',name:'张三',age:60},
        {id:'001',name:'李四',age:18},
        {id:'001',name:'王五',age:5}
    ]
</script>

<style scoped>

</style>
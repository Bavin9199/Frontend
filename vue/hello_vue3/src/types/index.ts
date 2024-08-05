//定义一个接口，用于限制person对象的具体属性
export interface personInter {
    id:string
    name:string
    age:number
    x?:number
}

//定义一个自定义类型
export type persons = Array<personInter>

export type Persons = personInter[]
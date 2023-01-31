import { category } from "./category.entity" 

export interface product{
    id:number
    title:string
    price: string
    descripcion:string
    images:string[]
    categoryId:category
}
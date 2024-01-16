/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-07 09:30:56
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-12 16:47:57
 * @FilePath: \Vue-wallpapers\src\apis\getImgAPI.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AxiosResponse } from 'axios';
import httpInstance from '../utils/http'
import { focusNode } from 'element-plus/es/utils/index.mjs';

export async function getArrImg():Promise<any>{
    const data=[
        {id: 6, name: '美女',data:[]},
        {id: 30, name: '爱情',data:[]},
       {id: 9, name: '风景',data:[]},
       {id: 15, name: '小清新',data:[]},
       {id: 26, name: '动漫',data:[]},
       {id: 11, name: '明星',data:[]},
       {id: 5, name: '游戏',data:[]},
       {id: 12, name: '汽车',data:[]},
       {id: 10, name: '炫酷',data:[]},
       {id: 7, name: '影视',data:[]},
       {id: 22, name: '军事',data:[]},
    ]
    const arrs:any=[]
    
    data.forEach((item:any)=>{
        let newarr = doSomething(item.id)
        arrs.push({
            name:item.name,
            id:item.id,
            arrdata:newarr,
        })
    })
   async function doSomething(id:any){
    let num=0
    let arr:any=[]
    let i=0
        do {
           await  httpInstance({
                   url:`/api/?c=WallPaper&a=getAppsByCategory&cid=${id}&start=${i}&count=99&from=360chrome`,
               }).then((v:any)=>{
                if(v.errno==0){
                    i+=90
                    arr.push(...v.data)
                } else{
                    i=0
                    num=10000
                }
               }).catch((err)=>{
                    num=10000
                    i=0
               })
          } while (num<9999);
          return arr
    }
   return arrs
}

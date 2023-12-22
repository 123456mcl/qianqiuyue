/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-07 09:30:56
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-09-28 20:43:35
 * @FilePath: \Vue-wallpapers\src\apis\getImgAPI.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AxiosResponse } from 'axios';
import httpInstance from '../utils/http'
import { focusNode } from 'element-plus/es/utils/index.mjs';

export async function getArrImg():Promise<any>{
    const data=[
        {id: '36', name: '4K专区'},
        {id: '6', name: '美女模特'},
        {id: '30', name: '爱情美图'},
       {id: '9', name: '风景大片'},
       {id: '15', name: '小清新'},
       {id: '26', name: '动漫卡通'},
       {id: '11', name: '明星风尚'},
       {id: '14', name: '萌宠动物'},
       {id: '5', name: '游戏壁纸'},
       {id: '12', name: '汽车天下'},
       {id: '10', name: '炫酷时尚'},
       {id: '29', name: '月历壁纸'},
       {id: '7', name: '影视剧照'},
       {id: '13', name: '节日美图'},
       {id: '22', name: '军事天地'},
    ]
    const arrs:any=[]
    data.forEach((element: any) => {
           arrs.push({
            name:element.name,
            id:element.id,
            arrdata:[],
        })
        datas(element.id)
        });
    function datas(a: any){
        let arr:any=[]
        for(let i=0;i<=700;i+=90){
            httpInstance({
                url:`api/?c=WallPaper&a=getAppsByCategory&cid=${a}&start=${i}&count=99&from=360chrome`
            }).then((v)=>{
                const t=arrs.find((e:any)=>{
                 return  e.id==a
                }) 
                v.data.forEach((e: any)=>{
                t.arrdata.push(e)
               })
            })
            }
    }
    return [...arrs]
  
}
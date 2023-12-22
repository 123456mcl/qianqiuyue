import { useIntersectionObserver } from '@vueuse/core'

 const lazyPlugin = {
    install(app:any){
        app.directive('img-lazy',{
            mounted(el:any,binding:any){
            useIntersectionObserver(
              el,
              ([{ isIntersecting }]) => {
               if(isIntersecting){
                el.src=binding.value
               }
              },
            )
            }
        })
    }
}
export default lazyPlugin
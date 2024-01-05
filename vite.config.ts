/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-05 10:23:51
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-02 11:44:41
 * @FilePath: \Vue-wallpapers\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    // ...
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ], 
  server: { 
    https: false,
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, 
    proxy: {
      '/api': { 
        target: 'http://cdn.apc.360.cn/', 
        changeOrigin: true,
        secure: false, 
        ws: true,
        rewrite: (path) => path.replace(/^\/api/,''), 
      },
      '/apis': { 
        target: 'http://localhost:8000', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apis/,''), 
      },
    }
  }
})

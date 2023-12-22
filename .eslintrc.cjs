/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-08-10 17:56:09
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-09-05 11:16:04
 * @FilePath: \vue-wallpaper\.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-env node */
module.exports = {
    root: true,
    'extends': [
      'plugin:vue/vue3-essential',
      'eslint:recommended'
    ],
    parserOptions: {
      ecmaVersion: 'latest'
    },
    rules: {
      'vue/multi-word-component-names': 0, // 不再强制要求组件命名
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      "vue/no-unused-components": "off",
      "no-unused-vars": "off",
    }
  }
  
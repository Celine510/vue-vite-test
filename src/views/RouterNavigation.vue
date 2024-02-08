<template>
  <button type="button" @click="getRoute">getRoute</button>

  <button type="button" @click="push">Push</button>
  <button type="button" @click="replace">Replace</button>
  <button type="button" @click="go">Go</button>
  <hr>
  <button type="button" @click="addRoute">新增路由</button>
</template>

<script>
export default {
  methods: {
    // 切換頁面常用方法: push & replace
    // 有包含歷史紀錄
    push(){ 
      // this.$router.push('/newpage/dynamicRouter/16bdf5a3165c4d42'); // 做法1.帶入網址
      this.$router.push({
        name: 'about' // 做法2.帶入路由 name
      })
    },
    // 沒有產生歷史紀錄
    replace(){
      this.$router.replace({ name: 'about' })
    },
    // 操作歷史紀錄: 上一頁/下一頁
    go(){
      this.$router.go(-1); // 帶入正/負整數
    },
    getRoute(){
      // 取得路由的屬性: 當前路由提供的相關資訊
      console.log(this.$route); // fullPath: 目前網址；params: 參數

      // 呼叫路由的方法
      console.log(this.$router); // 透過函式呼叫
    },
    // 臨時新增路由
    addRoute(){
      this.$router.addRoute({ // 輸入的值跟路由表相同
        path: '/newAbout',
        name: 'newAbout',
        component: () => import('./AboutView.vue')
      })
    },
  }
}
</script>
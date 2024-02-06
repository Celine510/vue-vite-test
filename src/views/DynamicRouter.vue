<template>
  <div>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    // 取出動態值
    // 動態路由存在params參數內
    // console.log(this.$route.params.id);
    // const seed = "16bdf5a3165c4d42";
    const seed = this.$route.params.id; // 網址上的 id
    axios.get(`https://randomuser.me/api/?seed=${seed}`)
    .then(res => {
      console.log(res);
    })
  }
}
</script>
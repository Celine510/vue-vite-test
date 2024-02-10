<template>
  <div>
    
  </div>
</template>

<script>
export default {
  // 取得路由表定義的 props
  props: ['id'], 
  created() {
    // const seed = "16bdf5a3165c4d42";
    const seed = this.id;
    this.$http.get(`https://randomuser.me/api/?seed=${seed}`)
    .then(res => {
      console.log(res);
    })
  }
}
</script>
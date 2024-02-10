<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ data }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {}
    };
  },
  mounted() {
    // console.log(import.meta.env.VITE_PATH); // 在 Vite 內載入環境變數，後方加入自定義的變數名稱
    console.log(import.meta.env.VITE_TEXT);
    const url = import.meta.env.VITE_PATH;
    // console.dir(this.$http);
    this.$http.get(url).then((res) => {
      console.log(res);
      this.data = res.data.results[0];
    });
  }
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

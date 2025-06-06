<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <router-view />
    </a-config-provider>
  </div>
</template>

<script>
import zhCN from "ant-design-vue/es/locale/zh_CN";

export default {
  name: "App",
  data() {
    return {
      locale: zhCN,
    };
  },
};
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100vh;
  font-size: 12px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #041530;
  background-color: #f6fafb;
}
img {
  width: 100%;
}
.red-text {
  color: #e03c2b;
}
.grey-text {
  color: #5c5c5c;
}
</style>

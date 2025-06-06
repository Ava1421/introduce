<template>
  <div class="container">
    <a-layout>
      <a-layout-header class="header">
        <div class="logo" />
        <a-menu
          v-model:selectedKeys="selectedKeys1"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
          @click="changeNav"
        >
          <a-menu-item v-for="item in navList" :key="item.key">{{
            item.label
          }}</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content
        :style="{
          background: '#fff',
          margin: 0,
          minHeight: '280px',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="padding: 0">
        <footer-view></footer-view>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
import FooterView from "@/views/Home/FooterViewIndex.vue";
import { useRouter } from "@/router";

import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "homeIndex",
  components: { FooterView },
  setup() {
    const router = useRouter();

    let curNav = ref("Home");
    const changeNav = ({ key }) => {
      console.log(key);
      curNav.value = key;
      router.push("/" + key);
    };

    return {
      navList: ref([
        { key: "Home", label: "首页" },
        { key: "Introduce", label: "介绍" },
        { key: "JoinUs", label: "欢迎加入" },
        { key: "Concat", label: "联系我们" },
      ]),

      selectedKeys1: ref(["Home"]),
      collapsed: ref(false),
      openKeys: ref(["0", "0-0"]),
      curNav,
      changeNav,
    };
  },
});
</script>
<style lang="less" scoped>
.container {
  font-size: 14px;
  height: 100vh;
}
:deep(.ant-layout) {
  min-height: 100%;
}
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>

<template>
  <div class="container">
    <a-layout>
      <a-layout breakpoint="lg" collapsed-width="0">
        <a-layout-sider
          width="200"
          style="background: #fff; margin-right: 20px"
          v-if="curNav == 'Home'"
        >
          <a-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            :style="{ height: '100%', borderRight: 0 }"
            @click="changeComponent"
          >
            <a-menu-item key="Overview">概览</a-menu-item>
            <a-sub-menu key="0">
              <template #title>
                <span> 新闻 </span>
              </template>
              <a-menu-item key="0-0">Option0 Sub0</a-menu-item>

              <a-menu-item key="0-1`">Option0 Sub1</a-menu-item>
            </a-sub-menu>
            <a-menu-item key="Control">控制台</a-menu-item>
            <a-menu-item key="2">Options2</a-menu-item>
            <a-sub-menu key="3">
              <template #title>
                <span> Options3 </span>
              </template>
              <a-menu-item key="3-0">Option3 Sub0</a-menu-item>
              <a-menu-item key="3-1`">Option3 Sub1</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px',
          }"
        >
          <component :is="curComponent" :isAuto="false"></component>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import Overview from "@/views/Overview/Index.vue";
import Control from "@/views/Control/Index.vue";
import Introduce from "@/views/Introduce/Index.vue";
import JoinUs from "@/views/JoinUs/Index.vue";
import Concat from "@/views/Concat/Index.vue";
import FooterView from "@/views/Home/FooterViewIndex.vue";
import { useRouter } from "@/router";

import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "homeIndex",
  components: { Overview, Control, Introduce, JoinUs, Concat, FooterView },
  setup() {
    const router = useRouter();

    let curNav = ref("Home");
    const changeNav = ({ key }) => {
      console.log(key);
      curNav.value = key;
      curComponent.value = key == "Home" ? "Overview" : key;
      router.push("/" + key);
    };

    let curComponent = ref("Overview");
    const changeComponent = ({ key }) => {
      console.log(key);
      curComponent.value = key;
    };

    return {
      navList: ref([
        { key: "Home", label: "首页" },
        { key: "Introduce", label: "介绍" },
        { key: "JoinUs", label: "欢迎加入" },
        { key: "Concat", label: "联系我们" },
      ]),

      selectedKeys1: ref(["Home"]),
      selectedKeys2: ref(["Overview"]),
      collapsed: ref(false),
      openKeys: ref(["0", "0-0"]),
      curNav,
      changeNav,
      curComponent,
      changeComponent,
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

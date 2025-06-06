import { createRouter, createWebHashHistory } from "vue-router";
import TabIndex from "@/views/H5TabHome/TabIndex.vue";
import { getCurrentInstance } from "vue";

// 访问router
export const useRouter = () => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error("must be called in setup");
  return vm.proxy.$router;
};
const tabbar = [
  {
    path: "home", // 注意：去掉开头的斜杠，因为是嵌套路由
    name: "home",
    component: () => import("@/views/H5TabHome/Index.vue"),
    meta: { title: "风险管理" },
  },
  {
    path: "page2",
    name: "page2", // 修正：name 应该唯一
    component: () => import("@/views/H5TabHome/page2Index.vue"),
    meta: { title: "page2" },
  },
  {
    path: "page3",
    name: "page3", // 修正：name 应该唯一
    component: () => import("@/views/H5TabHome/page3Index.vue"),
    meta: { title: "page3" },
  },
  {
    path: "page4",
    name: "page4", // 修正：name 应该唯一
    component: () => import("@/views/H5TabHome/page4Index.vue"),
    meta: { title: "page4" },
  },
  {
    path: "detail",
    name: "detail",
    component: () => import("@/views/H5TabHome/components/Detail.vue"),
    meta: { title: "预警信息查询" },
  },
  // 其他路由项保持类似结构...
];
const homebar = [
  {
    path: "Introduce", // 注意：去掉开头的斜杠，因为是嵌套路由
    name: "Introduce",
    component: () => import("@/views/Introduce/Index.vue"),
    meta: { title: "风险管理" },
  },
  {
    path: "Home", // 注意：去掉开头的斜杠，因为是嵌套路由
    name: "Home",
    component: () => import("@/views/Home/Index.vue"),
    meta: { title: "风险管理" },
  },
  {
    path: "JoinUs", // 注意：去掉开头的斜杠，因为是嵌套路由
    name: "JoinUs",
    component: () => import("@/views/JoinUs/Index.vue"),
    meta: { title: "风险管理" },
  },
  {
    path: "Concat", // 注意：去掉开头的斜杠，因为是嵌套路由
    name: "Concat",
    component: () => import("@/views/Concat/Index.vue"),
    meta: { title: "风险管理" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: "/",
    //   redirect: "/home",
    // },

    {
      path: "/login",
      component: () => import("@/views/Login/Index.vue"),
      meta: { title: "登录" },
    },
    {
      path: "/",
      component: () => import("@/views/NavView/Index.vue"),
      meta: { title: "首页" },
      children: homebar,
    },
    {
      path: "/tab",
      component: TabIndex,
      children: tabbar,
      meta: { title: "Tab 页面" },
    },
  ],
});

// 移除 Vue 2 的路由原型修改
// 在 Vue 3 中不再需要这些 polyfill

// 导航守卫保持不变
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;

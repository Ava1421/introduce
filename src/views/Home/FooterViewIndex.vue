<template>
  <div class="footer-index flex-column">
    <div class="flex-between">
      <div class="left flex-column">
        <div>xx网站</div>
        <div>xx网站xx网站xx网站xx网站xx网站</div>
      </div>
      <div class="right flex-between">
        <div v-for="(item, index) in list" :key="index" class="item flex-column">
          <span class="title">{{ item.name }}</span>
          <div v-for="(item2, index2) in item.subList" :key="index2" class="sub-title">
            <span>{{ item2.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-between bottom-box">
      <span>©2023 产品版权所有。保留所有权利。</span>
      <div class="flex-box">
        <div v-for="(item, index) in bottomList" :key="index" class="bottom-title">
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "footerIndex",
  setup() {
    return {
      list: [
        {
          name: "关于我们",
          subList: [{ name: "公司简介" }, { name: "团队介绍" }, { name: "联系我们" }],
        },
        {
          name: "产品",
          subList: [
            { name: "智能手机" },
            { name: "电脑" },
            { name: "数码相机" },
            { name: "智能家居" },
          ],
        },
        {
          name: "新闻",
          subList: [
            { name: "行业动态" },
            { name: "产品发布" },
            { name: "科技趋势" },
            { name: "科技创新" },
          ],
        },
      ],
      bottomList: [{ name: "隐私政策" }, { name: "网站地图" }, { name: "网站声明" }],
    };
  },
});
</script>
<style scoped lang="less">
.footer-index {
  background-color: #fff;
  padding: 80px;
  border-top: 1px solid #e5e5e5;
  margin: 20px 0;
  .item {
    margin-left: 80px;
    .title {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 14px;
    }
    .sub-title {
      margin-bottom: 6px;
    }
  }
  .bottom-box {
    margin-top: 40px;
    .bottom-title {
      margin-left: 20px;
    }
  }
}
</style>

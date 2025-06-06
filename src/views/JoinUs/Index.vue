<template>
  <div class="joinUs-index">
    <a-carousel autoplay>
      <div v-for="(item, index) in picList" :key="index">
        <img :src="require(`@/assets/banner.png`)" class="banner" />
        {{ item.name }}
      </div>
    </a-carousel>
    <span class="title flex-center"> 员工价值主张</span>
    <a-card :bordered="false" :bodyStyle="{ display: 'flex', 'flex-wrap': 'wrap' }">
      <a-card-grid
        class="flex-column flex-center card-grid"
        v-for="(item, index) in cardList"
        :key="index"
        :hoverable="item.hoverable"
      >
        <span class="title">{{ item.title }}</span>
        <span class="sub-title">{{ item.subTitle }}</span>
      </a-card-grid>
    </a-card>

    <a-card
      :bordered="false"
      style="margin-top: 60px"
      :bodyStyle="{
        display: 'flex',
        'justify-content': 'space-between',
        'flex-wrap': 'wrap',
      }"
    >
      <a-card-grid
        class="flex-column flex-center city-grid"
        v-for="(item, index) in cityList"
        :key="index"
        :hoverable="item.hoverable"
      >
        <img :src="require(`@/assets/banner.png`)" class="banner" />
        <span class="title">{{ item.title }}</span>
        <a-button type="primary" size="large">了解更多</a-button>
      </a-card-grid></a-card
    >
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "joinUsIndex",
  setup() {
    return {
      picList: [{ title: "" }, { title: "" }, { title: "" }, { title: "" }],
      cardList: [
        {
          title: "全球足迹",
          hoverable: false,
          subTitle: "在全球，Gentherm捷温科技为所有人打造了一个包容的工作环境",
        },
        {
          title: "休假福利",
          hoverable: true,
          subTitle: "充足的带薪休假，节假日福利等",
        },
        {
          title: "健康保障",
          hoverable: false,
          subTitle: "体检，雇主保险等多重福利保障您的职场生活",
        },
        {
          title: "员工折扣",
          hoverable: true,
          subTitle: "在全球的许多汽车品牌零售商处享受折扣",
        },
        {
          title: "领导能力",
          hoverable: true,
          subTitle: "打破壁垒，通力合作。我们都朝着相同的目标努力",
        },
        {
          title: "培训教育",
          hoverable: false,
          subTitle: "我们对您的成长投资不仅限于工作",
        },
        {
          title: "全球足迹",
          hoverable: true,
          subTitle: "在全球的许多汽车品牌零售商处享受折扣",
        },
        {
          title: "休假福利",
          hoverable: false,
          subTitle: "充足的带薪休假，节假日福利等",
        },
      ],
      cityList: [
        {
          title: "上海",
          hoverable: false,
        },
        {
          title: "深圳",
          hoverable: true,
        },
        {
          title: "廊坊",
          hoverable: false,
        },
      ],
    };
  },
});
</script>
>
<style scoped lang="less">
.joinUs-index {
  .banner {
    height: 320px;
  }
  .title {
    font-size: 26px;
    font-weight: bold;
    color: #0e60ab;
    padding: 12px 0;
  }
  .card-grid {
    width: 25%;
  }
  .city-grid {
    margin-top: 20px;
    width: 30%;
  }
}

@media (max-width: 1440px) {
  .joinUs-index {
    .card-grid {
      width: 50%;
    }
  }
}
@media (max-width: 640px) {
  .joinUs-index {
    .card-grid {
      width: 100%;
    }
    .city-grid {
      width: 100%;
    }
  }
}
</style>

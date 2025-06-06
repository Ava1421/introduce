<template>
  <div class="introduce-index">
    <a-row>
      <a-col
        v-for="(item, index) in rowList"
        :key="index"
        :xs="item.xs"
        :sm="item.sm"
        :md="item.md"
        :lg="item.lg"
        :xl="item.xl"
        :style="{
          'background-color': item.bgColor,
          height: item.height,
          border: '0.5px solid',
          'border-color': item.bgColor.slice(0, 7) + '30',
        }"
        class="item"
      >
        <div class="flex-center text" style="height: 100%; margin: 0 30px">
          {{ item.text }}
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "introduceIndex",
  setup() {
    return {
      rowList: ref([
        //line1
        {
          xs: 4,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 8,
          text:
            "Browse the latest documentation including API reference, articles, and sample code. Read documentation Videos Learn about the latest technologies presented at Apple developer e...",
          bgColor: "#3377ff20",
          height: "100px",
        },
        {
          xs: 16,
          sm: 12,
          md: 12,
          lg: 12,
          xl: 8,
          text:
            "“虚拟飞行”现已上线,飞前练手,新手必玩,即刻下载大疆商城 app 在线体验。 下载 航拍无人机 手持摄影设备 户外电源 商用产品及方案 探索精彩 服务与支持 购买渠道 登录大疆",
          bgColor: "#3377ff10",
          height: "200px",
        },
        {
          xs: 4,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 8,
          text:
            "新机试用 | 丰富活动 | 福利周边 | 结识加油 了解更多 服务支持 查找一加授权 零售店 欢迎到授权零售店 体验购买一加手机和IoT产品等。 了解更多 服务中心 查询及预约 官方授权服务体验中心",
          bgColor: "#3377ff30",
          height: "180px",
        },
        //line2
        {
          xs: 8,
          sm: 8,
          md: 6,
          lg: 10,
          xl: 12,
          text:
            " 判断你拥有的是哪款 iPad 机型。 查找型号 根据型号确定你拥有的 iPad 机型。了解如何查找 iPad 的型号。然后在以下列表中找到相应的型号。 iPad Pro iPad Air iPad mini iPa...",
          bgColor: "#3377ff40",
          height: "240px",
        },
        {
          xs: 8,
          sm: 8,
          md: 12,
          lg: 10,
          xl: 8,
          text: "官网平台,就上凡科建站,免费注册即可拥有“电脑+手机+平板”网站,功能强大,",
          bgColor: "#3377ff25",
          height: "160px",
        },
        {
          xs: 8,
          sm: 8,
          md: 6,
          lg: 4,
          xl: 4,
          text: "官网,无需编程,不懂技术也能轻松上手,一键快速生成网站,打造你的专属网站.",
          bgColor: "#3377ff05",
          height: "190px",
        },
        //line3
        {
          xs: 4,
          sm: 6,
          md: 6,
          lg: 8,
          xl: 8,
          text:
            "云服务器ECS支持IPv6功能是默认打开的，只需要在网卡当中配置IPV6地址即可使用。",
          bgColor: "#3377ff20",
          height: "190px",
        },
        {
          xs: 16,
          sm: 12,
          md: 12,
          lg: 10,
          xl: 8,
          text:
            "登陆新网账号——点击备案——备案控制台——备案服务号管理——选择您要备案的产品——在对应的产品中，右侧的操作下方进行申请和购买（不同产品赠送不同的免费服务号额度，免费额度用完后可以进行购买）如果您通过代理商购买的主机产品，请联系您购买主机的代理商咨询获取备案服务号。",
          bgColor: "#3377ff10",
          height: "160px",
        },
        {
          xs: 4,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 8,
          text:
            "国内顶级的互联网基础应用服务提供商，总部坐落于北京。新网始终以“为中国信息化的发展提供优质基础设施”为使命，不断适应时代发展，积极开拓创新。",
          bgColor: "#3377ff30",
          height: "200px",
        }, //line4
        {
          xs: 8,
          sm: 8,
          md: 6,
          lg: 10,
          xl: 10,
          text:
            "云服务器ECS支持IPv6功能是默认打开的，只需要在网卡当中配置IPV6地址即可使用。",
          bgColor: "#3377ff15",
          height: "240px",
        },
        {
          xs: 8,
          sm: 8,
          md: 12,
          lg: 10,
          xl: 8,
          text:
            " 在将要开启的云主机管理面板当中，在网络信息页面，点击云主机IPV6地址开通按钮。如下图所示：",
          bgColor: "#3377ff25",
          height: "180px",
        },
        {
          xs: 8,
          sm: 8,
          md: 6,
          lg: 4,
          xl: 6,
          text:
            "未来，新网将继续强化其在基础信息服务领域的优势，同时积极拓展企业信息化与云计算市场。与数万家生态合作伙伴携手，共同为中国企业的信息化发展提供更优质、高效的基础设施服务。",
          bgColor: "#3377ff05",
          height: "230px",
        },
      ]),
    };
  },
});
</script>
<style scoped lang="less">
.introduce-index {
  .item {
    animation: upDown_anim linear 10s infinite alternate;
  }
  .text {
    font-weight: 700;
    text-shadow: 0 -1px 0 #ffffff90, 0 1px 0 #2e2e2e20, 0 2px 0 #2c2c2c20;
  }
  @keyframes upDown_anim {
    0%,
    100% {
      font-size: 14px;
      transform: translate(0);
    }

    50% {
      font-size: 12px;
      transform: translateY(5px);
    }
  }
}
</style>

<template>
  <div class="control-index">
    <a-row :gutter="32">
      <a-col :span="8">
        <div class="flex-column flex-center">
          <count-to :end-val="100" :duration="3000" class="nums" />
          <span class="text">
            Gentherm Reports 2025 First Quarter Results
          </span>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="flex-column flex-center">
          <count-to :end-val="1000" :duration="3000" class="nums" />
          <span class="text">
            Gentherm Announces Date for 2025 First Quarter News Release and
            Conference Call
          </span>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="flex-column flex-center">
          <count-to :end-val="996" :duration="3000" class="nums" />
          <span class="text">
            Gentherm Recognized as 2024 Supplier of the Year by General Motors
          </span>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { CountTo } from "vue3-count-to";
import { defineComponent } from "vue";
export default defineComponent({
  name: "controlIndex",
  components: { CountTo },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
.control-index {
  .nums {
    color: #3377ff;
    font-size: 2rem;
    font-weight: 600;
  }
  .text {
    font-size: 1rem;
  }
}
</style>

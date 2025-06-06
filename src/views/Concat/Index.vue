<template>
  <div class="concat-index">
    <div class="banner">
      <div class="inner">联系我们</div>
    </div>
    <div class="mt-20">
      <a-form
        :model="formState"
        name="validate_other"
        v-bind="formItemLayout"
        @finishFailed="onFinishFailed"
        @finish="onFinish"
      >
        <a-form-item
          name="select"
          label="单选"
          has-feedback
          :rules="[{ required: true, message: '请选择你的国家' }]"
        >
          <a-select
            v-model:value="formState.select"
            placeholder="Please select a country"
          >
            <a-select-option value="china">中国</a-select-option>
            <a-select-option value="usa">美国</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          name="select-multiple"
          label="多选"
          :rules="[
            {
              required: true,
              message: '请选择你最爱的颜色',
              type: 'array',
            },
          ]"
        >
          <a-select
            v-model:value="formState['select-multiple']"
            mode="multiple"
            placeholder="请选择你最爱的颜色"
          >
            <a-select-option value="red">红色</a-select-option>
            <a-select-option value="green">绿色</a-select-option>
            <a-select-option value="blue">蓝色</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="数字选择">
          <a-form-item name="input-number" no-style>
            <a-input-number
              v-model:value="formState['input-number']"
              :min="1"
              :max="10"
            />
          </a-form-item>
        </a-form-item>

        <a-form-item name="switch" label="开关">
          <a-switch v-model:checked="formState.switch" />
        </a-form-item>

        <a-form-item name="slider" label="滑动">
          <a-slider
            v-model:value="formState.slider"
            :marks="{
              0: 'A',
              20: 'B',
              40: 'C',
              60: 'D',
              80: 'E',
              100: 'F',
            }"
          />
        </a-form-item>

        <a-form-item name="radio-group" label="单选">
          <a-radio-group v-model:value="formState['radio-group']">
            <a-radio value="a">item 1</a-radio>
            <a-radio value="b">item 2</a-radio>
            <a-radio value="c">item 3</a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item
          name="radio-button"
          label="单选"
          :rules="[{ required: true, message: 'Please pick an item!' }]"
        >
          <a-radio-group v-model:value="formState['radio-button']">
            <a-radio-button value="a">item 1</a-radio-button>
            <a-radio-button value="b">item 2</a-radio-button>
            <a-radio-button value="c">item 3</a-radio-button>
          </a-radio-group>
        </a-form-item>

        <a-form-item name="checkbox-group" label="多选">
          <a-checkbox-group v-model:value="formState['checkbox-group']">
            <a-row>
              <a-col :span="8">
                <a-checkbox value="A" style="line-height: 32px">A</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="B" style="line-height: 32px" disabled>B</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="C" style="line-height: 32px">C</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="D" style="line-height: 32px">D</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="E" style="line-height: 32px">E</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="F" style="line-height: 32px">F</a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </a-form-item>

        <a-form-item name="rate" label="等级">
          <a-rate v-model:value="formState.rate" allow-half />
        </a-form-item>

        <a-form-item name="upload" label="上传" extra="备注：xxx">
          <a-upload
            v-model:fileList="formState.upload"
            name="logo"
            action="/upload.do"
            list-type="picture"
          >
            <a-button>
              <template #icon><UploadOutlined /></template>
              点击上传
            </a-button>
          </a-upload>
        </a-form-item>

        <a-form-item label="拖拽">
          <a-form-item name="dragger" no-style>
            <a-upload-dragger
              v-model:fileList="formState.dragger"
              name="files"
              action="/upload.do"
            >
              <p class="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p class="ant-upload-text">点击或拖拽文件到此区域上传</p>
              <p class="ant-upload-hint">支持单选或多选</p>
            </a-upload-dragger>
          </a-form-item>
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
          <a-button type="primary" html-type="submit">提交</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  name: "concatIndex",
  components: {
    UploadOutlined,
    InboxOutlined,
  },
  setup() {
    const formItemLayout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 14,
      },
    };
    const formState = reactive({
      "input-number": 3,
      "checkbox-group": ["A", "B"],
      rate: 3.5,
    });
    const onFinish = (values) => {
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
      formItemLayout,
    };
  },
});
</script>
<style lang="less" scoped>
.concat-index .banner {
  position: relative;
  background: url(http://www.gentherm.cn/images/contact-us/ContactUs-Header.jpg);
  height: 20rem;
  line-height: 20rem;
  background-size: cover;
  text-align: center;
  color: #fff;
  font-size: 3.5rem;
  letter-spacing: 0.1rem;
  text-shadow: 0 0 0.4rem #000000;
  .inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
}
</style>

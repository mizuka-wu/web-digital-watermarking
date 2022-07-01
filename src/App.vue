<template>
  <ElBadge :value="isOpencvLoaded ? '加载完成' : '加载中'" :type="isOpencvLoaded ? 'danger' : 'success'">
    <div>Opencv状态</div>
  </ElBadge>
  <ElRow :gutter="8">
    <ElCol :span="12">
      <h3>水印加密</h3>
      <ElForm size="small" label-width="120px" label-position="left" label-suffix=":">
        <ElFormItem label="水印文字">
          <ElInput style="max-width: 180px" v-model="watermark" />
        </ElFormItem>
        <ElFormItem label="水印文字大小">
          <ElInputNumber :min="1" :step="0.1" v-model="fontSize" />
        </ElFormItem>
        <ElFormItem label="水印通道">
          <ElRadioGroup v-model="channel">
            <ElRadioButton :label="channelOption.value" v-for="channelOption of channelOptions"
              :key="channelOption.value">
              {{ channelOption.label }}
            </ElRadioButton>
          </ElRadioGroup>
        </ElFormItem>
        <transition name="el-fade-in-linear">
          <ElFormItem v-if="!!sourceFile">
            <ElButton type="primary" @click="encode">打水印</ElButton>
          </ElFormItem>
        </transition>
        <ElFormItem>
          <!-- 图片上传与显示 -->
          <Uploader :value="encodedFile" @upload="onUploadSourceFile" />
        </ElFormItem>
      </ElForm>
      <!-- 结果 -->
    </ElCol>
    <ElCol :span="12">
      <div class="grid-content ep-bg-purple-dark" />
    </ElCol>
  </ElRow>
</template>

<script lang="ts" setup>
/* eslint-disable space-before-function-paren */
import { ref, onBeforeMount } from 'vue'
import { CHANNEL, load, status, encode as addWatermark } from './lib'
import Uploader from './components/Uploader.vue'

const isOpencvLoaded = ref(status.loaded)
// 基础加载
onBeforeMount(async () => {
  if (!isOpencvLoaded.value) {
    await load()
    isOpencvLoaded.value = true
  }
})

// 水印设置
const watermark = ref('测试水印')
const fontSize = ref(1.1)
const channel = ref(CHANNEL.B)

// 水印选项
const channelOptions = [
  {
    label: '红',
    value: CHANNEL.R
  },
  {
    label: '绿',
    value: CHANNEL.G
  },
  {
    label: '蓝',
    value: CHANNEL.B
  }
]

// 图片加密
const sourceFile = ref<File | null>(null)
function onUploadSourceFile(file: File) {
  sourceFile.value = file
  encode()
}
const encodedFile = ref<File | null>(null)
async function encode() {
  if (!sourceFile.value) {
    return
  }
  const result = await addWatermark(
    sourceFile.value,
    watermark.value,
    fontSize.value,
    channel.value
  )
  encodedFile.value = result
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

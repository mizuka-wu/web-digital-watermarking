<template>
  <ElBadge :value="isOpencvLoaded ? '加载完成' : '加载中'" :type="isOpencvLoaded ? 'success' : 'info'">
    <div>Opencv状态</div>
  </ElBadge>
  <transition name="el-fade-in-linear">
    <ElRow :gutter="8" v-if="isOpencvLoaded">
      <ElCol :span="12" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <h3>水印加密</h3>
        <ElForm v-loading="isEncoding" size="small" label-width="120px" label-position="left" label-suffix=":">
          <ElFormItem label="水印文字">
            <ElInput style="max-width: 180px" v-model="watermark" placeholder="仅支持英文" />
          </ElFormItem>
          <ElFormItem label="水印文字大小">
            <ElInputNumber :min="1" :step="0.1" v-model="fontSize" />
          </ElFormItem>
          <ElFormItem label="水印通道">
            <ElRadioGroup v-model="encodeChannel">
              <ElRadioButton :label="channelOption.value" v-for="channelOption of channelOptions"
                :key="channelOption.value">
                {{ channelOption.label }}
              </ElRadioButton>
            </ElRadioGroup>
          </ElFormItem>
          <transition name="el-fade-in-linear">
            <ElFormItem v-if="!!encodedSourceFile">
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
      <ElCol :span="12" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <h3>水印解密</h3>
        <ElForm v-loading="isDecoding" size="small" label-suffix=":" label-width="120px">
          <ElFormItem label="水印通道">
            <ElRadioGroup v-model="decodeChannel">
              <ElRadioButton :label="channelOption.value" v-for="channelOption of channelOptions"
                :key="channelOption.value">
                {{ channelOption.label }}
              </ElRadioButton>
            </ElRadioGroup>
          </ElFormItem>
          <transition name="el-fade-in-linear">
            <ElFormItem v-if="!!sourceFile">
              <ElButton type="primary" @click="decode">查水印</ElButton>
            </ElFormItem>
          </transition>
          <ElFormItem>
            <Uploader :value="decodedFile" @upload="onUploadEncodedFile" />
          </ElFormItem>
        </ElForm>
      </ElCol>
    </ElRow>
  </transition>
</template>

<script lang="ts" setup>
/* eslint-disable space-before-function-paren */
import { ref, onBeforeMount } from 'vue'
import { ElMessage } from 'element-plus'
import { CHANNEL, load, status, encode as addWatermark, decode as getWatermark } from './lib'
import Uploader from './components/Uploader.vue'

const isOpencvLoaded = ref(status.loaded)
// 基础加载
onBeforeMount(async () => {
  if (!isOpencvLoaded.value) {
    await load()
    isOpencvLoaded.value = true
  }
})

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

// 加码水印设置
const watermark = ref('test')
const fontSize = ref(1.1)
const encodeChannel = ref(CHANNEL.B)

const isEncoding = ref(false)

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
  isEncoding.value = true
  try {
    const result = await addWatermark(
      sourceFile.value,
      watermark.value,
      fontSize.value,
      encodeChannel.value
    )
    encodedFile.value = result

    isEncoding.value = false
    // 模拟上传了需要解码的图
    decodeChannel.value = encodeChannel.value
    onUploadEncodedFile(result)
  } catch (e) {
    ElMessage.error('加密失败')
  }
  isEncoding.value = false
}

// 图片解密
const decodeChannel = ref(CHANNEL.B)
const isDecoding = ref(false)
const encodedSourceFile = ref<File | null>(null)

function onUploadEncodedFile(file: File) {
  encodedSourceFile.value = file
  decode()
}
const decodedFile = ref<File | null>(null)
async function decode() {
  if (!encodedSourceFile.value) {
    return
  }
  isDecoding.value = true
  try {
    decodedFile.value = await getWatermark(
      encodedSourceFile.value,
      decodeChannel.value
    )
  } catch (e) {
    ElMessage.error('解码失败')
  }
  isDecoding.value = false
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

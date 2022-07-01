<template>
    <ElImage class="image" fit="contain" :src="imageUrl" :preview-src-list="imageUrl ? [] : [imageUrl]">
        <!-- 上传 -->
        <template #error>
            <div class="uploader">
                <ElIcon>
                    <Plus />
                </ElIcon>
                <input type="file" @change="handlerChange" @drop="handlerDrop"
                    accept="image/jpg,image/png,image/jpeg" />
            </div>
        </template>
    </ElImage>
</template>
<script lang="ts" setup>
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable func-call-spacing */
import { Plus } from '@element-plus/icons-vue'
import { ref, defineProps, defineEmits, toRefs, watch } from 'vue'
// 文件上传
const emits = defineEmits<{
    (event: 'upload', file: File): void
}>()

// 拖入文件
function handlerDrop(e: DragEvent) {
    e.preventDefault()
    if (e.dataTransfer) {
        const { files } = e.dataTransfer
        const file = files[0]
        if (file) {
            if (file.type.includes('image/')) {
                emits('upload', file)
            }
        }
    }
}
// 上传文件
function handlerChange(e: Event) {
    e.preventDefault()
    const { target } = e
    if (target) {
        const el = target as HTMLInputElement
        const { files } = el
        if (files) {
            const file = files[0]
            el.value = ''
            emits('upload', file)
        }
    }
}

// 生成图片
const props = defineProps<{
    value: File | null | undefined
}>()
const { value } = toRefs(props)
const imageUrl = ref('')
watch(value, () => {
    if (imageUrl.value) {
        URL.revokeObjectURL(imageUrl.value)
        imageUrl.value = ''
    }
    if (value && value.value instanceof File) {
        imageUrl.value = URL.createObjectURL(value.value)
    }
}, {
    immediate: true
})

</script>
<style lang="scss" scoped>
.image {
    width: 100%;
    height: 100%;
    min-width: 200px;
    min-height: 200px;
    max-height: 400px;
    max-width: 400px;
}

.uploader {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px dashed #409EFF;
    box-sizing: border-box;
    cursor: pointer;

    input[type="file"] {
        position: absolute;
        opacity: 0;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
}
</style>

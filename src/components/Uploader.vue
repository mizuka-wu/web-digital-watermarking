<template>
    <div class="image-container">
        <ElImage download="download.jpg" class="image" fit="contain" :src="imageUrl"
            :preview-src-list="imageUrl ? [imageUrl] : []">
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
        <!-- 删除 -->
        <transition name="fade-in">
            <div class="delete-button" title="删除" v-if="imageUrl" @click="deleteImage">
                <ElIcon>
                    <Delete />
                </ElIcon>
            </div>
        </transition>
    </div>
</template>
<script lang="ts" setup>
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable func-call-spacing */
import { Plus, Delete } from '@element-plus/icons-vue'
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

// 移除图片
function deleteImage() {
    if (imageUrl.value) {
        const url = imageUrl.value
        imageUrl.value = ''
        URL.revokeObjectURL(url)
    }
}

</script>
<style lang="scss" scoped>
.image-container {
    position: relative;
    width: 300px;
    height: 300px;

    .image {
        width: 100%;
        height: 100%;
    }

    .delete-button {
        display: none;
        position: absolute;
        right: 0;
        top: 0;
        padding: 4px;
        cursor: pointer;
        z-index: 10;
        color: #fff;

        &::before {
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            border-top: 40px solid #409EFF;
            border-left: 40px solid transparent;
            right: 0;
            top: 0;
            z-index: 0;
        }
    }

    &:hover .delete-button {
        display: block;
    }
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

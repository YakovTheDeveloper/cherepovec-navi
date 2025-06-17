<template>
  <div class="image-container" :style="containerStyle">
    <img :src="src" :alt="alt" :style="imageStyle" @error="handleImageError" class="image" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { toPx } from './utils'

export interface ImageContainerProps {
  src: string
  alt?: string
  brad?: string | number
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
}

const props = withDefaults(defineProps<ImageContainerProps>(), {
  alt: '',
  brad: '0',
  objectFit: 'cover',
})

const containerStyle = computed(() => ({
  borderRadius: typeof props.brad === 'number' ? `${props.brad}px` : toPx(props.brad),
}))

const imageStyle = computed(() => ({
  objectFit: props.objectFit,
}))

const handleImageError = (e: Event) => {
  const img = e.target as HTMLImageElement
  img.src = '/path/to/fallback-image.jpg' // Optional: Add fallback image
}
</script>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  display: block;
}
</style>

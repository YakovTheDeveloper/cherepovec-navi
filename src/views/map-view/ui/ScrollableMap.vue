<template>
  <div
    class="map-scalable"
    :style="mapStyle"
    draggable="false"
    @touchstart="map.onTouchStart"
    @touchmove="map.onTouchMove"
    @touchend="map.onTouchEnd"
    @mousedown="map.onMouseDown"
    @mousemove="map.onMouseMove"
    @mouseup="map.onMouseUp"
    @mouseleave="map.onMouseUp"
  >
    <img src="/map.png" draggable="false" class="map-img" width="8080px" height="6450px" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useMap } from './useMap'

const props = defineProps<{
  sizeCoefficient: number
  initImgSizes?: [number, number]
}>()

const defaultInitImgSizes: [number, number] = [8080, 6450]
const initImgSizes = computed(() => props.initImgSizes || defaultInitImgSizes)

const containerWidth = ref(window.innerWidth)
const containerHeight = ref(window.innerHeight)

const map = useMap({
  containerWidth,
  containerHeight,
  mapWidth: computed(() => initImgSizes.value[0]),
  mapHeight: computed(() => initImgSizes.value[1]),
  sizeCoefficient: computed(() => props.sizeCoefficient),
})

onMounted(() => {
  window.addEventListener('resize', () => {
    containerWidth.value = window.innerWidth
    containerHeight.value = window.innerHeight
  })
})

const mapStyle = map.mapStyle
</script>

<style lang="scss" scoped>
.map-scalable {
  display: inline-block;
  transform-origin: top left; // Anchor scaling from top-left
  transition: transform 0.1s ease-in-out;
  user-select: none;
  height: 100%;
  //   pointer-events: none;
  width: 8080px;
  height: 6450px;
}

.map-img {
  display: block;
  max-width: none; // Prevent auto-resizing
  max-height: none;
  user-select: none;
  pointer-events: none;
  background-color: #c6d0ff40;
}
</style>

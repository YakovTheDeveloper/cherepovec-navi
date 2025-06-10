<template>
  <div
    class="absolute-wrapper"
    :style="{
      position: 'absolute',
      top: typeof top === 'number' ? `${top}px` : top,
      right: typeof right === 'number' ? `${right}px` : right,
      bottom: typeof bottom === 'number' ? `${bottom}px` : bottom,
      left: typeof left === 'number' ? `${left}px` : left,
      zIndex,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface AbsoluteProps {
  top?: string | number
  right?: string | number
  bottom?: string | number
  left?: string | number
  zIndex?: string | number
}

withDefaults(defineProps<AbsoluteProps>(), {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto',
  zIndex: 'auto',
})
</script>

<style scoped>
.absolute-wrapper {
  display: inline-block;
  width: 100%;
}
</style>

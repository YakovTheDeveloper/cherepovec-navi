<template>
  <div
    class="absolute-wrapper"
    :style="{
      position: 'absolute',
      ...(hasExplicitOffsets
        ? {
            top: toCssUnit(props.top),
            right: toCssUnit(props.right),
            bottom: toCssUnit(props.bottom),
            left: toCssUnit(props.left),
          }
        : { inset: props.inset }),
      ...(props.w && { width: toPx(props.w) }),
      ...(props.h && { height: toPx(props.h) }),
      ...(props.transform && { transform: props.transform }),
      zIndex: props.zIndex,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { toPx, type Size } from './utils'
import { computed } from 'vue'

interface AbsoluteProps {
  inset?: string
  top?: string | number
  right?: string | number
  bottom?: string | number
  left?: string | number
  zIndex?: string | number
  w?: Size
  h?: Size
  transform?: string
}

const props = withDefaults(defineProps<AbsoluteProps>(), {
  top: undefined,
  right: undefined,
  bottom: undefined,
  left: undefined,
  inset: 'auto',
  zIndex: 'auto',
})

const hasExplicitOffsets = computed(
  () =>
    props.top !== undefined ||
    props.right !== undefined ||
    props.bottom !== undefined ||
    props.left !== undefined,
)

const toCssUnit = (value?: string | number) => {
  if (value === undefined) return undefined
  return typeof value === 'number' ? `${value}px` : value
}
</script>

<style scoped>
.absolute-wrapper {
  display: inline-block;
  width: 100%;
}
</style>

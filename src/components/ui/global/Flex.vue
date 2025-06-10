<!-- components/Flex.vue -->
<template>
  <div :style="styleObject">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { toPx, type Size } from './utils'

type Align = 'start' | 'end' | 'center' | 'stretch' | 'baseline'
type Justify = 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'

export interface FlexProps {
  // Layout
  row?: boolean
  col?: boolean
  wrap?: boolean
  gap?: Size

  // Spacing
  p?: Size
  m?: Size
  px?: Size
  py?: Size
  mx?: Size
  my?: Size
  pt?: Size
  pb?: Size
  pl?: Size
  pr?: Size
  mt?: Size
  mb?: Size
  ml?: Size
  mr?: Size

  // Border & Radius
  brad?: Size
  border?: boolean

  // Color
  bg?: string
  c?: string

  // Alignment
  center?: boolean
  align?: Align
  justify?: Justify

  // Size
  w?: Size
  h?: Size
}

const props = defineProps<FlexProps>()

const styleObject = computed(() => ({
  display: 'flex',
  flexDirection: props.row ? ('row' as const) : props.col ? ('column' as const) : undefined,
  flexWrap: props.wrap ? ('wrap' as const) : undefined,
  justifyContent: props.center ? ('center' as const) : props.justify,
  alignItems: props.center ? ('center' as const) : props.align,
  gap: toPx(props.gap),

  // Spacing
  ...(props.p && { padding: toPx(props.p) }),
  ...(props.m && { margin: toPx(props.m) }),
  ...(props.px && { paddingLeft: toPx(props.px), paddingRight: toPx(props.px) }),
  ...(props.py && { paddingTop: toPx(props.py), paddingBottom: toPx(props.py) }),
  ...(props.mx && { marginLeft: toPx(props.mx), marginRight: toPx(props.mx) }),
  ...(props.my && { marginTop: toPx(props.my), marginBottom: toPx(props.my) }),
  ...(props.pt && { paddingTop: toPx(props.pt) }),
  ...(props.pb && { paddingBottom: toPx(props.pb) }),
  ...(props.pl && { paddingLeft: toPx(props.pl) }),
  ...(props.pr && { paddingRight: toPx(props.pr) }),
  ...(props.mt && { marginTop: toPx(props.mt) }),
  ...(props.mb && { marginBottom: toPx(props.mb) }),
  ...(props.ml && { marginLeft: toPx(props.ml) }),
  ...(props.mr && { marginRight: toPx(props.mr) }),

  ...(props.brad && { borderRadius: toPx(props.brad) }),
  ...(props.border && { border: props.border }),

  ...(props.bg && { backgroundColor: props.bg }),
  ...(props.c && { color: props.c }),

  ...(props.w && { width: toPx(props.w) }),
  ...(props.h && { height: toPx(props.h) }),
}))
</script>

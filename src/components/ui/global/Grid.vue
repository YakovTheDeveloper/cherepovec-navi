<template>
  <div class="grid-container" :style="gridStyles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { toPx } from './utils'

export interface GridProps {
  columns?: string | number
  rows?: string | number
  gap?: string | number
  columnGap?: string | number | null
  rowGap?: string | number | null
  justifyItems?: string
  alignItems?: string
  justifyContent?: string
  alignContent?: string
  autoFlow?: string
}

const props = withDefaults(defineProps<GridProps>(), {
  columns: 'auto',
  rows: 'auto',
  gap: '0',
  columnGap: null,
  rowGap: null,
  justifyItems: 'stretch',
  alignItems: 'stretch',
  justifyContent: 'start',
  alignContent: 'start',
  autoFlow: 'row',
})

const gridStyles = computed(() => {
  const styles: Record<string, string> = {
    display: 'grid',
    gridTemplateColumns:
      typeof props.columns === 'number' ? `repeat(${props.columns}, 1fr)` : props.columns,
    gridTemplateRows: typeof props.rows === 'number' ? `repeat(${props.rows}, 1fr)` : props.rows,
    gap: toPx(props.gap),
    gridAutoFlow: props.autoFlow,
    justifyItems: props.justifyItems,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    alignContent: props.alignContent,
  }

  if (props.columnGap !== null) styles.columnGap = props.columnGap.toString()
  if (props.rowGap !== null) styles.rowGap = props.rowGap.toString()

  return styles
})
</script>

<style scoped>
.grid-container {
  width: 100%;
  height: 100%;
}
</style>

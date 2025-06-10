<!-- components/Typo.vue -->
<template>
  <span :style="style" class="typo">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type FontSize = string | number
type FontWeight = 'normal' | 'bold' | 'lighter' | 'bolder' | number
type TextAlign = 'left' | 'right' | 'center' | 'justify'
type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'none'
type ColorVariant = 'primary' | 'light' | 'dark' | 'black' | 'white' | 'red'

defineOptions({ name: 'Typo' })
export interface TypoProps {
  fz?: FontSize
  fw?: FontWeight
  color?: ColorVariant & string
  lh?: string | number
  ta?: TextAlign
  tt?: TextTransform
  ff?: string
  ls?: string
  block?: boolean
}

const props = defineProps<TypoProps>()

const toPx = (val?: string | number): string | undefined => {
  if (val === undefined) return undefined

  if (typeof val === 'number') return `${val}px`

  // If string already contains any letter (unit), just return it as is
  if (/[a-z%]+$/i.test(val.trim())) return val

  // Otherwise it's a number-like string, add px
  return `${val}px`
}

const getColorByVariant = computed(() => {
  if (!props.color) return undefined
  const variants: Record<ColorVariant, string> = {
    primary: 'var(--color-blue-primary)',
    light: 'var(--color-blue-light)',
    dark: 'var(--color-blue-dark)',
    black: 'var(--color-black)',
    white: 'var(--color-white)',
    red: 'var(--color-red)',
  }

  return variants[props.color]
})

const style = computed(() => ({
  display: props.block ? 'block' : 'inline',
  fontSize: toPx(props.fz),
  fontWeight: props.fw,
  color: getColorByVariant.value,
  lineHeight: toPx(props.lh),
  textAlign: props.ta,
  textTransform: props.tt,
  fontFamily: props.ff,
  letterSpacing: props.ls,
}))
</script>

<style scoped lang="scss"></style>

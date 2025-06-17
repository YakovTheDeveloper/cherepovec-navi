<template>
  <button :class="['btn', `btn-${variant}`]" @click="$emit('click')">
    <div class="btn-inner">
      <slot></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
export interface ButtonProps {
  variant?: 'primary' | 'secondary'
}

defineEmits<{
  (e: 'click'): void
}>()

withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
})
</script>

<style scoped lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: 10px solid transparent;
  font-size: 80px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1px;
  padding: 32px;
  height: 158px;
  background-color: transparent;

  &-primary {
    background-color: #7990ff;
    color: #fff;
  }

  &-secondary {
    border-color: var(--color-blue-primary);
    color: var(--color-blue-primary);
  }

  &-inner {
    font-weight: inherit;
    line-height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
}
</style>

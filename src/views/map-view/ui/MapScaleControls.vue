<template>
  <div class="map-scale-controls">
    <button @click="$emit('increment')">
      <IconPlus />
    </button>
    <slot></slot>
    <button @click="$emit('decrement')">
      <IconMinus />
    </button>
  </div>
</template>

<script setup lang="ts">
import IconMinus from '@/components/icons/IconMinus.vue'
import IconPlus from '@/components/icons/IconPlus.vue'

defineEmits(['increment', 'decrement'])
</script>

<style scoped>
.map-scale-controls {
  padding: var(--container-padding);
  width: 240px;
  height: 420px;
  z-index: 5;
  padding: 40px;
  gap: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 60px;
  gap: 10px;

  button {
    background-color: #7990ff;
    color: #fff;
    border-radius: 40px;
    width: 160px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

<template>
  <Flex :style="{ overflow: 'hidden' }" my="60" h="3340" border="8px solid #fff" brad="60">
    <ScrollableMap :sizeCoefficient="sizeCoefficient" />
  </Flex>
</template>

<script setup lang="ts">
const sizeCoefficient = ref(1)

import { ref } from 'vue'
import ScrollableMap from './ui/ScrollableMap.vue'
</script>

<style scoped></style>

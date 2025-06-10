<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import IconBrand from './components/icons/IconBrand.vue'
</script>

<template>
  <Flex align="center" gap="36" brad="60" h="280" bg="#FFFFFF" p="60">
    <IconBrand /> <Typo fz="86" color="primary" fw="bold">Череповец</Typo>
  </Flex>

  <RouterView />
</template>

<style scoped></style>

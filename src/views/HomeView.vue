<script setup lang="ts">
import IconArchitecture from '@/components/icons/IconArchitecture.vue'
import IconCulture from '@/components/icons/IconCulture.vue'
import IconFun from '@/components/icons/IconFun.vue'
import IconMuseum from '@/components/icons/IconMuseum.vue'
import IconPark from '@/components/icons/IconPark.vue'
import IconSport from '@/components/icons/IconSport.vue'
import Absolute from '@/components/ui/global/Absolute.vue'

const data = [
  { label: 'Парки', iconComponentName: IconPark },
  { label: 'Культура', iconComponentName: IconCulture },
  { label: 'Развлечения', iconComponentName: IconFun },
  { label: 'Архитектура', iconComponentName: IconArchitecture },
  { label: 'Музеи', iconComponentName: IconMuseum },
  { label: 'Спорт', iconComponentName: IconSport },
]
</script>

<template>
  <Absolute bottom="418px">
    <Flex p="40" brad="60" bg="#fff" mx="60">
      <Grid columns="1fr 1fr 1fr" rows="1fr 1fr" gap="20">
        <Flex
          v-for="{ iconComponentName, label } in data"
          align="center"
          gap="20"
          bg="#7990FF"
          py="32"
          px="40"
          brad="40"
        >
          <component :is="iconComponentName" width="94px" height="94px" />
          <Typo color="white" fz="56" fw="bold" ls="2px">{{ label }}</Typo>
        </Flex>
      </Grid>
    </Flex>
  </Absolute>
</template>

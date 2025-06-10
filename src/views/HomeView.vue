<script setup lang="ts">
import IconArchitecture from '@/components/icons/IconArchitecture.vue'
import IconCulture from '@/components/icons/IconCulture.vue'
import IconFun from '@/components/icons/IconFun.vue'
import IconMuseum from '@/components/icons/IconMuseum.vue'
import IconOpenMap from '@/components/icons/IconOpenMap.vue'
import IconPark from '@/components/icons/IconPark.vue'
import IconSport from '@/components/icons/IconSport.vue'
import Absolute from '@/components/ui/global/Absolute.vue'
</script>

<template>
  <Flex h="2600" mt="80" mb="40"> </Flex>
  <Flex h="613" gap="52" :col="true" brad="60" bg="#fff" pt="60" pb="40" px="40" align="center">
    <Flex w="80%">
      <Typo color="primary" fz="120" fw="bold" ls="2px" lh="110%" ta="center">
        Интерактивная карта города Череповец
      </Typo>
    </Flex>
    <Flex align="center" bg="#5d73e3" w="100%" justify="center" brad="40" p="40">
      <Flex gap="40">
        <IconOpenMap />
        <Typo fz="100" fw="bold" color="white">Открыть карту</Typo>
      </Flex>
    </Flex>
  </Flex>
</template>

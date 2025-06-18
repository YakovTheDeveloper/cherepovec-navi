<script setup lang="ts">
import IconArchitecture from '@/components/icons/IconArchitecture.vue'
import IconCulture from '@/components/icons/IconCulture.vue'
import IconFun from '@/components/icons/IconFun.vue'
import IconMuseum from '@/components/icons/IconMuseum.vue'
import IconOpenMap from '@/components/icons/IconOpenMap.vue'
import IconPark from '@/components/icons/IconPark.vue'
import IconSport from '@/components/icons/IconSport.vue'
import Absolute from '@/components/ui/global/Absolute.vue'
import { useRouter } from 'vue-router'

const route = useRouter()
</script>

<template>
  <Flex
    h="2600"
    mt="80"
    mb="40"
    brad="60"
    overflow="hidden"
    position="relative"
    justify="center"
    align="center"
  >
    <!-- <ImageContainer src="/mock.png" :style="{ height: '3000px' }"></ImageContainer> -->
    <Absolute left="50%" h="2667" w="2667" transform="translateX(-50%)" z-index="-1">
      <ImageContainer
        src="/mock.png"
        object-fit="cover"
        :style="{ filter: 'blur(20px)' }"
      ></ImageContainer>
    </Absolute>
    <Flex w="2000" h="2000">
      <ImageContainer src="/mock.png"></ImageContainer>
    </Flex>
  </Flex>
  <Flex h="613" gap="52" :col="true" brad="60" bg="#fff" pt="60" pb="40" px="40" align="center">
    <Flex w="80%">
      <Typo color="primary" fz="120" fw="bold" ls="2px" lh="110%" ta="center">
        Интерактивная карта города Череповец
      </Typo>
    </Flex>
    <Flex align="center" bg="#5d73e3" w="100%" justify="center" brad="40" p="40">
      <Flex gap="40" @click="route.push('map')">
        <IconOpenMap />
        <Typo fz="100" fw="bold" color="white">Открыть карту</Typo>
      </Flex>
    </Flex>
  </Flex>
</template>

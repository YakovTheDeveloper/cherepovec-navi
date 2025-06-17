<template>
  <Flex :style="{ overflow: 'hidden' }" mt="80" border="8px solid #fff" brad="60">
    <ScrollableMap :sizeCoefficient="1" />
  </Flex>
  <Flex mt="80" bg="#fff" p="40" brad="60px">
    <Grid columns="1fr 1fr" gap="20">
      <Button><IconArrowBack /> Назад</Button>
      <Button variant="secondary"><IconGeo />Маршрут с собой</Button>
    </Grid>
  </Flex>
</template>

<script setup lang="ts">
import IconArrowBack from '@/components/icons/IconArrowBack.vue'
import ScrollableMap from '../map-view/ui/ScrollableMap.vue'
import IconGeo from '@/components/icons/IconGeo.vue'
</script>

<style scoped></style>

<template>
  <Gallery />
  <Flex mt="auto" bg="#fff" p="40" brad="60px">
    <Grid columns="1fr 1fr" gap="20">
      <Button><IconArrowBack /> Назад</Button>
      <Button variant="secondary"><IconRoute />Маршрут</Button>
    </Grid>
  </Flex>
</template>

<script setup lang="ts">
import Gallery from '@/components/gallery/Gallery.vue'
import IconArrowBack from '@/components/icons/IconArrowBack.vue'
import IconRoute from '@/components/icons/IconRoute.vue'
</script>

<style scoped></style>

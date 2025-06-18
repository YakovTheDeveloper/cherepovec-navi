<template>
  <Flex mt="80" p="156" align="center" justify="center" bg="#fff" :grow="true" brad="60">
    <Flex w="1540" :col="true" gap="120" align="center">
      <Typo ta="center" fz="120" lh="110%" fw="bold"
        >Отсканируйте QR код чтобы добавить маршрут в Яндекс Карты
      </Typo>
      <Flex
        border="24px solid #5D73E3"
        p="80"
        brad="203"
        w="1430"
        h="1430"
        align="center"
        justify="center"
      >
        qr
      </Flex>
    </Flex>
  </Flex>
  <Flex mt="80" bg="#fff" p="40" brad="60px">
    <Grid columns="1fr 1fr" gap="20">
      <Button><IconArrowBack /> Назад</Button>
      <span></span>
    </Grid>
  </Flex>
</template>

<script setup lang="ts">
import IconArrowBack from '@/components/icons/IconArrowBack.vue'
</script>

<style scoped></style>

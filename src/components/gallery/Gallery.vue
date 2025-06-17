<template>
  <Flex class="gallery" brad="60" bg="#fff" :col="true" mt="80" p="60">
    <!-- Main Slider -->
    <swiper
      :modules="modules"
      :thumbs="{ swiper: thumbsSwiper }"
      class="main-swiper"
      @swiper="setMainSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <ImageContainer :src="slide.image" brad="60" />
      </swiper-slide>
    </swiper>

    <!-- Thumbnails -->
    <div class="thumbnails-container">
      <button class="nav-button prev" @click="slidePrev">
        <IconArrowBack width="65px" height="55px" />
      </button>

      <swiper
        :modules="modules"
        :slides-per-view="4"
        :space-between="20"
        watch-slides-progress
        slide-to-clicked-slide
        @swiper="setThumbsSwiper"
        class="thumbs-swiper"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <ImageContainer :src="slide.image" brad="40" />
        </swiper-slide>
      </swiper>

      <Flex class="nav-button next" @click="slideNext">
        <IconArrowNext width="65px" height="55px" />
      </Flex>
    </div>

    <h2 class="title">{{ currentSlide?.title }}</h2>
    <p class="description">{{ currentSlide?.description }}</p>
  </Flex>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import IconArrowBack from '../icons/IconArrowBack.vue'
import IconArrowNext from '../icons/IconArrowNext.vue'

const slides = ref([
  {
    image: 'https://picsum.photos/id/237/200/300',
    title: 'Image 1 Title',
    description: 'Description for image 1',
  },
  {
    image: 'https://picsum.photos/seed/picsum/200/300',
    title: 'Image 2 Title',
    description: 'Description for image 2',
  },
  {
    image: 'https://picsum.photos/200/300?grayscale',
    title: 'Image 3 Title',
    description: 'Description for image 3',
  },
  {
    image: 'https://picsum.photos/200/300?grayscale',
    title: 'Image 4 Title',
    description: 'Description for image 3',
  },
])

const modules = [Navigation, Pagination, Thumbs]

const thumbsSwiper = ref<SwiperType | null>(null)
const mainSwiper = ref<SwiperType | null>(null)
const currentIndex = ref(0)

const currentSlide = computed(() => slides.value[currentIndex.value])

const setThumbsSwiper = (swiper: SwiperType) => {
  thumbsSwiper.value = swiper
}

const setMainSwiper = (swiper: SwiperType) => {
  mainSwiper.value = swiper
}

const onSlideChange = () => {
  if (mainSwiper.value) {
    currentIndex.value = mainSwiper.value.activeIndex
  }
}

const slidePrev = () => {
  mainSwiper.value?.slidePrev()
}

const slideNext = () => {
  mainSwiper.value?.slideNext()
}
</script>

<style scoped lang="scss">
.main-swiper {
  width: 100%;
  height: 1057px;
  margin-bottom: 20px;
}

.main-swiper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnails-container {
  display: flex;
  align-items: center;
  margin-top: 60px;
}

.thumbs-swiper {
  width: calc(100% - 120px);
  height: 243px;
}

.thumbs-swiper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}

.nav-button {
  width: 142px;
  height: 142px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 40px;
  background: #7990ff;
  color: white;
}

.nav-button.prev {
  margin-right: 40px;
}

.nav-button.next {
  margin-left: 40px;
}

.title {
  margin: 60px 0 40px;
  font-size: 96px;
  line-height: 110px;
  font-weight: bold;
}

.description {
  font-size: 48px;
  letter-spacing: 2px;
}
</style>

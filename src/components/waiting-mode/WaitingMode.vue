<!-- components/WaitingModal.vue -->
<template>
  <div v-if="isVisible" class="waiting-modal" @click.stop="sleepingStore.hide">
    <div class="modal-content">
      <h1 class="title">Завершение сеанса</h1>
      <Flex my="16" />
      <div class="countdown">{{ countdownValue }}</div>
      <Flex my="32" />
      <p :style="{ lineHeight: 'normal', width: '95%' }">
        В связи с отсутствием активности - сеанс завершается. Вы можете нажать в любое место экрана,
        чтобы возобновить работу
      </p>
      <Flex my="20" />
      <!-- <p class="caption">Вы можете нажать в любое место экрана, чтобы возобновить работу</p> -->
      <Flex
        p="32"
        brad="40"
        bg="#7990FF"
        gap="40"
        :grow="true"
        :shrink="false"
        align="center"
        justify="center"
        w="100%"
        @click="sleepingStore.hide"
      >
        <Flex gap="40" align="center">
          <IconArrowBack />
          <Typo color="white" fz="80" fw="bold">Назад</Typo>
        </Flex>
      </Flex>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSleepingModeStore } from '@/stores/useWaitingModeStore'
import IconArrowBack from '../icons/IconArrowBack.vue'
// Store
const sleepingStore = useSleepingModeStore()
const { isVisible } = storeToRefs(sleepingStore)

const onClick = () => {
  sleepingStore.hide()
  router.push('/')
}
// Router
const router = useRouter()

// Countdown state
const countdownValue = ref(30)
let interval: ReturnType<typeof setInterval> | null = null

const startCountdown = () => {
  countdownValue.value = sleepingStore.config?.sleepModeSeconds || 30
  interval = setInterval(() => {
    countdownValue.value--
    if (countdownValue.value <= 0) {
      clearCountdown()
      sleepingStore.hide()
      router.push({ name: 'home' }) // Or { path: '/' }
    }
  }, 1000)
}

const clearCountdown = () => {
  if (interval) clearInterval(interval)
  interval = null
}

// Tap or interaction cancels waiting mode
const hide = () => {
  clearCountdown()
  sleepingStore.hide()
}

// Watch modal visibility
watch(isVisible, (newVal) => {
  if (newVal) {
    startCountdown()
  } else {
    clearCountdown()
  }
})

watch(sleepingStore.config, (config) => {
  if (config) {
  } else {
  }
})

onUnmounted(() => {
  clearCountdown()
})
</script>

<style scoped lang="scss">
.waiting-modal {
  position: absolute;
  inset: calc(-1 * var(--padding-container));
  background: rgba(25, 25, 25, 0.3);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}

.modal-content {
  width: 1514px;
  border-radius: 64px;
  padding: 64px;
  color: rgba(50, 50, 50, 1);
  font-weight: 400;
  font-size: 48px;
  line-height: 100%;
  text-align: center;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.countdown {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 262px;
  line-height: 110%;
  text-align: center;
  vertical-align: middle;
  color: var(--color-blue-primary);

  width: 248px;
  height: 248px;
  margin: 0 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/misc/spinner.svg') center center no-repeat;
    background-size: contain;
    box-sizing: border-box;
    animation: countdown-spin 1.5s linear infinite;
  }

  @keyframes countdown-spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}

.title {
  font-weight: 700;
  font-size: 120px;
  line-height: 110%;
}

.caption {
  font-weight: 600;
  font-size: 40px;
  line-height: 100%;
  text-align: center;
  opacity: 0.35;
}

.actions {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}
</style>

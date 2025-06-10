<template>
  <Flex :style="{ overflow: 'hidden' }" my="60" h="3340" border="8px solid #fff" brad="60">
    <ScrollableMap :sizeCoefficient="sizeCoefficient" />
    <Absolute bottom="0">
      <Flex p="60" gap="40" :col="true">
        <MapScaleControls @decrement="decrement" @increment="increment" />
        <Flex gap="20" p="40" bg="#fff" brad="60px" h="238">
          <Flex :grow="true">
            <SearchInput v-model="keyboard.inputModel.value" @focus="keyboard.onFocus" />
          </Flex>
          <Flex py="32" px="40" bg="#7990FF" gap="40" brad="40" w="553" :grow="false">
            <IconFilter />
            <Typo color="white" fz="80" ls="2px" fw="bold">Фильтр</Typo>
          </Flex>
        </Flex>
        <div :class="['keyboard', keyboard.showKeyboard.value ? 'show' : 'hide']">
          <Keyboard
            :show="keyboard.showKeyboard.value"
            @onChange="keyboard.onChange"
            @onKeyPress="keyboard.onKeyPress"
            :input="keyboard.inputModel.value"
            @onClose="keyboard.closeKeyboard"
          />
        </div>
      </Flex>
    </Absolute>
  </Flex>
</template>

<script setup lang="ts">
const { decrement, increment, sizeCoefficient, container } = useMapScale()

import { ref } from 'vue'
import ScrollableMap from './ui/ScrollableMap.vue'
import { useMapScale } from './ui/useMapScale'
import MapScaleControls from './ui/MapScaleControls.vue'
import Absolute from '@/components/ui/global/Absolute.vue'

import { useKeyboard } from '@/components/keyboard/useKeyboard'
import Keyboard from '@/components/keyboard/Keyboard.vue'
import SearchInput from '@/components/ui/SearchInput.vue'
import IconFilter from '@/components/icons/IconFilter.vue'

const keyboard = useKeyboard()
</script>

<style scoped lang="scss">
.keyboard {
  display: none;

  &.show {
    display: block;
  }
}
</style>

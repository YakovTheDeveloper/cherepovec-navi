<template>
  <div :class="keyboardClass" />
  <button class="keyboard-close-btn" @click="emit('onClose')">
    <IconKeyboardClose />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, defineEmits, defineProps, computed } from 'vue'
import Keyboard from 'simple-keyboard'
import 'simple-keyboard/build/css/index.css'
import type { KeyboardLayoutObject } from 'simple-keyboard'
import IconKeyboardClose from '../icons/IconKeyboardClose.vue'

const props = defineProps({
  keyboardClass: {
    type: String,
    default: 'simple-keyboard',
  },
  input: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['onChange', 'onKeyPress', 'onClose'])
const keyboard = ref(null)
const currentLayout = ref('default')

const numbersLayout = [
  '1 2 3 4 5 6 7 8 9 0',
  '$ ! ; ? = @ ( )',
  '{shift} . _ - + {bksp}',
  '{letters} {space} {enter}',
]

const layouts: KeyboardLayoutObject = {
  default: [
    'й ц у к е н г ш щ з х ъ',
    'ф ы в а п р о л д з э',
    '{shift} я ч с м и т ь б ю {bksp}',
    '{numbers} {space} {enter}',
  ],
  shift: [
    'Й Ц У К Е Н Г Ш Щ З Х Ъ',
    'Ф Ы В А П Р О Л Д З Э',
    '{shift} Я Ч С М И Т Ь Б Ю {bksp}',
    '{numbers} {space} {enter}',
  ],
  numbers: numbersLayout,
}

const buttonNameToView = computed(() => ({
  '{bksp}': ' ',
  '{space}': 'Пробел',
  '{shift}': ' ',
  '{numbers}': '&123',
  '{letters}': 'АБВ',
  '{enter}': 'Найти',
  space: ' ',
}))

onMounted(() => {
  keyboard.value = new Keyboard(props.keyboardClass, {
    layout: layouts,
    layoutName: currentLayout.value,
    display: buttonNameToView.value,
    onChange: (input) => emit('onChange', input),
    onKeyPress: (button) => {
      emit('onKeyPress', button)
      if (button === '{shift}') handleShift()
      if (button === '{numbers}') toggleNumbers()
      if (button === '{letters}') switchToLetters()
    },
  })
})

const toggleNumbers = () => {
  currentLayout.value = 'numbers'
  keyboard.value.setOptions({
    layoutName: currentLayout.value,
  })
}

const handleShift = () => {
  currentLayout.value = currentLayout.value === 'default' ? 'shift' : 'default'
  keyboard.value.setOptions({
    layoutName: currentLayout.value,
  })
}

const switchToLetters = () => {
  currentLayout.value = 'default'
  keyboard.value.setOptions({
    layoutName: currentLayout.value,
  })
}

watch(
  () => props.input,
  (newValue) => {
    if (keyboard.value) {
      keyboard.value.setInput(newValue)
    }
  },
)
</script>

<style lang="scss">
/* Base keyboard styles */
body .simple-keyboard {
  background-color: rgba(255, 255, 255, 1);
  min-width: 100% !important;
  margin: 0 auto !important;
  border-radius: 24px;
  padding: 24px;
  position: relative;
  height: 528px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Button base styles */
body .simple-keyboard .hg-button {
  border: none;
  border-radius: 16px;
  flex-shrink: 0;
  background: #bec7f4;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  /* Typography */
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: normal;
  color: #373737;
  text-align: center;
  vertical-align: middle;
  height: 100%;
}

/* Row layout */
.simple-keyboard .hg-row {
  height: 96px;
  justify-content: center;
  gap: 16px;
  margin: 0 !important;

  &:last-child {
    justify-content: flex-start;
  }

  .hg-button:not(:last-child) {
    margin: 0 !important;
  }
}

/* Special buttons */
.hg-button {
  &-numbers {
    min-width: 138px !important;
  }

  &-letters {
    min-width: 140px !important;
  }

  &-shift {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      background: url('/icons/shift-icon-inverse.svg') center no-repeat;
      background-size: contain;
      width: 64px;
      height: 64px;
      z-index: 1;
    }
  }

  &-bksp {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      background: url('/icons/backspace-icon-inverse.svg') center no-repeat;
      background-size: contain;
      width: 64px;
      height: 64px;
      z-index: 1;
    }
  }
}

/* Function buttons */
.hg-standardBtn {
  width: 130px !important;
  flex-grow: 0 !important;
}

.hg-button.hg-functionBtn {
  max-width: 227px !important;
  width: 227px !important;

  &:not(.hg-button-space) {
    color: #fff;
    background: var(--color-blue-primary);
  }

  &.hg-button-enter {
    width: 280px !important;
    min-width: 280px !important;
  }
  &.hg-button-numbers {
    width: 280px !important;
    min-width: 280px !important;
  }
  &.hg-button-space {
    width: 1192px;
    min-width: 1192px;
  }
}

/* Active states */
.simple-keyboard .hg-button.hg-activeButton {
  background: var(--color-blue-primary);
  color: #fff;

  &.hg-button-bksp:after {
    background: url('/icons/backspace-icon.svg') center no-repeat;
    background-size: contain;
  }
}

/* Numbers layout */
.simple-keyboard.hg-layout-numbers .hg-row {
  &:nth-child(2) .hg-button {
    min-width: 79px;
  }

  &:nth-child(3) {
    .hg-button {
      min-width: 120px;
    }
    .hg-functionBtn {
      min-width: 101px;
    }
  }

  &:last-child {
    justify-content: center;
  }
}

/* Shift layout */
.hg-layout-shift .hg-button-shift {
  background: rgba(29, 112, 183, 0.1) !important;

  &:after {
    background: url('/icons/shift-icon.svg') center no-repeat;
    background-size: contain;
  }
}

/* Rows container */
.hg-rows {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Close button */
.keyboard-close-btn {
  margin: 40px auto 0;
  // position: absolute;
  // bottom: 45px;
  // left: 50%;
  // z-index: 10;
  // transform: translateX(-50%);
  padding: 34px 66px;
  background-color: #fff;
  border-radius: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

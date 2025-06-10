<template>
  <div :class="['search-input', $attrs.class]" @click="inputRef?.focus()">
    <IconSearch class="search-icon" />
    <input
      :value="$props.modelValue"
      type="text"
      :placeholder="inputPlaceholder"
      @focus="onFocus"
      @blur="inputPlaceholder = defaultPlaceholder"
      @input="onInput"
      ref="inputRef"
    />
    <div class="clear-button-container">
      <button v-show="showClearButton" @click="onClear" class="clear-button">
        <IconCross />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue'
import IconSearch from '../icons/IconSearch.vue'
import IconCross from '../icons/IconCross.vue'

defineOptions({
  inheritAttrs: false,
})
const attrs = useAttrs()
const props = defineProps<{
  modelValue: string
}>()
const inputRef = ref<HTMLInputElement | null>(null)

const emit = defineEmits(['update:modelValue'])
const showClearButton = computed(() => props.modelValue.length > 0)
function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
function onClear() {
  emit('update:modelValue', '')
}

function onFocus(event: FocusEvent) {
  inputPlaceholder.value = ''
  if (typeof attrs.onFocus === 'function') {
    attrs.onFocus(event)
  }
}

const defaultPlaceholder = 'Поиск'
const inputPlaceholder = ref(defaultPlaceholder)
</script>

<style scoped lang="scss">
.search-input {
  max-width: 1227px;
  display: flex;
  align-items: center;
  border-radius: 40px;
  position: relative;
  gap: 40px;
  background-color: #fff;
  border: 10px solid var(--color-blue-primary);
  padding: 32px 40px;

  input {
    font-size: 80px;
    font-weight: 700;
    min-width: 0;
    color: var(--color-blue-primary);
    border: none;
    outline: none;
    // max-width: 70%;
    flex-grow: 1;

    &:placeholder {
      font-family: Arial;
      font-weight: 400;
      font-size: 80px;
      line-height: 130%;
      letter-spacing: -2%;
      vertical-align: middle;
    }
  }

  &-clear-btn-container {
    width: 60px;
  }
}

.search-icon {
  flex-shrink: 0;
}

.clear-button-container {
  // position: absolute;
  // bottom: 50%;
  // right: 0;
  // transform: translate(-50%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 60px;
  min-width: 60px;
}

input::placeholder {
  color: rgba(29, 111, 183, 0.6);
}

.search-input:hover {
  border-color: rgba(134, 134, 134, 1);
}

.search-input:focus-within {
  border-color: #475fdb;
  // outline: 4px solid rgba(29, 112, 183, 1);
  /* Focused outline */
  color: #475fdb;
}
</style>

// src/vue-shims.d.ts
import { DefineComponent } from 'vue'
import { FlexProps } from './components/ui/global/Flex.vue'
import { TypoProps } from './components/ui/global/Typo.vue'
import type { GridProps } from './components/ui/global/Grid.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Flex: DefineComponent<FlexProps>
    Typo: DefineComponent<TypoProps>
    Grid: DefineComponent<GridProps>
  }
}

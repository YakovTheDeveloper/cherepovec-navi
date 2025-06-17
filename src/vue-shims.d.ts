// src/vue-shims.d.ts
import { DefineComponent } from 'vue'
import { FlexProps } from './components/ui/global/Flex.vue'
import { TypoProps } from './components/ui/global/Typo.vue'
import type { GridProps } from './components/ui/global/Grid.vue'
import type { ImageContainerProps } from './components/ui/global/ImageContainer.vue'
import type { ButtonProps } from './components/ui/global/Button.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Flex: DefineComponent<FlexProps>
    Typo: DefineComponent<TypoProps>
    Grid: DefineComponent<GridProps>
    ImageContainer: DefineComponent<ImageContainerProps>
    Button: DefineComponent<ButtonProps>
  }
}

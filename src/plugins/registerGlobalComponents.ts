import type { App } from 'vue'

export function registerGlobalComponents(app: App) {
  const components = import.meta.glob('../components/ui/global/*.vue', { eager: true })

  for (const path in components) {
    const mod: any = components[path]
    const component = mod.default
    const name = component?.name || path.split('/').pop()?.replace('.vue', '')

    if (name && component) {
      app.component(name, component)
    }
  }
}

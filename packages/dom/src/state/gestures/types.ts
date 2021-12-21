import { Options } from "../types"

export interface StateHandlers {
  enable: VoidFunction
  disable: VoidFunction
}

export interface Gesture {
  isActive: (options: Options) => void
  subscribe: (element: Element, stateHandlers: StateHandlers) => () => void
}

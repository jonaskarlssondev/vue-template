import { Store } from "vuex";
import { BirdState } from './store'

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<BirdState>;
  }
}
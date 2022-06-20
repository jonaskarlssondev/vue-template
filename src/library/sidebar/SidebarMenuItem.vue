<template>
  <div class="w-full h-12 pt-1.5 pb-1.5 cursor-pointer">
    <router-link :to="link" class="flex justify-center items-center w-full h-full pr-1" @click.stop="updateActiveIndex()"
      :class="isActive ? 'pl-0 border-l-4 border-green-400 text-green-400' : 'pl-1 text-gray-400'">
      <div class="w-6 hover:text-gray-700">
        <component :is="icon" />
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import { AppActionTypes } from '@/store/modules/app/actions.types'
import { mapGetters } from "vuex"

export default defineComponent({
  name: "sidebar-menu-item",
  props: {
    index: { type: Number, default: null },
    icon: { type: Object },
    link: { type: String, default: "#" }
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    updateActiveIndex(): void {
      this.$store.dispatch(AppActionTypes.SET_NAVIGATION_ACTIVE_INDEX, this.index)
    }
  },
  computed: {
    ...mapGetters([
      'activeIndex'
    ]),

    getActiveIndex(): number {
      return this.activeIndex
    }
  },
  watch: {
    getActiveIndex(newIndex, _) {
      this.isActive = newIndex == this.index
    }
  }
})
</script>
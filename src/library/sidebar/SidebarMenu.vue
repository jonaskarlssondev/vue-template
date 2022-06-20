<template>
  <nav class="flex flex-col w-full">
      <SidebarMenuItem 
        v-for="(item, index) in MenuItems" 
        :key="item.id" 
        :index="index"
        :id="item.id" 
        :icon="item.icon"
        :link="item.link"
        :active="index === activeIndex">
      </SidebarMenuItem>
  </nav>
</template>

<script lang="ts">
import { 
  defineComponent, 
  shallowRef } from 'vue';

import SidebarMenuItem from './SidebarMenuItem.vue'

import PortfolioIcon from '@/assets/icons/Portfolio.vue'
import ChartIcon from '@/assets/icons/Chart-bar.vue'
import CodeIcon from '@/assets/icons/Code.vue'
import BeakerIcon from '@/assets/icons/Beaker.vue'


export default defineComponent({
  name: "sidebar-menu",
  components: {
    SidebarMenuItem,
  },
  data() {
    return {
      MenuItems: [
        { id: 1, icon: shallowRef(ChartIcon), link: "/dashboard" },
        { id: 2, icon: shallowRef(PortfolioIcon), link: "/portfolio" },
        { id: 3, icon: shallowRef(BeakerIcon), link: "/lab" },
        { id: 4, icon: shallowRef(CodeIcon), link: "/code" },
      ],
      activeIndex: null,
    }
  }
});
</script>
<template>
  <section class="flex flex-col flex-none justify-between items-center w-16 h-screen bg-gray-100 pt-1.5 pb-1.5">
    <header class="w-6/12 mt-3">
      <a href="#">
        <Owl />
      </a>
    </header>

    <SidebarMenu />

    <footer class="flex flex-col justify-end items-center w-inherit h-8 mb-3">
      <div class="w-6 text-gray-400 cursor-pointer hover:text-gray-700">
        <a href="">
          <SettingsIcon />
        </a>
      </div>
    </footer>
  </section> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Owl from '@/assets/icons/Owl.vue'
import SettingsIcon from '@/assets/icons/Settings.vue'
import SidebarMenu from './SidebarMenu.vue'


export default defineComponent({
  name: "sidebar",
  components: {
    Owl,
    SettingsIcon,
    SidebarMenu,
  }
});
</script>

<style scoped>
</style>
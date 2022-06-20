<template>
  <main class="flex w-screen h-screen bg-gray-100"> 
    <Sidebar />
    <Screen />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from './library/sidebar/Sidebar.vue'
import Screen from './library/screen/Screen.vue'

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    Screen
  }
});
</script>
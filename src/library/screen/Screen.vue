<template>
  <main class="flex-1 self-center m-bordered-screen h-bordered-screen bg-gray-200 rounded-md p-2 overflow-y-hidden">
    <router-view>
      
    </router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "screen"
});
</script>

<style scoped>
  .h-bordered-screen {
    height: calc(100vh - 0.750rem);
  }

  .m-bordered-screen {
      margin: 0 0.375rem 0 0;
  }
</style>
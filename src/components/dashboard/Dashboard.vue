<template>
  <main>
    <Containers />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Containers from "./Containers.vue";

export default defineComponent({
    name: "dashboard-section",
    components: { Containers }
});
</script>
<template>
    <section class="flex flex-wrap content-start w-full h-full">
      <Card />
    </section>   
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/library/card/Card.vue'

export default defineComponent({
  components: {
    Card
  }
});
</script>

<style scoped>

.height {
  height: calc(100vh - 4.4rem);
}
</style>
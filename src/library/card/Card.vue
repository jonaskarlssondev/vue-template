<template>
    <section 
      class="bg-white rounded p-1 full-width full-height"
      >
        <Chart />
    </section>   
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExpandIcon from '@/assets/icons/Expand.vue'

export default defineComponent({
  name: "card-container",
  components: {
    ExpandIcon,
  },
});
</script>

<style scoped>
.full-width {
  width: 100%;
  max-width: 1673px;
}

.full-height {
  min-height: 900px;
  height: 912px;
}
</style>
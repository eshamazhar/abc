<template>
  <div>
    <Decubitus />
    <Work />
  </div>
</template>
<script>
import Decubitus from "../components/Decubitus.vue";
import Work from "../components/Work.vue";
export default {
  name: "InfoView",
  components: {
    Decubitus,
    Work,
  },
};
</script>

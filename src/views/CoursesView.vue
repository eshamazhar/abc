<template>
  <div>
    <CoursesInfo />
    <careCom />
  </div>
</template>
<script>
import CoursesInfo from "@/components/CoursesInfo.vue";
import careCom from "@/components/careCom.vue";
export default {
  name: "CoursesView",
  components: {
    CoursesInfo,
    careCom,
  },
};
</script>

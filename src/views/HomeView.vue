<template>
  <MainCom />
  <CardList />
</template>
<script>
import MainCom from "../components/MainCom.vue";
import CardList from "../components/CardList.vue";
export default {
  name: "HomeView",
  components: {
    MainCom,
    CardList,
  },
};
</script>

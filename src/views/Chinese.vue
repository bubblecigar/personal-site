<template>
  <v-app>
    <v-content :style="{ background: '#fafafa'}">
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </v-content>
  </v-app>
</template>

<script>
import Cover from "@/components/Cover.vue";
import About from "@/components/About_CN.vue";
import Portfolio from "@/components/Portfolio_CN.vue";
import Contact from "@/components/Contact_CN.vue";
export default {
  name: "App",
  components: {
    Cover,
    About,
    Portfolio,
    Contact
  }
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <v-app>
    <v-content>
      <About></About>
      <Skill></Skill>
      <Contact></Contact>
    </v-content>
  </v-app>
</template>

<script>
import Cover from "@/components/Cover.vue";
import About from "@/components/About_CN.vue";
import Skill from "@/components/Skill_CN.vue";
import Contact from "@/components/Contact_CN.vue";
export default {
  name: "App",
  components: {
    Cover,
    About,
    Skill,
    Contact
  }
};
</script>

<style lang="scss" scoped>
</style>
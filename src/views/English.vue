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
import About from "@/components/About.vue";
import Skill from "@/components/Skill.vue";
import Contact from "@/components/Contact.vue";
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
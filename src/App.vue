<template>
  <div>
    <Cover></Cover>
    <v-app>
      <v-content>
        <About></About>
        <Skill></Skill>
        <Contact></Contact>
      </v-content>
    </v-app>
  </div>
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
  },
  data: () => ({
    show: true
  })
};
</script>

<style >
@import url("https://fonts.googleapis.com/css?family=Acme&display=swap");
/* font-family: "Acme", sans-serif; */
html {
  --ff: "Acme", sans-serif;
  scroll-behavior: smooth;
}

.customized-tag {
  text-align: center;
  font-family: var(--ff);
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 3px;
}

.customized-font {
  font-family: var(--ff);
}
.customized-title {
  font-size: 50px;
  font-weight: bold;
}
.text-border {
  letter-spacing: 3px;
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>

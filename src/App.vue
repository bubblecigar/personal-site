<template>
  <div>
    <Cover></Cover>
    <router-view></router-view>
  </div>
</template>

<script>
import Cover from "@/components/Cover.vue";
export default {
  name: "App",
  components: {
    Cover
  },
  methods: {
    toEng() {
      this.$router.push("/").catch(err => {
        console.log(err);
      });
      this.lang = "English";
    },
    toCN() {
      this.$router.push("/cn").catch(err => {
        console.log(err);
      });
      this.lang = "Chinese";
    }
  },
  data() {
    return {
      lang: "English"
    };
  }
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

.customized-time-tag {
  text-align: center;
  font-family: var(--ff);
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 3px;
  color: lightgray;
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

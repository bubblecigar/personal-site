<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
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

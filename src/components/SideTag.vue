<template>
  <div class="side-tag mt-12">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.customized-tag {
  text-align: center;
  font-family: var(--ff);
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 3px;
}
text-border {
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>
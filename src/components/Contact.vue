<template>
  <v-container id="contact-observe" style="min-height:100vh; overflow:hidden; position:relative; ">
    <img class="deco-image" src="@/assets/end-icon.png" :style="transform" alt />
    <img class="deco-image2" src="@/assets/end-icon.png" :style="transform2" alt />
    <h1 class="customized-tag mt-12 mb-12" id="contact">Contact</h1>
    <v-row justify="center">
      <div class="wrapper">
        <Three></Three>
      </div>
      <div style="padding: 120px"></div>
    </v-row>
    <v-row justify="center">
      <v-col justify="center" class="text-center">
        <v-card flat color="rgba(0,0,0,0)">
          <v-card-title class>
            <v-spacer></v-spacer>
            <h2 class="subtitle-1">王瑞瑜 / Roy Wang</h2>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <a class="contact-link" href="mailto: bubblecigar@gmail.com">
              <v-icon>far fa-envelope</v-icon>
            </a>
            <a
              class="contact-link"
              target="_BLANK"
              href="https://github.com/bubblecigar/personal-site"
            >
              <v-icon>fab fa-github</v-icon>
            </a>
            <a class="contact-link" target="_BLANK" href="https://www.instagram.com/bubblecigar/">
              <v-icon>fab fa-instagram</v-icon>
            </a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div class="pa-12 mb-12 footer">
      <h2 class="main-title2" :class="{leave:visibility<.61}">Looking for a front end job</h2>
    </div>
  </v-container>
</template>

<script>
import Three from "@/components/Three.vue";
export default {
  mounted() {
    const thresholds = [];
    for (let i = 0; i < 101; i++) {
      thresholds.push(i / 100);
    }

    const callback = e => {
      this.visibility = e[0].intersectionRatio;
    };
    const observer = new IntersectionObserver(callback, {
      threshold: thresholds
    });
    observer.observe(document.querySelector("#contact-observe"));
  },
  components: {
    Three
  },
  computed: {
    transform() {
      return `transform: rotate(${120 + 60 * this.visibility}deg);`;
    },
    transform2() {
      return `transform: rotate(${-90 + 90 * this.visibility}deg);`;
    }
  },
  data() {
    return {
      visibility: 0
    };
  }
};
</script>

<style lang="scss" scoped>
h2 {
  color: rgba(0, 0, 0, 0.54);
}
.deco-image {
  position: absolute;
  bottom: 100%;
  left: 0;
  transform-origin: 50% 100%;
}
.deco-image2 {
  position: absolute;
  bottom: 0;
  right: 0;
  transform-origin: 50% 100%;
}
.wrapper {
  position: absolute;
}
.contact-link {
  text-decoration: none;
  margin: 0 0.5em;
}
.main-title2 {
  font-size: 18px;
  font-weight: initial;
  text-align: center;
  font-family: var(--ff);
  animation: blink infinite 3s ease-in-out;
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.footer {
  margin-top: auto;
}
</style>
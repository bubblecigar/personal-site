<template>
  <v-container id="contact-observe" style="min-height:100vh; overflow:hidden; position:relative; ">
    <img class="deco-image" src="@/assets/end-icon.png" :style="transform3" alt />
    <img class="deco-image2" src="@/assets/end-icon.png" :style="transform4" alt />
    <h1 class="customized-tag mt-12 mb-12" id="contact">聯絡方式</h1>
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
    <div class="pa-12 my-12 footer">
      <h2
        class="main-title2"
        :class="{leave:visibility<.61}"
        style="font-size: 14px; letter-spacing: 1px"
      >尋求工作機會</h2>
    </div>
  </v-container>
</template>

<script>
import Three from "@/components/Three.vue";
export default {
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateScroll);
    window.removeEventListener("resize", this.updateHeight);
  },
  mounted() {
    const updateScroll = e => {
      this.scrollY = window.scrollY;
    };
    this.updateScroll = updateScroll; // register for removal
    window.addEventListener("scroll", updateScroll);

    this.documentheight = document.body.scrollHeight;
    this.contactHeight = document.querySelector(
      "#contact-observe"
    ).offsetHeight;

    const updateHeight = e => {
      this.documentheight = document.body.scrollHeight;
      this.contactHeight = document.querySelector(
        "#contact-observe"
      ).offsetHeight;
    };
    this.updateHeight = updateHeight; // register for removal
    window.addEventListener("resize", updateHeight);
  },
  components: {
    Three
  },
  computed: {
    visibility() {
      return this.documentheight - this.scrollY - this.contactHeight;
    },
    remain() {
      return this.documentheight - this.scrollY;
    },
    percentage() {
      const per = 2 - (this.documentheight - this.scrollY) / this.contactHeight;
      if (per <= 0) {
        return 0;
      }
      return per;
    },
    transform3() {
      return `transform: rotate(${120 + 60 * this.percentage}deg);`;
    },
    transform4() {
      return `transform: rotate(${-90 + 90 * this.percentage}deg);`;
    }
  },
  data() {
    return {
      // visibility: 0,
      scrollY: 0,
      documentheight: 0,
      contactHeight: 0,
      updateHeight: undefined,
      updateScroll: undefined
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
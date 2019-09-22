<template>
  <div class="parallax" :id="id">
    <div class="title2" id="observed-title">
      <h1 class="main-title2" :class="{leave:visibility<.90}">Hi, I am Roy.</h1>
      <h2 class="main-title2" :class="{leave:visibility<.61}">
        Welcome to my place
        <v-icon>keyboard_arrow_down</v-icon>
      </h2>
    </div>
    <div class="img" :style="transform">
      <img src="@/assets/1511.jpg" alt />
      <img class="hero-icon" src="@/assets/birds.png" alt />
    </div>
    <div class="toolbar-wrapper">
      <div class="toolbar">
        <a class="item" href="#about">ABOUT</a>
        <a class="item" href="#skill">SKILLS</a>
        <a class="item" href="#contact">CONTACT</a>
      </div>
      <div class="shadow-line"></div>
    </div>
    <div class="toolbar-wrapper fixed" v-show="lock" :style="toolbarBottom">
      <div class="img" :style="offset">
        <img src="@/assets/1511-left.jpg" alt />
      </div>
      <div class="toolbar">
        <a class="item" href="#about">ABOUT</a>
        <a class="item" href="#skill">SKILLS</a>
        <a class="item" href="#contact">CONTACT</a>
      </div>
      <div class="shadow-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", e => {
      this.scrollY = window.scrollY;
    });
    this.documentheight = document.body.scrollHeight;

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
    observer.observe(document.querySelector("#observed-title"));
  },
  props: {
    id: {
      type: String,
      required: false,
      default: "parallax-1"
    },
    speed: {
      type: Number, // 0-100
      required: false,
      default: 70
    }
  },
  data() {
    return {
      scrollY: 0,
      documentheight: 0,
      visibility: 0
    };
  },
  computed: {
    lock() {
      const height = window.innerHeight;
      if (this.scrollY >= height) {
        return this.scrollY - height;
      }
      return false;
    },
    transform() {
      return `transform:translateY(${this.scrollY * this.speed * 0.01}px)`;
    },
    toolbarBottom() {
      if (this.lock > 60) {
        return `transform:translateY(-60px)`;
      }
      return `transform:translateY(-${this.lock}px)`;
    },
    offset() {
      const percentage = this.lock / this.documentheight;
      return `transform:translateY(-${percentage * 80}%)`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Acme&display=swap");
.parallax {
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.title {
  // opacity: 0;
  position: absolute;
  bottom: 2em;
  left: 3%;
  transform: translate3d(0%, 0%, 0);
  z-index: 10;
  font-size: 50px;
  font-family: "Acme", sans-serif;
  letter-spacing: 3px;

  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: black;

  h1 {
    transition: transform 1s, opacity 1s;
  }
}

.title2 {
  position: absolute;
  bottom: 62px;
  width: 100%;
  transform: translate3d(0%, 0%, 0);
  z-index: 10;
  padding-top: 50px;

  font-family: "Acme", sans-serif;
  letter-spacing: 3px;
  h1 {
    font-size: 50px;
    padding: 20px;
    padding-top: 0;
  }
  h2 {
    font-size: 18px;
    font-weight: initial;
    text-align: center;
    animation: blink infinite 3s ease-in-out;
  }

  h1,
  h2 {
    transition: transform 1s, opacity 1s;
  }
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
.hero-icon {
  position: absolute;
  object-fit: contain;
  // object-position: top;
  z-index: 1;
  max-width: 500px;
  height: initial;

  bottom: 50%;
  left: 50%;
  transform: translate3d(0%, 0%, 0);
}

.leave {
  transform: translateY(400%);
  opacity: 0;
}
.img {
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  // object-position: top;
}
.toolbar-wrapper {
  position: absolute;
  bottom: 0;
  width: 100%;
  &.fixed {
    top: 100%;
    height: 62px;
    position: fixed;
    z-index: 50;
    overflow: hidden;
    .img {
      position: absolute;
      height: 100vh;
      width: 100%;
      top: 0%;
      pointer-events: none;
    }
    .toolbar {
      position: absolute;
    }
    .shadow-line {
      top: 0;
    }
  }
}

.toolbar {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .item {
    padding: 20px;
    margin: 0 5px;
    font-weight: bold;
    color: black;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
.shadow-line {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
  box-shadow: 0 0 5px black;
}
</style>
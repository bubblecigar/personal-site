<template>
  <v-container style="padding-bottom:0">
    <h1 class="customized-tag mt-12" id="skill">Skills</h1>
    <v-row justify="center">
      <v-col justify="center" class="text-center" cols="12" md="12" lg="12">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">web_asset</v-icon>Vue
          </v-card-title>
          <v-card-text class="text-left">
            <strong class="sub-title-1">CLI 3.0</strong>
            <p class="mb-0 indent">Being able to build reusable single file component (SFC).</p>
            <p class="mb-0 indent">
              I built
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/f2e_chat_room/deploy/index.html#/"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                Chatbox.vue
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a> using a 3rd party websocket server (Websocket.in).
            </p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Vuex</strong>
            <p class="mb-0 indent">Having an understanding of centralized design pattern of Vuex.</p>
            <p class="indent mb-0">
              I integrated
              <strong>Axios</strong> with Vuex to handle asynchronous HTTP request and built a
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/F2E-APIcall/index.html#/"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                room reservation site
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a>.
            </p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Router</strong>
            <p
              class="mb-0 indent"
            >Knowing how to build single page application (SPA) using vue router.</p>
            <p class="mb-0 indent">The two projects mentioned above are implemented with vue router.</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Vuetify</strong>
            <p
              class="mb-0 indent"
            >Using UI components and grid system in Vuetify to build responsive web design (RWD).</p>
            <p
              class="mb-0 indent"
            >This current page is built using vuetify. Try resizing the screen to see the RWD behavior.</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col justify="center" class="text-center" cols="12" md="4">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">cloud</v-icon>Firebase
          </v-card-title>
          <v-card-text class="text-left pb-0">
            <p class="mb-0 indent">Knowing how to use firebase services:</p>
          </v-card-text>
          <v-card-text class="text-left">
            <strong class="sub-title-1">Authentication</strong>
            <p class="mb-0 indent">Sign up, login, and logout.</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Firestore</strong>
            <p class="mb-0 indent">Create data structure with collections and data.</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Storage</strong>
            <p class="mb-0 indent">Upload or download files from cloud.</p>
            <p class="mb-0 indent pt-4">
              Here is a
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/f2e-firebase/#/"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                storage
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a> built with above services.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col justify="center" class="text-center" cols="12" md="4">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">local_florist</v-icon>Three.js
          </v-card-title>
          <v-card-text class="text-left pb-0">
            <p class="mb-0 indent">
              Having basic knowledge of how 3D rendering works (
              <strong>WebGL</strong>,
              <strong>GLSL</strong>), and being able to get things done using Three.js.
            </p>
            <p class="mb-0 indent">
              I made a
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/threeJS3Dgame/threeJS-environment.html"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                FPS game
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a> using Three.js, in which the animated 3D models and audio effects are credited to
              <a
                target="_BLANK"
                class="blue-grey--text"
                href="http://quaternius.com/assets.html"
              >Quaternius</a> and
              <a
                href="https://samplefocus.com/"
                target="_BLANK"
                class="blue-grey--text"
              >Sample Focus</a> respectively.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col justify="center" class="text-center" cols="12" md="4">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">code</v-icon>Web basic
          </v-card-title>
          <v-card-text class="text-left">
            <strong class="sub-title-1">CSS (SCSS)</strong>
            <p
              class="indent mb-0"
            >Enjoy writing CSS. I always have a lot of fun picking icons and images, trying out different layouts and colors, and making customized user interaction effects.</p>
            <p class="indent">
              Here is a
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/F2E-freecell/index.html"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                freecell solitaire
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a>
              , which is composed of materials from
              <a
                target="_BLANK"
                class="blue-grey--text"
                href="https://fontawesome.com/"
              >Fontawesome</a>,
              <a
                target="_BLANK"
                class="blue-grey--text"
                href="https://www.svgbackgrounds.com/"
              >Svg Background</a>, and
              <a
                target="_BLANK"
                class="blue-grey--text"
                href="https://fonts.google.com/"
              >Google Font</a>.
            </p>
            <strong class="sub-title-1">JavaScript (ES6)</strong>
            <p class="indent">
              Knowing how to explore new features and use them as my own. While learning the canvas API, I made a
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/JSdungeon-canvasAPI/canvasAPI.html"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                canvas playground
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a> and some
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/textAnimation/canvas.html"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                text animations
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a> just for fun.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card flat color="rgba(0,0,0,0)">
          <v-card-text class="d-flex flex-column align-center text-center">
            <strong>Portfolio in list</strong>
            <a
              target="_BLANK"
              href="https://bubblecigar.github.io/f2e_chat_room/deploy/index.html#/"
              class="markdown--link markdown--internal"
              style="text-decoration:none"
            >
              Chatbox.vue
              <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
            </a>
            <a
              target="_BLANK"
              href="https://bubblecigar.github.io/F2E-APIcall/index.html#/"
              class="markdown--link markdown--internal"
              style="text-decoration:none"
            >
              room reservation site
              <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
            </a>
            <a
              target="_BLANK"
              href="https://bubblecigar.github.io/f2e-firebase/#/"
              class="markdown--link markdown--internal"
              style="text-decoration:none"
            >
              storage
              <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
            </a>
            <a
              target="_BLANK"
              href="https://bubblecigar.github.io/threeJS3Dgame/threeJS-environment.html"
              class="markdown--link markdown--internal"
              style="text-decoration:none"
            >
              FPS game
              <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
            </a>
            <a
              target="_BLANK"
              href="https://bubblecigar.github.io/F2E-freecell/index.html"
              class="markdown--link markdown--internal"
              style="text-decoration:none"
            >
              freecell solitaire
              <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
            </a>
            <a
              target="_BLANK"
              href="https://bubblecigar.github.io/JSdungeon-canvasAPI/canvasAPI.html"
              class="markdown--link markdown--internal"
              style="text-decoration:none"
            >
              canvas playground
              <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
            </a>
            <a
              target="_BLANK"
              href="https://bubblecigar.github.io/textAnimation/canvas.html"
              class="markdown--link markdown--internal"
              style="text-decoration:none"
            >
              text animations
              <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
            </a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
import SideTag from "@/components/SideTag.vue";
export default {
  components: {
    SideTag
  }
};
</script>

<style lang="scss" scoped>
.indent {
  text-indent: 1em;
}
</style>
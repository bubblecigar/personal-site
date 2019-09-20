<template>
  <v-container style="padding-bottom:0">
    <h1 class="customized-tag mt-12" id="skill">Skill</h1>
    <v-row justify="center">
      <v-col justify="center" class="text-center" cols="12" md="12" lg="12">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">web_asset</v-icon>Vue
          </v-card-title>
          <v-card-text class="text-left">
            <strong class="sub-title-1">CLI 3.0</strong>
            <p
              class="mb-0 indent"
            >Component is undoubtedly the most powerful feature of vue. Vue CLI make it easy to build and use component as seperate file (Single File Component, SFC).</p>
            <p class="mb-0 indent">
              I build
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/f2e_chat_room/deploy/index.html#/"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                Chatbox.vue
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a>, which is a resuable SFC for example.
            </p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Vuex</strong>
            <p
              class="mb-0 indent"
            >The centralized pattern of Vuex is powerful when it comes to asynchronous state management.</p>
            <p class="indent mb-0">
              I integrate
              <strong>Axios</strong> to handle HTTP request and build a
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
            <p class="mb-0 indent">Vue router = Single Page Application (SPA).</p>
            <p class="mb-0 indent">Both above works are implemented with router.</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Vuetify</strong>
            <p
              class="mb-0 indent"
            >Vuetify is a Material Design component framework for Vue.js, which provides excellent UI components and its own grid system for Responsive Web Design (RWD).</p>
            <p
              class="mb-0 indent"
            >The current page is built with vuetify. Try resize the screen to see the RWD behavior.</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col justify="center" class="text-center" cols="12" md="4">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">cloud</v-icon>Firebase
          </v-card-title>
          <v-card-text class="text-left pb-0">
            <p class="mb-0 indent">Firebase provides back-end services such as:</p>
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
            <p class="mb-0 indent">Upload or download files from the cloud.</p>
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
              I have read some articles regarding
              <strong>WebGL</strong> and
              <strong>GLSL</strong>, so I've gotten basic concept of how 3D rendering work. However, it's not until I discover
              <strong>Three.js</strong> that I have the ability to get things done.
            </p>
            <p class="mb-0 indent pt-4">
              I make a
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/threeJS3Dgame/threeJS-environment.html"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                FPS game
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a> by Three.js, within which the animated 3D models and audio effects are credited to
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
            >I like to write CSS, for having a lot of fun in picking icons and images, trying out different layouts and colors, and making customized user interaction effects.</p>
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
            <p
              class="indent"
            >JavaScript enables greater controls over the page, and may be used to create advance effects. For example, the parallax effect and dropping title of the page is achieved via plain JS.</p>
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
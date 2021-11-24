<template>
  <v-container style="padding-bottom:0">
    <h1 class="customized-tag mt-12" id="skill">Skills</h1>
    <h2 class="customized-time-tag mt-12"> - 2020 - </h2>
    <v-row justify="center">
      <v-col justify="center" class="text-center" cols="12" md="6" lg="4">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">web_asset</v-icon>React
          </v-card-title>
          <v-card-text class="text-left pt-0">
            <p class="mb-0 indent">
              一年多的 React 前端開發經驗
            </p>
            <p class="mb-0 indent">
              我們的產品搭配了許多主流函式庫：
            </p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Redux</strong>
            <p class="mb-0 indent">中心化資料管理</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">React-Router</strong>
            <p
              class="mb-0 indent"
            >單頁應用 (SPA)</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Styled-components</strong>
            <p
              class="mb-0 indent"
            >樣式模組化</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col justify="center" class="text-center" cols="12"  md="6" lg="4">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">build</v-icon>開發工具
          </v-card-title>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Git</strong>
            <p class="mb-0 indent">BitBucket / GitHub</p>
            <p class="mb-0 indent">與團隊進行遠端合作、負責審閱彼此提交的程式碼</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Jest</strong>
            <p
              class="mb-0 indent"
            >
              針對重要區段的程式碼撰寫測試。
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col justify="center" class="text-center" cols="12"  md="6" lg="4">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">dns</v-icon>初級後端知識
          </v-card-title>
          <v-card-text class="text-left pt-0">
            <p class="mb-0 indent">
              操作資料庫、開設 API （RESTful）與前端串接。
            </p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Node</strong>
            <p class="mb-0 indent">我們用的後端框架為 express</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">PostgreSQL</strong>
            <p
              class="mb-0 indent"
            >
              撰寫 query、migration script
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <h2 class="customized-time-tag mt-12"> - 2019 - </h2>
    <v-row>
            <v-col justify="center" class="text-center" cols="12"  md="6" lg="4">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">web_asset</v-icon>Vue
          </v-card-title>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Vuetify</strong>
            <p
              class="mb-0 indent"
            >使用第三方 UI 函式庫實現響應式（RWD）網頁</p>
            <p
              class="mb-0 indent"
            >本頁面即使用 vuetify，可縮放觀察響應式排版</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col justify="center" class="text-center" cols="12"  md="6" lg="4">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">local_florist</v-icon>Three.js
          </v-card-title>
          <v-card-text class="text-left pb-0">
            <p class="mb-0 indent">
              具有基礎 3D 網頁知識 (
              <strong>WebGL</strong>,
              <strong>GLSL</strong>)。
            </p>
            <p class="mb-0 indent">
              使用過 Three.js。做了一個簡單的
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/threeJS3Dgame/threeJS-environment.html"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                第一人稱射擊遊戲
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a>。其中的 3D 動畫模組來自
              <a
                target="_BLANK"
                class="blue-grey--text"
                href="http://quaternius.com/assets.html"
              >Quaternius</a>，音效來自
              <a
                href="https://samplefocus.com/"
                target="_BLANK"
                class="blue-grey--text"
              >Sample Focus</a>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col justify="center" class="text-center" cols="12"  md="6" lg="4">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">code</v-icon>HTML、CSS、JavaScript
          </v-card-title>
          <v-card-text class="text-left">
            <strong class="sub-title-1">CSS (SCSS)</strong>
            <p class="indent">
              透過 CSS 方案達成動畫及各式與使用者互動相關效果：
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/F2E-freecell/index.html"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                單人接龍
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a>
            </p>
            <strong class="sub-title-1">JavaScript (ES6)</strong>
            <p class="indent">
              執行複雜的畫面行為：
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/JSdungeon-canvasAPI/canvasAPI.html"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                動態小畫家
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a>、
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/textAnimation/canvas.html"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                粒子文字特效
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a>
            </p>
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
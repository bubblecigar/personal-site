<template>
  <v-container style="padding-bottom:0">
    <h1 class="customized-tag mt-12" id="skill">技能</h1>
    <v-row justify="center">
      <v-col justify="center" class="text-center" cols="12" md="12" lg="12">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">web_asset</v-icon>Vue
          </v-card-title>
          <v-card-text class="text-left">
            <strong class="sub-title-1">CLI 3.0</strong>
            <p class="mb-0 indent">了解並能建構 single file component (SFC).</p>
            <p class="mb-0 indent">
              我用第三方伺服器 Websocket.in 製作了
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/f2e_chat_room/deploy/index.html#/"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                聊天室元件
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a>.
            </p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Vuex</strong>
            <p class="mb-0 indent">了解 Vuex 中心化的設計模式。</p>
            <p class="indent mb-0">
              我整合
              <strong>Axios</strong> 以及 Vuex 來處理非同步請求並製作了
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/F2E-APIcall/index.html#/"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                旅館訂房網站
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a>.
            </p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Router</strong>
            <p class="mb-0 indent">了解 vue router 並以其製作單頁應用（single page application, SPA）。</p>
            <p class="mb-0 indent">上述的兩個連結都設有 vue router。</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Vuetify</strong>
            <p class="mb-0 indent">能使用 Vuetify 包含的 UI 元件以及格線系統製作響應式網站（responsive web design, RWD）。</p>
            <p class="mb-0 indent">本頁面即使用 Vuetify 建造，可試著改變視窗尺寸來觀察 RWD 行為。</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col justify="center" class="text-center" cols="12" md="4">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">cloud</v-icon>Firebase
          </v-card-title>
          <v-card-text class="text-left pb-0">
            <p class="mb-0 indent">有使用過 firebase 所提供的以下服務：</p>
          </v-card-text>
          <v-card-text class="text-left">
            <strong class="sub-title-1">Authentication</strong>
            <p class="mb-0 indent">註冊、登入以及登出。</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Firestore</strong>
            <p class="mb-0 indent">以 collections 以及 data 創造資料結構。</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">Storage</strong>
            <p class="mb-0 indent">上傳或下載檔案至雲端。</p>
            <p class="mb-0 indent pt-4">
              範例：使用了上述三個功能的
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/f2e-firebase/#/"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                個人倉儲
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a>。
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
            <p class="mb-0 indent">對 3D 繪圖有基本概念（ WebGL、GLSL ），並能夠使用 Three.js 進行實作。</p>
            <p class="mb-0 indent">
              我用
              <a
                target="_BLANK"
                class="blue-grey--text"
                href="http://quaternius.com/assets.html"
              >Quaternius</a> 以及
              <a
                href="https://samplefocus.com/"
                target="_BLANK"
                class="blue-grey--text"
              >Sample Focus</a>
              提供的免費素材製作了一個第一人稱的
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/threeJS3Dgame/threeJS-environment.html"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                射擊遊戲
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a>。
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col justify="center" class="text-center" cols="12" md="4">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">code</v-icon>網頁基礎
          </v-card-title>
          <v-card-text class="text-left">
            <strong class="sub-title-1">CSS (SCSS)</strong>
            <p class="indent mb-0">很喜歡寫 CSS。此外，我在挑圖標、背景、嘗試排版、配色以及製作不同的使用者互動效果的過程中找到了很多樂趣。</p>
            <p class="indent">
              我組合了來自
              <a
                target="_BLANK"
                class="blue-grey--text"
                href="https://fontawesome.com/"
              >Fontawesome</a>、
              <a
                target="_BLANK"
                class="blue-grey--text"
                href="https://www.svgbackgrounds.com/"
              >Svg Background</a> 以及
              <a
                target="_BLANK"
                class="blue-grey--text"
                href="https://fonts.google.com/"
              >Google Font</a>
              的素材製作了
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/F2E-freecell/index.html"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                單人接龍
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a>。
            </p>
            <strong class="sub-title-1">JavaScript (ES6)</strong>
            <p class="indent">
              了解如何學習新功能並化為己用。舉例而言，我在學習 canvas API 的過程中製作了
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/JSdungeon-canvasAPI/canvasAPI.html"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                小畫家
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a> 以及
              <a
                target="_BLANK"
                href="https://bubblecigar.github.io/textAnimation/canvas.html"
                class="markdown--link markdown--internal"
                style="text-decoration:none"
              >
                文字特效
                <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
              </a>。
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card flat color="rgba(0,0,0,0)">
          <v-card-text class="d-flex flex-column align-center text-center">
            <strong>作品集列表</strong>
            <a
              target="_BLANK"
              href="https://bubblecigar.github.io/f2e_chat_room/deploy/index.html#/"
              class="markdown--link markdown--internal"
              style="text-decoration:none"
            >
              聊天室元件
              <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
            </a>
            <a
              target="_BLANK"
              href="https://bubblecigar.github.io/F2E-APIcall/index.html#/"
              class="markdown--link markdown--internal"
              style="text-decoration:none"
            >
              旅館訂房網站
              <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
            </a>
            <a
              target="_BLANK"
              href="https://bubblecigar.github.io/f2e-firebase/#/"
              class="markdown--link markdown--internal"
              style="text-decoration:none"
            >
              個人倉儲
              <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
            </a>
            <a
              target="_BLANK"
              href="https://bubblecigar.github.io/threeJS3Dgame/threeJS-environment.html"
              class="markdown--link markdown--internal"
              style="text-decoration:none"
            >
              射擊遊戲
              <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
            </a>
            <a
              target="_BLANK"
              href="https://bubblecigar.github.io/F2E-freecell/index.html"
              class="markdown--link markdown--internal"
              style="text-decoration:none"
            >
              單人接龍
              <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
            </a>
            <a
              target="_BLANK"
              href="https://bubblecigar.github.io/JSdungeon-canvasAPI/canvasAPI.html"
              class="markdown--link markdown--internal"
              style="text-decoration:none"
            >
              小畫家
              <v-icon style="color:inherit;font-size:inherit;text-decoration:none">open_in_browser</v-icon>
            </a>
            <a
              target="_BLANK"
              href="https://bubblecigar.github.io/textAnimation/canvas.html"
              class="markdown--link markdown--internal"
              style="text-decoration:none"
            >
              文字特效
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
<template>
  <v-container>
    <h1 class="customized-tag mt-12" id="about">簡歷</h1>
    <v-row justify="center">
      <v-col justify="center" class="text-center" cols="12" sm="12" lg="12">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">book</v-icon>自傳
          </v-card-title>
          <v-avatar size="200px" color="rgba(0,0,0,.2)" class="ma-12 float-sm-right">
            <img src="https://source.unsplash.com/random" alt />
          </v-avatar>
          <v-card-text class="text-left">
            <strong class="sub-title-1">1991-</strong>
            <p class="mb-0 indent">我叫王瑞瑜，美國出生，台灣長大，現居台北，二七有餘。</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">2010-2016</strong>
            <p
              class="mb-0 indent"
            >大學、研究所時期皆就讀於台灣大學物理系，並拿到物理學學士以及碩士學位。基礎科學的訓練讓我具備良好的數理直覺，並讓我很擅長學習新事物。舉例而言，近期在學習前端技術時接觸了一點 WebGL 以及 GLSL，發現其中包含了很多線性代數以及塑形函數的相關內容。親眼看見過去所學的數學公式以圖像的形式被渲染在 canvas 上，讓我覺得電腦科學是一門很有意思的領域。</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">2017-2019</strong>
            <p
              class="mb-0 indent"
            >畢業後，我到連邦專利事務所擔任專利工程師，這是我的第一份正職工作。作為專利工程師，我會定期至科技廠與發明人洽談技術細節，並撰寫發明說明書。我被指派負責友達、台達、佳能等等科技廠的專利案件申請。協助處理的專利領域很廣，包含半導體元件、液晶顯示器、投影機、攝像機、雷射、電子電路、甚或演算法都有可能。上述大部分的領域對我而言都很新，但這也是專利工作的一貫挑戰以及樂趣：時時刻刻去面對不熟悉的領域，並快速學習以跟上現有技術。</p>
            <p
              class="mb-0 indent"
            >除了定期拜訪客戶外，每日的例行公事則包含了大量的閱讀以及文字產出。兩年的實務經驗讓我擁有良好的語言能力，不論是英文（雅思 7.5）還是中文。</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">2019-</strong>
            <p
              class="mb-0 indent"
            >雖然在連邦工作時有很正面的工作經驗，但隨著日子推移，我開始思索是否要以專利工作作為一生職志。與其在原地猶豫，我決定直接困惑化為行動，開始嘗試學習程式語言，來摸索不同的職涯方向。我安裝了 Visual Studio Code 並寫了一些應用後，我旋即發現相比於專利工作在技術與法律之間周旋，我更熱衷於從無到有的創造。我在三月的時候離開事務所，並給自己放了一段長假。在一陣子的休息以及學習後，我已經準備好面對接下來的挑戰。</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col justify="center" class="text-center" cols="12" sm="6">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">school</v-icon>學歷
          </v-card-title>
          <v-card-text class="text-left">
            <strong class="sub-title-1">2010-2014</strong>
            <p class="mb-0 indent">台灣大學物理系學士。</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">2014-2016</strong>
            <p class="mb-0 indent">台灣大學物理系碩士。</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col justify="center" class="text-center" cols="12" sm="6">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">work</v-icon>工作經歷
          </v-card-title>
          <v-card-text class="text-left">
            <strong class="sub-title-1">2017</strong>
            <p class="mb-0 indent">遠東香格里拉大飯店頂樓救生員（非正職）。</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">2017-2019</strong>
            <p class="mb-0 indent">連邦專利事務所專利工程師。</p>
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
.title {
  font-size: 80px;
}
</style>
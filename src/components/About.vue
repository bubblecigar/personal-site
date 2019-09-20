<template>
  <v-container>
    <h1 class="customized-tag mt-12" id="about">About</h1>
    <v-row justify="center">
      <v-col justify="center" class="text-center" cols="12" sm="12" lg="12">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">book</v-icon>Autobiography
          </v-card-title>
          <v-avatar size="200px" color="rgba(0,0,0,.2)" class="ma-12 float-sm-right">
            <img src="https://source.unsplash.com/random" alt />
          </v-avatar>
          <v-card-text class="text-left">
            <strong class="sub-title-1">1991-</strong>
            <p
              class="mb-0 indent"
            >I was born in America and raised in Taiwan. Now I am 27 years old and live in Taipei.</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">2010-2016</strong>
            <p class="mb-0 indent">
              I had finished bachelor and master degrees of
              <strong>physics</strong> in NTU. Studying of fundamental science granted me a better mathematics sense, which turned out to be an advantage on almost everything. In front end technology for example, there was linear algebra in WebGL and shaping functions in GLSL. I could see math make its own presence on the canvas, and it was the reason why I like computer science.
            </p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">2017-2019</strong>
            <p class="mb-0 indent">
              After graduation, I got my first job as a
              <strong>patent engineer</strong> in TLC. As a patent engineer, I regularly visited our clients to discuss technology details with inventors, and drafted invention specification on my duty. I was assigned to handle patent applications for companies like AUO(友達), Delta(台達), Canon(佳能), and so on. I had to deal with a variety of fields including semiconductor device, liquid crystal display, projector, camera, laser, circuits, and sometimes even algorithm. Most of the fields were new to me, and it was the challenge of the job - you should get along with the unfamiliarity and learn fast.
            </p>
            <p class="mb-0 indent">
              In addition to the regularly visiting, I was doing massively reading and writing in daily work. Two years of accumulation sharpened my language ability, both English (
              <strong>IELTS 7.5</strong>) and Chinese.
            </p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">2019-</strong>
            <p
              class="mb-0 indent"
            >Although having a positive working experience in TLC, I was confused if I would like to dedicate my whole life in the area of law. To solve my confusion, I made my attempt to learn coding, to see if it would be an option for my future career. Soon after I installed my Visual Studio Code editor and built some application, I decided that I love creating stuff more than interpreting concepts between science and law. I quit in March and started my vacation. After some rest and learning, now I am ready to go.</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col justify="center" class="text-center" cols="12" sm="6">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">school</v-icon>Education
          </v-card-title>
          <v-card-text class="text-left">
            <strong class="sub-title-1">2010-2014</strong>
            <p class="mb-0 indent">
              Bachelor degree of
              physics from National Taiwan University.
            </p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">2014-2016</strong>
            <p class="mb-0 indent">
              Master degree of
              physics from National Taiwan University.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col justify="center" class="text-center" cols="12" sm="6">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">work</v-icon>Experience
          </v-card-title>
          <v-card-text class="text-left">
            <strong class="sub-title-1">2017</strong>
            <p
              class="mb-0 indent"
            >Part time lifeguard in Shangri-La's Far Eastern Plaze Hotel (遠東香格里拉大飯店).</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">2017-2019</strong>
            <p
              class="mb-0 indent"
            >Patent engineer in Tsai Lee & Chen Patent Attorneys & Attorneys at Law (連邦法律事務所).</p>
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
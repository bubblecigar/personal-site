<template>
  <v-container>
    <h1 class="customized-tag mt-12" id="about">About</h1>
    <v-row justify="center">
      <v-col justify="center" class="text-center" cols="12" sm="12" lg="12">
        <v-card class="pa-4" flat color="transparent">
          <v-card-title>
            <v-icon class="mr-4">book</v-icon>Autobiography
          </v-card-title>
          <v-img
            alt="photo"
            class="mt-12 mb-8 mx-auto ma-sm-12 float-sm-right"
            src="@/assets/photo.jpg"
            width="200"
          ></v-img>
          <v-card-text class="text-left">
            <strong class="sub-title-1">1991-</strong>
            <p
              class="mb-0 indent"
            >My name is Roy Wang (王瑞瑜). I was born in America and raised in Taiwan. I am currently 28 years old and live in Taipei.</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">2010-2016</strong>
            <p class="mb-0 indent">
              I finished my bachelor and master degrees in
              <strong>physics</strong> at NTU. Studying fundamental science allowed me to have a better sense in mathematics. In front-end technology, for example, linear algebra is needed in WebGL and for shaping functions in GLSL. I saw math making its presence on the canvas, and for that reason I found computer science to be an interesting field.
            </p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">2017-2019</strong>
            <p class="mb-0 indent">
              After graduation, I got my first job as a
              <strong>patent engineer</strong> at TLC. As part of my responsibility, I regularly visited clients in order to discuss technology details with the inventors, and drafted invention specification. I was assigned to handle patent applications for companies like AUO(友達), Delta(台達), Canon(佳能), and so on. I had to work with technologies in a variety of fields, including semiconductor device, liquid crystal display, projector, camera, laser, circuits, and sometimes even algorithm. Most of these fields were new to me, but that was the challenge of the job - you must accept the unfamiliarity and learn fast.
            </p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">2019</strong>
            <p
              class="mb-0 indent"
            >Although I had a positive experience working at TLC, I was unsure as to whether I wanted to dedicate my life to the field of law. To resolve my confusion, I made my attempt to learn coding. I wanted to see if it would be an option for my future career.</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">2019-2020</strong>
            <p
              class="mb-0 indent"
            >Thanks to the vast amount of online resources, after a few months of self-studies, I joined H2o as a <strong>front-end engineer</strong>. H2o is a start-up that makes web application for the veterinary industry. Our application involve data backup, online content management, remote case study, etc. Our technical stack includes React (redux & styled-components), Node (express), PostgreSQL, and uses development tools such as git, jest, and webpack.
            </p>
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
            >Patent engineer in Tsai Lee & Chen Patent Attorneys & Attorneys at Law (連邦專利事務所).</p>
          </v-card-text>
          <v-card-text class="text-left pt-0">
            <strong class="sub-title-1">2019-2020</strong>
            <p
              class="mb-0 indent"
            >Front-end engineer at H2O Co., Ltd（玉液有限公司）.</p>
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
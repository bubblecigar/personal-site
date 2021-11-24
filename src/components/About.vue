<template>
  <v-container>
    <h1 class="customized-tag mt-12" id="about">About</h1>
    <v-img alt="photo" class="mt-12 mb-8 mx-auto" src="@/assets/avatar.jpeg" width="200"></v-img>
    <v-row justify="center">
      <v-col justify="center" class="text-center" cols="12" sm="12" lg="12">
        <v-card class="pa-4" flat color="transparent">
          <v-card-text class="text-center">
            <p class="mb-0 indent">I am Roy, 29 years old and live in Taipei.</p>
          </v-card-text>
          <v-card-text class="text-center">
            <p
              class="mb-0 indent"
            >1.5 year front-end developer experience. Familiar with agile scrum development framework.</p>
          </v-card-text>
          <v-card-text class="text-center">
            <p
              class="mb-0 indent"
            >Have researched front-end game development for a while and finally get the capacity to build some games to entertain myself.</p>
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
            <p class="mb-0 indent">Front-end engineer at H2O Co., Ltd（玉液有限公司）.</p>
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
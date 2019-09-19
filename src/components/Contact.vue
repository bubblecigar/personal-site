<template>
  <v-container>
    <h1 class="customized-tag mt-12" id="contact">Contact</h1>
    <v-row justify="center">
      <v-avatar size="200px" color="rgba(0,0,0,.2)" class="ma-12 float-sm-right">
        <img src="https://source.unsplash.com/random" alt />
      </v-avatar>
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
            <a href="mailto: bubblecigar@gmail.com" style="text-decoration:none">
              <v-icon>mail</v-icon>
            </a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h2 {
  color: rgba(0, 0, 0, 0.54);
}
</style>
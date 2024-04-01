<template>
  <v-carousel height="250" class="rounded-xl" show-arrows="hover" cycle hide-delimiter-background>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet height="100%">
        <div class="d-flex">
          <v-img src="../assets/banner-img.jpeg" cover height="300"></v-img>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script setup>
import { ref } from 'vue'
const slides = ref([1,2,3,4,5,6])
</script>

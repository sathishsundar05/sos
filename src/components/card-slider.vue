<template>
  <v-slide-group
    v-model="model"
    selected-class="bg-success"
    :show-arrows="false"
  >
    <v-slide-group-item
      v-for="n in 15"
      :key="n"
      v-slot="{ isSelected, toggle, selectedClass }"
    >
      <v-card
        :class="['ma-4 rounded-xl', selectedClass]"
        height="300"
        width="200"
      >
        <v-img height="150" src="../assets/coffea.jpeg" cover></v-img>

        <v-card-item>
          <v-card-title>Cafe Badilico</v-card-title>
        </v-card-item>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :model-value="4.5"
              color="amber"
              density="compact"
              size="small"
              half-increments
              readonly
            ></v-rating>

            <div class="text-grey ms-4">4.5 (413)</div>
          </v-row>

          <div class="d-flex pt-3 justify-space-between align-center">
            <div class="my-4 text-subtitle-1">15/-</div>
            <div class="pa-2 bg-teal rounded-xl elevation-4" @click="$emit('openCartInfo')"><v-icon>mdi-plus</v-icon></div>
          </div>
        </v-card-text>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>
<script setup>
import { ref } from "vue";
const model = ref();

const emit = defineEmits(['openCartInfo'])
</script>

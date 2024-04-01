<template>
  <v-layout class="pa-3">
    <v-slide-x-transition>
      <div v-show="selectedMenu === 0" class="w-100">
        <v-text-field
          append-inner-icon="mdi-magnify"
          density="compact"
          label="Search"
          variant="solo"
          hide-details
          single-line
        ></v-text-field>
        <banner class="my-6"></banner>
        <filters class="my-6"></filters>
        <div class="d-flex justify-space-between align-center">
          <h6 class="text-h6">Most Popular</h6>
          <p class="text-body-2">View more</p>
        </div>
        <card-slider @openCartInfo="openCartInfo"></card-slider>
        <v-slide-y-reverse-transition>
          <cart-card
            v-show="showCartInfo"
            @openCartPage="selectedMenu = 2"
            class="position-sticky mx-3"
            style="bottom: 80px"
          ></cart-card>
        </v-slide-y-reverse-transition>
      </div>
    </v-slide-x-transition>

    <v-slide-x-transition>
      <div v-show="selectedMenu === 2" class="w-100">
        <v-card class="mx-auto pa-0 elevation-6">
          <template v-slot:prepend>
            <v-img
              width="100"
              height="80"
              src="./assets/coffea.jpeg"
              cover
            ></v-img>
          </template>
          <template v-slot:append>
            <v-icon class="pa-2 bg-teal rounded-xl">mdi-minus</v-icon>
            <div class="pa-2">1</div>
            <v-icon class="pa-2 bg-teal rounded-xl">mdi-plus</v-icon>
          </template>
          <template v-slot:title>
            <div class="pl-3">Elaichi Tea</div>
            <div class="pl-3">15/-</div>
          </template>
        </v-card>

        <v-card class="mx-auto pa-0 elevation-6 mt-4">
          <template v-slot:prepend>
            <v-img
              width="100"
              height="80"
              src="./assets/coffea.jpeg"
              cover
            ></v-img>
          </template>
          <template v-slot:append>
            <v-icon class="pa-2 bg-teal rounded-xl">mdi-minus</v-icon>
            <div class="pa-2">1</div>
            <v-icon class="pa-2 bg-teal rounded-xl">mdi-plus</v-icon>
          </template>
          <template v-slot:title>
            <div class="pl-3">Elaichi Tea</div>
            <div class="pl-3">15/-</div>
          </template>
        </v-card>

        <v-card class="mx-auto pa-0 elevation-6 mt-4">
          <template v-slot:prepend>
            <v-img
              width="100"
              height="80"
              src="./assets/coffea.jpeg"
              cover
            ></v-img>
          </template>
          <template v-slot:append>
            <v-icon class="pa-2 bg-teal rounded-xl">mdi-minus</v-icon>
            <div class="pa-2">1</div>
            <v-icon class="pa-2 bg-teal rounded-xl">mdi-plus</v-icon>
          </template>
          <template v-slot:title>
            <div class="pl-3">Elaichi Tea</div>
            <div class="pl-3">15/-</div>
          </template>
        </v-card>

        <div class="d-flex justify-space-between align-center mt-10">
          <h6 class="text-h6">Subtotal</h6>
          <h2 class="text-h6">250/-</h2>
        </div>
        <v-divider class="my-4"></v-divider>
        <div class="d-flex justify-space-between align-center">
          <h6 class="text-h6 text-teal">Total</h6>
          <h2 class="text-h6">250/-</h2>
        </div>

        <v-btn color="teal" size="large" class="w-100 mt-10 rounded-lg">Checkout</v-btn>
      </div>
    </v-slide-x-transition>
    <bottom-navigation
      :selectedMenu="selectedMenu"
      @menuSelectionUpdated="menuSelectionUpdated"
    ></bottom-navigation>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";
const showCartInfo = ref(false);
const selectedMenu = ref(0);

const openCartInfo = () => {
  showCartInfo.value = true;
};

const menuSelectionUpdated = (val) => {
  selectedMenu.value = val;
};
</script>

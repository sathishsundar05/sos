<template>
  <v-layout class="pa-3">
    <v-slide-x-transition>
      <div v-show="selectedMenu === 0" class="w-100">
        <div class="sub-header d-flex align-center">
          <v-text-field
            append-inner-icon="mdi-magnify"
            density="compact"
            label="Search"
            variant="solo"
            hide-details
            single-line
          ></v-text-field>
          <v-icon size="26" class="ml-3" @click="() => {}">mdi-cart</v-icon>
        </div>
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
      <div v-show="selectedMenu === 2" class="w-100 fill-content-height">
        <div v-if="!confirmOrder">
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

          <v-btn color="teal" size="large" class="w-100 mt-10 rounded-lg" @click="confirmOrder = true"
            >Checkout</v-btn
          >
        </div>

        <v-slide-x-transition>
          <div
            v-if="confirmOrder"
            class="text-center d-flex flex-column h-100 justify-center align-center"
          >
            <div class="w-100">
              <v-img src="./assets/order-confirmed.jpeg"></v-img>
            </div>
            <div class="text-h5 font-weight-medium pt-12">
              Thanks for your Order! Cooking In Progress
            </div>
            <div class="pt-3 text-h6 font-weight-regular">
              Arriving in 16 Mins :)
            </div>
            <v-btn color="teal" size="large" class="w-100 mt-10 rounded-lg"
              >Order Next</v-btn
            >
          </div>
        </v-slide-x-transition>
      </div>
    </v-slide-x-transition>
    <bottom-navigation
      :selectedMenu="selectedMenu"
      @menuSelectionUpdated="menuSelectionUpdated"
    ></bottom-navigation>
  </v-layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { collection } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import firebaseApp from "./utils/firebase-config";
import { getFirestore } from "firebase/firestore";

const showCartInfo = ref(false);
const selectedMenu = ref(0);
const confirmOrder = ref(false);

const db = getFirestore(firebaseApp);

onMounted(async () => {
  onSnapshot(collection(db, "orders"), (doc) => {
    console.log(doc.docs);
  });
});
const openCartInfo = () => {
  showCartInfo.value = true;
};

const menuSelectionUpdated = (val) => {
  selectedMenu.value = val;
};
</script>

<style lang="scss" scoped>
.fill-content-height {
  height: calc(100vh - 5rem);
}
</style>

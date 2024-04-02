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
        </div>
        <div class="pt-4">
          <v-slide-group :show-arrows="false">
            <v-slide-group-item
            >
              <v-card
                class="ma-4"
                color="purple-lighten-1"
                height="80"
                width="150"
              >
              </v-card>
            </v-slide-group-item>
            <v-slide-group-item
            >
              <v-card
                class="ma-4"
                color="green-lighten-1"
                height="80"
                width="150"
              >
              </v-card>
            </v-slide-group-item>
            <v-slide-group-item
            >
              <v-card
                class="ma-4"
                color="yellow-lighten-1"
                height="80"
                width="150"
              >
              </v-card>
            </v-slide-group-item>
            <v-slide-group-item
            >
              <v-card
                class="ma-4"
                color="teal-lighten-1"
                height="80"
                width="150"
              >
              </v-card>
            </v-slide-group-item>
            <v-slide-group-item
            >
              <v-card
                class="ma-4"
                color="grey-lighten-1"
                height="80"
                width="150"
              >
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </div>
        <div class="pt-4">
          <v-slide-group :show-arrows="false">
            <v-slide-group-item>
              <v-btn color="teal" class="ma-2" rounded> All </v-btn>
            </v-slide-group-item>
            <v-slide-group-item>
              <v-btn color="" class="ma-2" rounded> Processing </v-btn>
            </v-slide-group-item>
            <v-slide-group-item>
              <v-btn color="" class="ma-2" rounded> Ready </v-btn>
            </v-slide-group-item>
            <v-slide-group-item>
              <v-btn color="" class="ma-2" rounded> Completed </v-btn>
            </v-slide-group-item>
          </v-slide-group>
        </div>
        <order-list
          class="mt-6"
          @openOrderDetail="openBottomSheet = true"
        ></order-list>
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

          <v-btn
            color="teal"
            size="large"
            class="w-100 mt-10 rounded-lg"
            @click="confirmOrder = true"
            >Confirm</v-btn
          >
          <div class="position-absolute floating-button">
            <v-btn
              icon="mdi-plus"
              size="small"
              @click="openBottomSheetAdmin = true"
            ></v-btn>
          </div>
        </div>
      </div>
    </v-slide-x-transition>
    <bottom-navigation
      :selectedMenu="selectedMenu"
      @menuSelectionUpdated="menuSelectionUpdated"
    ></bottom-navigation>

    <v-bottom-sheet
      v-model="openBottomSheet"
      class="bottom-sheet"
      height="30rem"
    >
      <v-card>
        <template v-slot:title>
          <div class="d-flex justify-space-between align-center">
            <div>Order #2435234</div>
            <div>
              <v-icon size="25" @click="openCart">mdi-pencil</v-icon>
            </div>
          </div>
        </template>
        <template v-slot:text>
          <div class="sheet-content">
            <v-card class="mx-auto pa-0 elevation-6 mb-3">
              <template v-slot:prepend>
                <v-img
                  width="100"
                  height="80"
                  src="./assets/coffea.jpeg"
                  cover
                ></v-img>
              </template>
              <template v-slot:title>
                <div class="pl-3">Elaichi Tea</div>
                <div class="pl-3">15/-</div>
              </template>
            </v-card>
            <v-card class="mx-auto pa-0 elevation-6 mb-3">
              <template v-slot:prepend>
                <v-img
                  width="100"
                  height="80"
                  src="./assets/coffea.jpeg"
                  cover
                ></v-img>
              </template>
              <template v-slot:title>
                <div class="pl-3">Elaichi Tea</div>
                <div class="pl-3">15/-</div>
              </template>
            </v-card>
            <v-card class="mx-auto pa-0 elevation-6 mb-3">
              <template v-slot:prepend>
                <v-img
                  width="100"
                  height="80"
                  src="./assets/coffea.jpeg"
                  cover
                ></v-img>
              </template>
              <template v-slot:title>
                <div class="pl-3">Elaichi Tea</div>
                <div class="pl-3">15/-</div>
              </template>
            </v-card>
            <v-card class="mx-auto pa-0 elevation-6 mb-3">
              <template v-slot:prepend>
                <v-img
                  width="100"
                  height="80"
                  src="./assets/coffea.jpeg"
                  cover
                ></v-img>
              </template>
              <template v-slot:title>
                <div class="pl-3">Elaichi Tea</div>
                <div class="pl-3">15/-</div>
              </template>
            </v-card>
          </div>
        </template>
        <template v-slot:actions>
          <div class="pa-2 w-100 d-flex">
            <v-btn color="grey" size="large" class="w-50 rounded-lg"
              >Reject</v-btn
            >
            <v-btn
              color="teal"
              variant="flat"
              size="large"
              class="w-50 rounded-lg"
              >Accept</v-btn
            >
          </div>
        </template>
      </v-card>
    </v-bottom-sheet>

    <v-bottom-sheet
      v-model="openBottomSheetAdmin"
      class="bottom-sheet-admin"
      height="50rem"
    >
      <v-card class="h-100">
        <template v-slot:title>
          <div class="d-flex justify-space-between align-center">
            <div>Add Item</div>
            <div>
              <v-icon @click="openBottomSheetAdmin = false">mdi-close</v-icon>
            </div>
          </div>
        </template>
        <template v-slot:text>
          <v-text-field
            append-inner-icon="mdi-magnify"
            density="compact"
            label="Search"
            variant="outlined"
            hide-details
            single-line
          ></v-text-field>
          <div class="mt-6">
            <v-card class="mx-auto pa-0 elevation-6 mb-3">
              <template v-slot:prepend>
                <v-img
                  width="100"
                  height="80"
                  src="./assets/coffea.jpeg"
                  cover
                ></v-img>
              </template>
              <template v-slot:title>
                <div class="pl-3">Elaichi Tea</div>
                <div class="pl-3">15/-</div>
              </template>
              <template v-slot:append>
                <v-icon class="pa-2 bg-teal rounded-xl">mdi-plus</v-icon>
              </template>
            </v-card>
            <v-card class="mx-auto pa-0 elevation-6 mb-3">
              <template v-slot:prepend>
                <v-img
                  width="100"
                  height="80"
                  src="./assets/coffea.jpeg"
                  cover
                ></v-img>
              </template>
              <template v-slot:title>
                <div class="pl-3">Elaichi Tea</div>
                <div class="pl-3">15/-</div>
              </template>
              <template v-slot:append>
                <v-icon class="pa-2 bg-teal rounded-xl">mdi-plus</v-icon>
              </template>
            </v-card>
            <v-card class="mx-auto pa-0 elevation-6 mb-3">
              <template v-slot:prepend>
                <v-img
                  width="100"
                  height="80"
                  src="./assets/coffea.jpeg"
                  cover
                ></v-img>
              </template>
              <template v-slot:title>
                <div class="pl-3">Elaichi Tea</div>
                <div class="pl-3">15/-</div>
              </template>
              <template v-slot:append>
                <v-icon class="pa-2 bg-teal rounded-xl">mdi-plus</v-icon>
              </template>
            </v-card>
            <v-card class="mx-auto pa-0 elevation-6 mb-3">
              <template v-slot:prepend>
                <v-img
                  width="100"
                  height="80"
                  src="./assets/coffea.jpeg"
                  cover
                ></v-img>
              </template>
              <template v-slot:title>
                <div class="pl-3">Elaichi Tea</div>
                <div class="pl-3">15/-</div>
              </template>
              <template v-slot:append>
                <v-icon class="pa-2 bg-teal rounded-xl">mdi-plus</v-icon>
              </template>
            </v-card>
          </div>
        </template>
      </v-card>
    </v-bottom-sheet>
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
const openBottomSheet = ref(false);
const openBottomSheetAdmin = ref(false);

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

const openCart = () => {
  openBottomSheet.value = false;
  selectedMenu.value = 2;
};
</script>

<style lang="scss" scoped>
.fill-content-height {
  height: calc(100vh - 5rem);
}
:deep(.v-card-text) {
  height: 30rem;
  overflow: scroll;
}
:deep(.v-card-item) {
  padding-bottom: 14px !important;
}
.floating-button {
  bottom: 5rem;
  right: 1rem;
}
</style>

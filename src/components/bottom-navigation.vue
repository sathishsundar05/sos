<template>
  <v-bottom-navigation grow color="teal" :model-value="props.selectedMenu">
    <v-btn @click="$emit('menuSelectionUpdated', 0)">
      <v-icon>mdi-home</v-icon>

      Home
    </v-btn>

    <v-btn @click="$emit('menuSelectionUpdated', 1)">
      <v-icon>mdi-magnify</v-icon>

      Search
    </v-btn>

    <v-btn @click="$emit('menuSelectionUpdated', 2)">
      <v-icon>mdi-cart</v-icon>

      Cart
    </v-btn>
    <v-btn @click="$emit('menuSelectionUpdated', 3)">
      <v-icon>mdi-account</v-icon>

      Profile
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
const props = defineProps(['selectedMenu'])
const emit = defineEmits(['menuSelectionUpdated'])
</script>

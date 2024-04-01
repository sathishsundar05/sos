<template>
  <v-card
    append-icon="mdi-arrow-right"
    class="mx-auto w-100 elevation-6"
    prepend-icon="mdi-cart"
    @click="$emit('openCartPage')"
  >
    <template v-slot:title>
        <h6 class="text-body-1 pl-3">Cart: 2 Items</h6>
    </template>
    <template v-slot:subtitle>
        <h6 class="text-h6 pl-3">250/-</h6>
    </template>
  </v-card>
</template>

<script setup>
const emit = defineEmits(['openCartPage'])
</script>
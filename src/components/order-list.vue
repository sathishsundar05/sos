<template>
    <div>
  <v-card class="mx-auto mb-4" max-width="450" @click="$emit('openOrderDetail')">
    <template v-slot:title>
      <div>Order id 23</div>
    </template>
    <template v-slot:subtitle>
      <div>2 items</div>
      <div>Total: 250/-</div>
    </template>
  </v-card>
  <v-card class="mx-auto mb-4" max-width="450" @click="$emit('openOrderDetail')">
    <template v-slot:title>
      <div>Order id 23</div>
    </template>
    <template v-slot:subtitle>
      <div>2 items</div>
      <div>Total: 250/-</div>
    </template>
  </v-card>
  <v-card class="mx-auto mb-4" max-width="450" @click="$emit('openOrderDetail')">
    <template v-slot:title>
      <div>Order id 23</div>
    </template>
    <template v-slot:subtitle>
      <div>2 items</div>
      <div>Total: 250/-</div>
    </template>
  </v-card>
  <v-card class="mx-auto mb-4" max-width="450" @click="$emit('openOrderDetail')">
    <template v-slot:title>
      <div>Order id 23</div>
    </template>
    <template v-slot:subtitle>
      <div>2 items</div>
      <div>Total: 250/-</div>
    </template>
  </v-card>
</div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(['openOrderDetail'])
</script>

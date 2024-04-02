<template>
  <v-layout>
    <div class="h-screen w-100 login-bg">
      <v-sheet class="position-absolute login-form pa-6 rounded-xl mx-6">
        <v-form fast-fail @submit.prevent>
          <v-slide-x-transition>
            <div v-show="showOtp" class="text-center">
              <h3 class="text-body2 mb-2">Enter the one time password</h3>
              <div class="pb-3">A code has been sent to *****12345</div>
              <v-otp-input length="4" v-model="otp"></v-otp-input>
              <v-btn
                class="mt-2 rounded-lg"
                color="teal"
                type="submit"
                block
                @click="navigate"
                >Submit</v-btn
              >
              <div class="text-caption mt-2">
                <v-btn
                  color="teal"
                  size="medium"
                  text="Send New Code"
                  variant="text"
                  class="pa-2"
                ></v-btn>
              </div>
            </div>
          </v-slide-x-transition>
          <div v-if="!showOtp">
            <v-text-field
              v-model="name"
              density="compact"
              variant="underlined"
              placeholder="Enter you name"
            ></v-text-field>
            <v-text-field
              v-model="mobilenumber"
              density="compact"
              variant="underlined"
              placeholder="Mobile number"
            ></v-text-field>

            <v-btn
              class="mt-2 rounded-lg"
              color="teal"
              type="submit"
              block
              @click="showOtp = true"
              >Send Otp</v-btn
            >
          </div>
        </v-form>
      </v-sheet>
    </div>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from 'vue-router'

const mobilenumber = ref("");
const name = ref("");
const otp = ref("");
const showOtp = ref(false);
const router = useRouter()

const navigate = () => {
    router.push({path: '/dashboard'})
}
</script>

<style lang="scss" scoped>
.login-bg {
  background-image: url("./assets/login-banner.jpeg");
  background-size: cover;
}
.login-form {
  bottom: 3rem;
  left: 0;
  right: 0;
}
</style>

<template>
  <div class="login flex justify-center items-center h-[100vh]">
      <div class="card w-[500px] bg-[#004643] shadow-xl rounded">
        <div class="mx-12 my-10">
          <p class="text-[32px] text-[#fffffe] font-bold text-center">Login</p>
          <p class="text-[#fffffe] text-center">
            Masukkan email dan password anda 
            <br> 
            untuk masuk ke akun anda
          </p>
          <InputField 
            type="email"
            placeholder="Email"
            class="mt-5"
          />
          <InputField 
            :type="inputType"
            placeholder="Password"
            class="mt-5"
          />
          <div class="flex justify-between mt-2">
            <div class="flex">
              <input 
                type="checkbox" 
                @click="showPassword()"
              >
              <p class="text-[#fffffe] text-[14px] ml-2">Tampilkan Password</p>
            </div>
            <div>
              <a 
                href="" 
                class="text-[#f9bc60] text-[14px] ml-2"
              >Lupa Password ?</a>
            </div>
          </div>
          <Button class="mt-5" label="Masuk" />
        </div>
      </div>
  </div>
</template>

<script setup>
// Import
import { ref, computed } from 'vue'
import InputField from '@/components/input/Input.vue'
import Button from "@/components/button/Button.vue"

// Ref
const passwordIsShow = ref(false)

// Method
function showPassword() {
  passwordIsShow.value = !passwordIsShow.value
}

// Computed
const inputType = computed(() => {
  return passwordIsShow.value ? "text" : "password"
})
</script>
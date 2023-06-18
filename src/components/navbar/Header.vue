<template>
  <div>
    <div class="header text-[#001e1d] font-semibold flex px-6 py-5">
      <div @click="goTouDataGuru()" class="cursor-pointer">
        Data Guru
      </div>
      <div @click="goTouMapel()" class="ml-7 cursor-pointer">
        Data Mata Pelajaran
      </div>
      <div @click="goTouJampel()" class="ml-7 cursor-pointer">
        Data Jam Pelajaran
      </div>
      <div class="ml-7 cursor-pointer">
        Data Hari
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goTouDataGuru() {
  router.push({ path: '/dashboard/guru' })
}
function goTouMapel() {
  router.push({ path: '/dashboard/mata-pelajaran' })
}
function goTouJampel() {
  router.push({ path: '/dashboard/jam-pelajaran' })
}
// function goTouDataHari() {
//   router.push({ path: '/dashboard/jam-pelajaran' })
// }

</script>
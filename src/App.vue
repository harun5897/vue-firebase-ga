<template>
  <div>
    <h1 class="text-2xl font-bold bg-red-500 text-white py-5 pl-5">Template Landing-Ticketing</h1>
    <router-view></router-view>
    <div class="d-flex pl-5">
      <router-link to="/"> Home <span class="font-bold">/</span></router-link> 
      <router-link to="company-profile"> Company Profile <span class="font-bold">/</span></router-link>
      <router-link to="faq"> Faq</router-link>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
console.log(store.state.exampleState)
</script>

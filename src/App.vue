<template>
  <div class="main-app">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()

console.log(store.state.exampleState)
</script>

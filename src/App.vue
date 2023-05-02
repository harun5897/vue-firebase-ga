<template>
  <div class="main-app">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
console.log(store.state.exampleState)
</script>

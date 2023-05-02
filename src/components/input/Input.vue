<template>
  <div class="input">
    <input 
      :type="inputType" 
      class="w-full bg-[#e8e4e6] focus:outline-none py-2 px-3 rounded font-normal border text-[#001e1d]"
      :placeholder="props.placeholder"
    >
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  placeholder: String,
  type: String,
})

const inputType = ref(props.type)

watch(() => props.type, (newValue) => {
  inputType.value = newValue
})
</script>
<template>
  <div class="input">
    <input
      v-model="inputData"
      :type="inputType" 
      class="w-full bg-[#e8e4e6] focus:outline-none py-2 px-3 rounded font-normal border text-[#001e1d]"
      :placeholder="props.placeholder"
      @input="dataInput"
    >
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// Props
const props = defineProps({
  placeholder: String,
  type: String,
  data: '',
})
//Emit
const emit = defineEmits(['EmitDataInput'])

// Ref
const inputType = ref(props.type)
const inputData = ref(props.data)

// Method
function dataInput(event) {
  emit('EmitDataInput', event.target.value)
}

// Watch
watch(() => props.type, (newValue) => {
  inputType.value = newValue
})
watch(() => props.data, (newValue) => {
  inputData.value = newValue
})

</script>
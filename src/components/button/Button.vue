<template>
  <div class="button">
    <button 
      type="submit" 
      class="bg-[#f9bc60] rounded-[4px] px-7 py-2 text-[#001e1d] text-center font-semibold mt-5"
      :class="[props.block == true ? 'w-full' : '']"
    >
      {{ props.label }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  block: Boolean,
})
</script>
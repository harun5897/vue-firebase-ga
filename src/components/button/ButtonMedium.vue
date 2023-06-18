<template>
  <div class="button">
    <button 
      type="submit" 
      class="bg-[#f9bc60] rounded-[4px] px-4 py-1 text-[#001e1d] text-center font-semibold"
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
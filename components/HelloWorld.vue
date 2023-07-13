<template>
  <div>Hello Wolrd {{ props.a }}</div>
</template>

<script setup lang="ts">
const props = defineProps({
  a: String,
});
</script>

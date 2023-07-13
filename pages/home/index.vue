<template>
  <HelloWorld a="张三" />
  {{ testResult }}
</template>

<script setup>
import { testService } from '~/service';

const { data: testResult } = await testService();
</script>

<style lang="scss" scoped></style>

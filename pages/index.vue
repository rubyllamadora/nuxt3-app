<script setup>
const { data } = await useAsyncData('data', () => $fetch('/api/home'));
const homeData = data.value;
</script>

<template>
  <div>
    Page title: {{ homeData.title }}
  </div>
</template>


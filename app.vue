<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script setup lang="ts">
const apiDataStore = useMyApiDataStore();

await useAsyncData('data', () => apiDataStore.getData().then(() => true));
</script>

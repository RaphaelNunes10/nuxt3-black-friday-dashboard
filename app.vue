<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script setup lang="ts">
const apiDataStore = useMyApiDataStore();
const { getData } = apiDataStore;

await useAsyncData('data', () => getData().then(() => true));
</script>

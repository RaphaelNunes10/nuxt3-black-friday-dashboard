<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script setup lang="ts">
const apiDataStore = useMyApiDataStore();

onBeforeMount(() => {
  apiDataStore.getData();
});
</script>

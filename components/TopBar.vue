<template>
  <div style="height: 120px;">
    <v-app-bar app clipped-right flat light height="120" scroll-behavior="hide" scroll-threshold="60">
      <v-container fluid>
        <v-row no-gutters justify="center" align="center">
          <v-col cols="2" md="1" align="center">
            <nuxt-img 
              :width="logoSize"
              :height="logoSize"
              class="logo"
              src="/logo.svg"
              alt="logo"
            />
          </v-col>
          <v-col cols="8" md="11" align="left">
            <span class="title">
              BLACKFRIDAY<strong>{{ new Date().getFullYear() }}</strong>
            </span>
          </v-col>
          <v-col cols="2" md="1" align="center" class="d-block d-md-none">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      right
      app
      clipped
      temporary
      v-model="drawer"
    >
      <transactions :data="data.transactions" />
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";

const apiDataStore = useMyApiDataStore();
const { data } = storeToRefs(apiDataStore);

const drawer = ref(false);

const { name: displaySize } = useDisplay();

const logoSize = computed(() => {
  switch (displaySize.value) {
    case "xs":
      return 22;
    case "sm":
      return 32;
    default:
      return 42;
  }
});
</script>

<style scoped>
.logo {
  object-fit: contain;
}

.title {
  font-size: 54px !important;
  font-weight: 300;
}

.title strong {
  font-weight: 700;
}

@media only screen and (max-width: 960px) {
  .title {
    font-size: 42px !important;
  }
}

@media only screen and (max-width: 600px) {
  .title {
    font-size: 20px !important;
  }
}
</style>
<template>
  <v-card
    tile
    :dark="dark"
    :color="color"
    flat
    :class="`fill-height ${padding}`"
  >
    <v-container class="px-5 py-5" style="height: 100%">
      <div class="label"><small>Ranking</small></div>
      <div class="header mb-2">{{ title }}</div>
      <simplebar style="overflow-x: hidden; height: 84%; max-height: 100vh">
        <v-row v-for="item in data" :key="item.id">
          <v-col cols="6">
            <v-list-item class="pl-0">
                <v-menu absolute offset-y>
                  <template v-slot:activator="{ props }">
                    <v-list-item-title v-bind="props">
                      <strong>{{ item.store_name }}</strong>
                    </v-list-item-title>
                  </template>
                  <v-card :dark="dark" :color="color">
                    <v-container>{{ item.store_name }}</v-container>
                  </v-card>
                </v-menu>
            </v-list-item>
          </v-col>
          <v-col cols="6" align="right">
            <v-list-item class="pl-0">
                <v-menu absolute offset-y v-if="title == 'Revenues'">
                  <template v-slot:activator="{ props }">
                    <v-list-item-title v-bind="props">
                      <strong><small>R$</small></strong>
                      {{
                        item.total.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      }}
                    </v-list-item-title>
                  </template>
                  <v-card :dark="dark" :color="color">
                    <v-container>
                      R$
                      {{
                        item.total.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      }}
                    </v-container>
                  </v-card>
                </v-menu>
                <v-menu absolute offset-y v-else>
                  <template v-slot:activator="{ props }">
                    <v-list-item-title v-bind="props">
                      {{ item.total }}
                    </v-list-item-title>
                  </template>
                  <v-card :dark="dark" :color="color">
                    <v-container>
                      {{ item.total }}
                    </v-container>
                  </v-card>
                </v-menu>
            </v-list-item>
          </v-col>
        </v-row>
      </simplebar>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import Simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";

import { useDisplay } from "vuetify";

defineProps<{
  title?: string, 
  color?: string, 
  dark?: boolean, 
  data?: RankingItem[]
}>();

const { name: displaySize }  = useDisplay();

const padding = computed(() => {
  switch (displaySize.value) {
    case "xs":
      return "px-1 py-0";
    case "md":
      return "px-1 py-5";
    case "lg":
      return "px-2 py-5";
    default:
      return "px-5 py-5";
  }
})
</script>

<style scoped>
@media only screen and (max-width: 960px) {
  .adjust-height {
    min-height: 500px;
  }
}
</style>
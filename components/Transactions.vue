<template>
  <v-card
    tile
    light
    color="#EFEFEF"
    flat
    :class="`fill-height ${padding}`"
    v-if="data"
  >
    <v-container class="px-5 py-5" style="height: 100%">
      <div class="header">Transactions</div>
      <br />
      <simplebar style="overflow-x: hidden; height: 92%">
        <v-row v-for="item in data" :key="item.id">
          <v-col cols="6">
            <v-list-item class="pl-0">
                <v-menu absolute offset-y>
                  <template v-slot:activator="{ props }">
                    <v-list-item-title
                      class="item-title mb-3"
                      v-bind="props"
                    >
                      {{ item.store_name }}
                    </v-list-item-title>
                  </template>
                  <v-card color="#EFEFEF">
                    <v-container>{{ item.store_name }}</v-container>
                  </v-card>
                </v-menu>
                <v-list-item-subtitle class="item-subtitle">
                  <small>{{
                    new Date(item.date).toLocaleTimeString("pt-br", {
                      hour: "2-digit",
                      minute: "2-digit",
                      timeZone: "UTC",
                    })
                  }}</small>
                </v-list-item-subtitle>
            </v-list-item>
          </v-col>
          <v-col cols="6" align="right">
            <v-list-item class="pl-0">
                <v-menu absolute offset-y>
                  <template v-slot:activator="{ props }">
                    <v-list-item-title
                      v-bind="props"
                      class="item-title"
                    >
                      <strong>
                        R$
                        {{
                          item.total.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                        }}
                      </strong>
                    </v-list-item-title>
                  </template>
                  <v-card color="#EFEFEF">
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
import type { Transaction } from "~/data.type";

defineProps<{
  data?: Transaction[]
}>();

const { name } = useDisplay();

const padding = computed(() => {
  switch (name.value) {
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
@media only screen and (max-width: 600px) {
  .item-title {
    font-size: 12px !important;
  }
}
</style>
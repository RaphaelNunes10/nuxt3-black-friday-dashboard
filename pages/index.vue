<template>
  <div class="fill-height">
    <v-row no-gutters justify="center" class="fill-height">
      <v-col cols="12" md="8" lg="6" class="fill-height">
        <v-row no-gutters align="start" class="fill-height">
          <v-col cols="12" :style="summaryHeight">
            <Summary :data="data.summary" />
          </v-col>
          <v-col cols="12" sm="6" :style="rankingHeight">
            <ranking
              title="Revenues"
              color="#EFEFEF"
              :data="data.revenues_ranking"
            />
          </v-col>
          <v-col cols="12" sm="6" :style="rankingHeight">
            <Ranking
              dark
              title="Tickets"
              color="#282828"
              :data="data.tickets_ranking"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" lg="6" class="d-none d-md-block fill-height">
        <Transactions :data="data.transactions" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";

const apiDataStore = useMyApiDataStore();
const { data } = storeToRefs(apiDataStore);

const { name: displaySize } = useDisplay();

const summaryHeight = computed(() => {
  switch (displaySize.value) {
    case "lg":
      return "height: 40%";
    default:
      return "height: 45%";
  }
});

const rankingHeight = computed(() => {
  switch (displaySize.value) {
    case "lg":
      return "height: 60%";
    default:
      return "height: 55%";
  }
});

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
});
</script>
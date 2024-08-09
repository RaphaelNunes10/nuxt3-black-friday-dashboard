<template>
  <v-card tile flat dark class="fill-height" v-if="data">
    <v-row no-gutters style="height: 50%">
      <v-col cols="12" sm="2" class="day-col py-5">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12" :align="dayAlignment">
            <v-container class="pl-4 pr-5 pt-5">
              <div class="day-text">Today</div>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" :class="`data-col ${padding}`">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12">
            <v-container class="pl-4 pr-5 pt-5">
              <div class="label"><small>Revenues</small></div>
              <v-menu dark absolute offset-y>
                <template v-slot:activator="{ props }">
                  <div class="text-box" v-bind="props">
                    <span class="large-text">
                      <sup class="big-text">R$</sup>
                      {{
                        data.today.revenues.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      }}
                    </span>
                    &nbsp;
                    <v-icon size="40" :color="revenuesIcon.color">
                      {{ revenuesIcon.name }}
                    </v-icon>
                  </div>
                </template>
                <v-card color="#323232">
                  <v-container
                    >R$
                    {{
                      data.today.revenues.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    }}</v-container
                  >
                </v-card>
              </v-menu>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="4" :class="`data-col ${padding}`">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12">
            <v-container class="pl-4 pr-5 pt-5">
              <div class="label"><small>Tickets</small></div>
              <v-menu dark absolute offset-y>
                <template v-slot:activator="{ props }">
                  <div class="text-box" v-bind="props">
                    <span class="large-text">{{ data.today.tickets }}</span>
                    &nbsp;
                    <v-icon size="40" :color="ticketsIcon.color">
                      {{ ticketsIcon.name }}
                    </v-icon>
                  </div>
                </template>
                <v-card color="#323232">
                  <v-container>{{ data.today.tickets }}</v-container>
                </v-card>
              </v-menu>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters style="height: 50%">
      <v-col cols="12" sm="2" class="day-col py-5">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12" :align="dayAlignment">
            <v-container class="pl-4 pr-5 pt-5">
              <div class="day-text">Yesterday</div>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" :class="`data-col ${padding}`">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12">
            <v-container class="pl-4 pr-5 pt-5">
              <div class="d-block d-sm-none label"><small>Revenues</small></div>
              <v-menu dark absolute offset-y>
                <template v-slot:activator="{ props }">
                  <div class="text-box" v-bind="props">
                    <span class="medium-text">
                      <sup class="small-text">R$</sup>
                      {{
                        data.yesterday.revenues.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      }}
                    </span>
                  </div>
                </template>
                <v-card color="#323232">
                  <v-container
                    >R$
                    {{
                      data.yesterday.revenues.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    }}
                  </v-container>
                </v-card>
              </v-menu>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="4" :class="`data-col ${padding}`">
        <v-row no-gutters align="center" class="fill-height">
          <v-col cols="12">
            <v-container class="pl-4 pr-5 pt-5">
              <div class="d-block d-sm-none label"><small>Tickets</small></div>
              <v-menu dark absolute offset-y>
                <template v-slot:activator="{ props }">
                  <div class="text-box" v-bind="props">
                    <span class="medium-text">
                      {{ data.yesterday.tickets }}
                    </span>
                  </div>
                </template>
                <v-card color="#323232">
                  <v-container>{{ data.yesterday.tickets }}</v-container>
                </v-card>
              </v-menu>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import type { Summary } from "~/data.type";

const props = defineProps<{
  data: Summary
}>();

const revenuesIcon = reactive({
  name: "",
  color: "",
});

const ticketsIcon = reactive({
  name: "",
  color: "",
});

const { name } = useDisplay();

const padding = computed(() => {
  switch (name.value) {
    case "xs":
      return "px-1 py-0";
    default:
      return "px-5 py-5";
  }
})

const dayAlignment = computed(() => {
  switch (name.value) {
    case "xs":
      return "left";
    default:
      return "right";
  }
})

function setChevronIcon() {
  if (props.data.today.revenues > props.data.yesterday.revenues) {
    revenuesIcon.name = "mdi-chevron-up";
    revenuesIcon.color = "#00DE16";
  } else if (props.data.today.revenues == props.data.yesterday.revenues) {
    revenuesIcon.name = "";
    revenuesIcon.color = "";
  } else {
    revenuesIcon.name = "mdi-chevron-down";
    revenuesIcon.color = "red";
  }

  if (props.data.today.tickets > props.data.yesterday.tickets) {
    ticketsIcon.name = "mdi-chevron-up";
    ticketsIcon.color = "#00DE16";
  } else if (props.data.today.tickets == props.data.yesterday.tickets) {
    ticketsIcon.name = "";
    ticketsIcon.color = "";
  } else {
    ticketsIcon.name = "mdi-chevron-down";
    ticketsIcon.color = "red";
  }
}

watch(() => props.data, () => {
  setChevronIcon();
});
</script>

<style scoped>
.day-col {
  background: #282828;
}

.day-text {
  font-size: 13px;
  font-weight: 600;
  color: #00de16;
}

.data-col {
  background: #323232;
  color: white;
}

.text-box {
  display: flex;
  min-width: 0;
}

.small-text {
  font-size: 12px;
  font-weight: 200 !important;
}

.medium-text {
  font-size: 22px;
  font-weight: 400 !important;
}

.big-text {
  font-size: 22px;
}

.large-text {
  font-size: 52px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media only screen and (max-width: 1700px) {
  .large-text {
    font-size: 44px;
  }
}

@media only screen and (max-width: 1500px) {
  .big-text {
    font-size: 12px;
  }

  .large-text {
    font-size: 30px;
  }
}

@media only screen and (max-width: 600px) {
  .large-text {
    font-size: 30px;
  }
}
</style>
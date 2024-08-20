import { defineStore } from "pinia"
import { FetchError } from "ofetch";

export const useMyApiDataStore = defineStore({
  id: 'myApiDataStore',
  state: () => ({ 
    data: {} as Data
  }),
  actions: {
    async getData() {

      try {
        const apiData = await $fetch("https://run.mocky.io/v3/f967f0fc-6449-45dd-9296-a98d3e759a86")
        .catch((err: FetchError) => {
          throw `${err.status}: [${err.statusText}] ${err.response?._data?.message || "Unknown error."}`;
        }) as Data[];

        Object.assign(this.data, apiData[0]);
      }
      catch(e) {
				if (typeof e === "string") {
					console.error(e);
				} else {
					console.error("Unknown error.");
				}
			}
    }
  }
})

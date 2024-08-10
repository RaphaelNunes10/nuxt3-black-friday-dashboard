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
        const apiData = await $fetch("http://localhost:4000/0")
        .catch((err: FetchError) => {
          throw `${err.status}: [${err.statusText}] ${err.response?._data?.message || "Unknown error."}`;
        });

        Object.assign(this.data, apiData);
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

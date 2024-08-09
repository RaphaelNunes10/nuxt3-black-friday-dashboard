import { defineStore } from 'pinia'

export const useMySpinnerStore = defineStore({
  id: 'mySpinnerStore',
  state: () => ({ 
    spinner: false as boolean
  }),
  actions: {
    setSpinner(value: boolean) {
      this.spinner = value;
    }
  }
})

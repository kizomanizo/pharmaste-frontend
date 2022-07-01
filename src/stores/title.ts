import { defineStore } from 'pinia'

export const useTitle = defineStore({
    id: 'title',

    state: () => ({
        title: "Mwanzo",
        isVisible: true
    }),

    getters: {
        getTitle: (state) => state.title
    },

    actions: {
        changeTitle(heading: string) {
            this.title = heading
        }
    }
    // here is a fish <*)))>{
})
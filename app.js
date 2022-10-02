const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                {
                    title: 'The Final Empire',
                    author: 'Brandon Sanderson',
                },
                {
                    title: 'The way of kings',
                    author: 'Patrick Rothfuss',
                },
                {
                    title: 'name of the wind',
                    author: 'Brandon Sanderson',
                },
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
    }
});
app.mount('#app');
const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.riwalennbas.com',
            showBooks: true,
            books: [
                {
                    title: ' Hooked : comment créer un produit ou un service qui ancre des habitudes',
                    author: 'Nir Eyal, Pascale-Marie Deschamps',
                    img: 'https://m.media-amazon.com/images/P/B07G5MW81B.01._SCLZZZZZZZ_SX500_.jpg',
                    isFav: true,
                },
                {
                    title: 'Proprement Codeur. Code de conduite pour développeur professionnel',
                    author: 'Robert C. Martin',
                    img: 'https://m.media-amazon.com/images/I/41cM+1mcKoL._SX404_BO1,204,203,200_.jpg',
                    isFav: false,
                },
                {
                    title: 'Building Microservices: Designing Fine-Grained Systems',
                    author: 'Sam Newman',
                    img: 'https://m.media-amazon.com/images/I/519hB5niytL._SX379_BO1,204,203,200_.jpg',
                    isFav: true,
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
const app = Vue.createApp({
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
      changeTitle(title) {
          // this.title = "Something else"
          this.title = title
      }
    },
});
app.mount('#app');
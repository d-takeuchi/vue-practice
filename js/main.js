const app = Vue.createApp({
  data: () => ({
    newItem: '',
    todos: [],
  }),
  methods: {
    addItem: function (event) {
      let todo = {
        item: this.newItem,
      }
      console.log(todo)
      this.todos.push(todo)
    },
  },
}).mount('#app')

new Vue({
  el: "#app",
  data: {
    title: "Hello World."
  },
  methods: {
    changeTitle: function (event) {
      // console.log(event, this);
      this.title = event.target.value;
    }
  }
});
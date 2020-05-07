new Vue({
  el: "#app",
  data: {
    title: "Hello World.",
    link: "http://google.com",
    finishedLink: '<a href="http://google.com">Google</a>',
    crazyString: "<a href=\"http://google.com\">Google</a>",
    counter: 0,
    x: 0,
    y: 0,
    model: "Model"
  },
  methods: {
    changeTitle: function (event) {
      // console.log(event, this);
      this.title = event.target.value;
    },
    sayHello: function() {
      // return("Hi Hi Hi");
      return this.title;

    },
    increase: function(step) {
      this.counter+=step;
    }, 
    updateCoordinates: function(e) {
      this.x= e.clientX;
      this.y= e.clientY;

    }
  }
});
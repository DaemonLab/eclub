new Vue({
  el: "#blogposts",
  data: {
    link: ["index.html", "events.html","team.html", "projects.html","https://medium.com/elecclub-iit-indore/a-brief-introduction-to-computer-vision-technology-fdf0583342e2"]
  },
  methods: {
    openblog(num) {
      window.open(this.link[num]);
    }
  }
});

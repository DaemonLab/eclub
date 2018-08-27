Vue.component("event-component", {
  data: function() {
    return {
      events: [
        {
          id: 0,
          name: "Workshop on Beginner to Advanced Computer Vision Based Sensing",
          description:
            "A 14-day workshop in the summer vacation on the topic 'Beginner to Advanced Computer Vision Based Sensing'.Duration: 8th July - 22nd July 2018 ( 14 Days ).Colour identification. Workshop includes theory and practice sessions",
          image: "img/project/ComputerVision1.png"
        },
        {
          id: 1,
          name: "Basic Electronics Workshop",
          description:
            " This Workshop Aims at getting everyone Started with Electronics, equip everyone with the Basic Electronics Knowledge. The workshop is designed to present to you a good blend of Theoretical and Practical understanding with an extensive focus on Qualitative Understanding of the Concepts.This Workshop is divided into Multiple Modules so as to be convenient for you to easily choose only your topics of interest. You can choose to attend the Hands-On Sessions, along with the Theory Sessions",
          image: "img/event/BasicElectronicsWorkshop.png"
        },
        {
          id: 2,
          name: "Make-a-thon 2k18",
          description:
            "Presenting to you the one of a kind Hackathon code-named Make-a-thon, Where you will need to Harness every bit of Electronics Skills in you. Only the purest form of Electronics. All the Components will be made available to you. You can participate in Teams of 3. All teams are requested to kindly fill the google form so we can make necessary arrangements.",
          image: "img/event/Make-a-thon.png"
        },
        {
          id: 3,
          name: "Electrovanza 2.0",
          description:
            "Presenting the Electrovanza 2.0, an event which is designed to give the best possible exposure of fascinating side of electronics to all tech-maniacs, scheduled to happen on this Friday. Event comprises of Arduino Uno workshop with working demonstration of different sensors followed by in depth explanation of each model.",
          image: "img/event/Electrovanza-2.png"
        },
        {
          id: 4,
          name: "Raspberri Pi Workshop",
          description:
            "We at the Electronics Club want to take your learning a step ahead and closer to successfully making smart products and learn more about microcontrollers by conducting an exciting workshop on Raspberry Pi. The microcontroller is one of the finest available in the market and with its superior computing powers it is quite popular among the hobbyists and product developers alike. The workshop will cover the basics of installing and getting started with the microcontroller coding.",
          image: "img/event/RaspberriPiWorkshop.png"
        },
        {
          id: 5,
          name: "Monopoly of Circuits",
          description:
            "An event held in Fluxus with prizes worth 15k, to test your Knowledge in electronics",
          image: "img/event/MonopolyOfCircuits.png"
        },
      ]
    };
  },
  template: `
    <div class="team row">
      <div class="col-lg-4 d-flex align-items-stretch" v-for="event in events" :key="event.id">
        <div class="card">
          <div class="profile-container">
            <img class="card-img-top" :src="event.image" alt="">
          </div>
          <div class="card-body">
          <div class="card-body align-items-bottom d-flex justify-content-center">
            <h3 class="card-title">{{event.name}}</h3>
          </div>
          <div class="card-body align-items-bottom d-flex justify-content-center">
            <p class="card-text mb-2">{{event.description}}</p>
          </div>
            <a href="#"><i class="fab fa-github"></i> </a>
          </div>
        </div>
      </div>
    </div>
  `
});

new Vue({
  el: "#app"
});

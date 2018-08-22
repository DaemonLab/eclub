Vue.component("project-component", {
  data: function() {
    return {
      projects: [
        {
          id: 0,
          name: "Ground Station for Satellite Communication",
          description:
            "To build an on-ground terminal linked to a satellite by an antenna and the associated electronic equipment for the purpose of transmitting and receiving messages, tracking, and control.Ground Station Team for successfully receiving and decoding real-time Images of The Earth from passing by Weather Satellites",
          image: "img/project/GroundStationNOAAdata1.png"
        },
        {
          id: 1,
          name: "RFID",
          description:
            "Crux of the project is to use Arduino to create a system to manage, register and edit the student database in mess and many other places where the entry of students is to be registered by your smart card. There are no particular prerequisites for this project, however knowledge of basic electronics stuff or about database management will sure be handy. Through this project you can learn a great deal about Arduino and its integration with other sensors like RFID reader modules, also you will learn about database creation and management. It is fully funded by Electronics Club, IIT Indore. Link for RFID. This will save time and will shorten queue to great extent.",
          image: "img/project/RFID.png"
        },
        {
          id: 2,
          name: "Home Automation",
          description:
            "As you all are already familiar with home automation, which basically deals with Automating simple stuff which makes life easier. As we will be implementing it in our hostels so the basic things which we can do will be automating lights, fans in rooms as well as common areas. This is going to be an IoT Based Project, We would be controlling the state of the appliance using our mobile phones via Bluetooth or the Internet. Do come up with innovative ideas that are Useful, as well as feasible to implement in our Hostels.",
          image: "img/project/HomeAutomation.png"
        },
        
        {
          id: 3,
          name: "LaunchPad",
          description:
            "This project is about making an Arduino based LaunchPad which can send MIDI notes to our laptor.Further implementation can be using Bluetooth Low EnergyTM to directly send data to bluetooth devices like speaker or headset. There are no perticular prerequisites for this project but some past experience with basic electronics stuff will help you to learn fast. You will learn about Arduino and get familiar with different sensors, MIDI, I2C and SPI communication. It is fully funded by Electronics Club",
          image: "img/project/LaunchPad.png"
        },
        {
          id: 4,
          name: "POV",
          description:
            "Persistence Of Vision. Persistence of vision refers to the optical illusion that occurs when visual perception of an object does not cease for some time after the rays of light proceeding from it have ceased to enter the eye. In this project we are going to use POV concept to display words using revolving LEDs. There are no prerequisite for this project. We will learn required things along the way",
          image: "img/project/POV.png"
        },
        {
          id: 5,
          name: "Smart Alarm Clock",
          description:
            "Alarm Clock with features as Calender Sync and Voice assist. Future development of this project is to integrate Natural Language Processing for interactive purposes",
          image: "img/project/SmartAlarmClock.png"
        },
      ]
    };
  },
  template: `
    <div class="team row">
      <div class="col-lg-4 d-flex align-items-stretch" v-for="project in projects" :key="project.id">
        <div class="card">
          <div class="profile-container">
            <img class="card-img-top" :src="project.image" alt="">
          </div>
          <div class="card-body">
          <div class="card-body align-items-bottom d-flex justify-content-center">
            <h3 class="card-title">{{project.name}}</h3>
          </div>  
          <div class="card-body align-items-bottom d-flex justify-content-center">
            <p class="card-text mb-2">{{project.description}}</p>
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
